import React, { Component } from 'react'
import axios from 'axios'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


 export default class window extends Component{
     constructor(){
         super()
         this.state = {
          socket: {}
         }
     }

     componentWillMount()
     {
      this.setState({socket:this.props.socket})
      console.log(this.props.socket)
      this.props.socket.on("RECIEVE",(data)=>{
        console.log("datarecieve\n")
        console.log(data)
      })
     }

    render(){

        return(<div>
      <Paper style={{maxHeight: 500, minHeight:500, overflow: 'auto'}}>
  <List>


  </List>
</Paper>

    </div>
    )
    }





 }
