import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
 export default class InputText extends Component{
     constructor(){
         super()
         this.state = {
             input:"",
             socket:{}
         }
         this.send = this.send.bind(this)
         this.handleChange = this.handleChange.bind(this)
     }
     componentWillMount()
     {
         console.log(this.props)
         this.setState({socket: this.props.socket})
     }
    render(){
        this.props.socket.on("SEND", (data)=>{
            console.log("\nhhh")
            console.log(data)
        })
        return(
            <div>
            <Paper style={{maxHeight: 100, overflow: 'auto'}}>
                <List>
                    
                    <FormControl>
                        <InputLabel htmlFor="name-simple">Name</InputLabel>
                        <Input id="name-simple" value={this.state.input} onChange ={(e)=>{this.handleChange(e)}} />
                    </FormControl>
                </List>
                <Button onClick={()=>{this.send(this.state.input)}}>send</Button>
      </Paper>
          </div>
    )
    }

    handleChange (e)
    {
        this.setState({input: e.target.value})
    }

    send(message){
        let msg = {
            message
        }
        
        this.state.socket.emit("SEND", msg )
    }
 }
