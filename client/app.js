import axios from 'axios'
import React, { Component } from 'react'
import io from "socket.io-client"

import Main from './components/main'



 export default class App extends Component{
   constructor(){
     super()
     this.state = {
      endpoint: "http://localhost:3000/", 
      socket:''  
    }
   }
 componentDidMount()
 {
   var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const data = {
      lat: pos.coords.latitude,
      long: pos.coords.longitude,
      acc: pos.coords.accuracy
    }
    axios.post("/user/login", data)
  }
  
  function locationEerror(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, locationEerror, options)

 }
   
    render(){
      const { endpoint } = this.state;
      const socket = io(endpoint)

        return(<div>
      <h1>App</h1>
            <Main  socket={socket}/>

    </div>
    )
    }
 }
