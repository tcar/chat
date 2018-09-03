import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';



 export default class window extends Component{
     constructor(){
         super()
         this.state = {
          socket: {},
          open:false,
          nickname:""
         }

         this.createOrUpdate = this.createOrUpdate.bind(this)
         this.handleChange = this.handleChange.bind(this)
     }

     componentWillMount()
     {
      this.setState({socket:this.props.socket})
      this.props.socket.on("NONICKNAME",(data)=>{
        this.setState({open:true})
      })
      this.props.socket.on("NEWUSER", (data)=>{
        this.setState({open:false})
      })
     }

    render(){

        return(<div>
      <Paper style={{maxHeight: 500, minHeight:500, overflow: 'auto'}}>
  <List>

<Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Enter your nickname</DialogTitle>
          <DialogContent>
            <TextField
            onChange={(e)=>{this.handleChange(e)}}
              autoFocus
              margin="dense"
              id="nickname"
              label="nickname"
              type="text"
              value={this.state.nickname}
              fullWidth
            />
          </DialogContent>
          <DialogActions>

            <Button onClick={()=>{this.createOrUpdate()}} color="primary">
              Enter
            </Button>
          </DialogActions>
        </Dialog>
  </List>
</Paper>

    </div>
    )
    }

  createOrUpdate()
  {
    let user = {
      username:this.state.nickname
    }
    console.log("here)")
    console.log(this.state.socket.emit)
    this.state.socket.emit("CREATEORUPDATE",user)
  }
  handleChange(e)
  {
    console.log(this.state)
    let nickname = e.target.value
    this.setState({nickname})
  }
 }
