import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

 export default class userList extends Component{
     constructor()
     {
         super()
         this.state = {
             socket:{},
             users :[]
         }
     }
     componentWillMount()
     {
        this.setState({socket:this.props.socket})
        this.props.socket.on("SENDUSERS",(users)=>{
            console.log("here")
            console.log(users)
            this.setState({users:users})
        })

     }
    render(){
        let users = []
        for (let key in this.state.users)
        {
            users.push(this.state.users[key].username)
        }
        console.log(users)
        return(<div>
            <Paper style={{maxHeight: 500, overflow: 'auto'}}>
        <List>
            {users}
        </List>
      </Paper>
          </div>
    )
    }
 }
