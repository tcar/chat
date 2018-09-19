import axios from 'axios'
import React, { Component } from 'react'
import io from "socket.io-client"

import Main from './components/main'



 export default class App extends Component{
   constructor(){
     super()
     this.state = {
      endpoint: `${window.location.hostname}:${process.env.PORT}`, 
      socket:'',
      ip:""
    }
   }
   componentWillMount()
   {
    const { endpoint } = this.state;
    const socket = io()
    this.setState({socket})

    axios.get('https://api.ipify.org?').then((data)=>{
    socket.emit("LOGIN", data.data)
  })
   }
   
    render(){

        return(<div>
            <Main socket={this.state.socket}/>

    </div>
    )
    }
  }
 
