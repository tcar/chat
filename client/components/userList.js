import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const style = {
    background:{
        maxHeight:500,
        minHeight:500,
        overflow: 'auto',
        color:"white",
        background:"black"
    },
    cursor:{
        cursor:"pointer"
    }
}
 export default class userList extends Component{
     constructor()
     {
         super()
         this.state = {
             socket:{},
             users :[],
             open:false,
             nickname:"",
             user:{}
         }
         this.handleChange = this.handleChange.bind(this)
         this.handleOpen = this.handleOpen.bind(this)
         this.update = this.update.bind(this)
     }
     componentWillMount()
     {
        this.setState({socket:this.props.socket})
        this.props.socket.on("SENDUSERS",(users)=>{
            console.log(users)
            this.setState({users:users})
        })
        this.props.socket.on("USERDATA", (data)=>{
            this.setState({user: data})
        })        

     }

    render(){
        let users = []
        for (let key in this.state.users)
        {
            users.push(<p key={key} style={style.cursor} onClick={(e)=>{this.handleOpen(e, this.state.users[key].username)}}>{this.state.users[key].username}</p>)
        }
        return(<div>
            <Paper style={style.background}>
        <List>
            {users}
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

            <Button onClick={()=>{this.update()}} color="primary">
              Enter
            </Button>
          </DialogActions>
        </Dialog>
        </List>
      </Paper>
          </div>
    )
    }

    handleChange(e)
    {
      let nickname = e.target.value
      this.setState({nickname})
    }

    handleOpen(e, username)
    {
        console.log(username)
        console.log(this.state.user)
        this.state.user.username === username ? this.setState({open:true}): null
        this.state.nickname = username
    }

    update()
    {
      this.state.user.username = this.state.nickname
      console.log(this.state.users)
      this.state.socket.emit("CREATEORUPDATE",this.state.user)
      this.setState({open:false})
    }
 }
