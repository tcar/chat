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


const style = {
  background:{
    background: "#2e2a36",
    maxHeight: 500,
    minHeight:500,
    overflow: 'scroll',
    color:"white"
  }
}
 export default class window extends Component{
     constructor(){
         super()
         this.state = {
          socket: {},
          open:false,
          user:"",
          nickname:"",
          message:[]
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

      this.props.socket.on("MESSAGE", (msg)=>{
        this.state.message.push(msg)
        this.setState({message: this.state.message})
      })
     }

     componentDidUpdate()
     {
      this.scroller.scrollTop = this.scroller.scrollHeight
     }


    render(){

      let msg = this.state.message.map((msg, index)=>{
        return <div key={index}><b>{msg.user.username}</b><p >{msg.message}</p></div>
      })
        return(<div  >
      <div style={style.background}
           ref = {(scroller) => {
             this.scroller = scroller
           }}
      >
  <List>
{msg}
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
            />
          </DialogContent>
          <DialogActions>

            <Button onClick={()=>{this.createOrUpdate()}} color="primary">
              Enter
            </Button>
          </DialogActions>
        </Dialog>
  </List>
</div>

    </div>
    )


    }

  createOrUpdate()
  {
    
    let user = {
      username:this.state.nickname,
      ip:this.props.ip
    }
    this.setState({open:false})
    this.state.socket.emit("CREATEORUPDATE",user)
    this.scroller.scrollTop = this.scroller.scrollHeight

  }
  handleChange(e)
  {
    let nickname = e.target.value
    this.setState({nickname})
  }
 }
