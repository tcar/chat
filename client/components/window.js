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
            dialogOpen: false,
            nickname:""
         }
         this.handleClickOpen = this.handleClickOpen.bind(this)
         this.handleClose = this.handleClose.bind(this)
     }

    render(){
        const socket = this.props.socket
        socket.on("newUser",(data)=>{
            console.log("hereeeee")
            console.log(data)
            this.handleClickOpen()
        })
        return(<div>
      <Paper style={{maxHeight: 500, minHeight:500, overflow: 'auto'}}>
  <List>


  </List>
</Paper>
<Dialog
          open={this.state.dialogOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Enter your nickname</DialogTitle>
          <DialogContent>

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="nickname"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
    </div>
    )
    }

    handleClickOpen() {
        this.setState({ dialogOpen: true });
      };
    
      handleClose() {
        axios.post("/user/signup",this.state.nickname)
        this.setState({ dialogOpen: false });
      };



 }
