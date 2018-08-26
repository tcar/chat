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
   componentWillMount()
   {
    const { endpoint } = this.state;
    const socket = io(endpoint)
    this.setState({socket})
    console.log(this.state.socket)
   }
   
    render(){

        return(<div>
      <h1>App</h1>
            <Main  socket={this.state.socket}/>

    </div>
    )
    }
  }
 
