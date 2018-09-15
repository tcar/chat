import axios from 'axios'
import React, { Component } from 'react'
import io from "socket.io-client"

import Main from './components/main'



 export default class App extends Component{
   constructor(){
     super()
     this.state = {
      endpoint: `${window.location.hostname}:${process.env.PORT}`, 
      socket:''  
    }
   }
   componentWillMount()
   {
    const { endpoint } = this.state;
    const socket = io(endpoint)
    this.setState({socket})
   }
   
    render(){

        return(<div>
            <Main  socket={this.state.socket}/>

    </div>
    )
    }
  }
 
