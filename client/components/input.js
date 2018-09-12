import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'

const style = {
    background:{
        maxHeight:100,
        overflow: 'auto',
        color:"white",
        background:"#2e2a36"
    },
    text:{
        overflow:"auto"
    }
}
 export default class InputText extends Component{
     constructor(){
         super()
         this.state = {
             input:"",
             socket:{},
             user:{}
         }
         this.send = this.send.bind(this)
         this.handleChange = this.handleChange.bind(this)
     }
     componentWillMount()
     {

         this.setState({socket: this.props.socket})
     }
    render(){

        return(
            <div>
            <Paper style={{maxHeight: 100, overflow: 'auto'}}>
                <List fullWidth>
                    
                    <FormControl fullWidth>
                        <InputLabel htmlFor="name-simple">Message...</InputLabel>
                        <Input fullWidth={true} id="name-simple" value={this.state.input} onChange ={(e)=>{this.handleChange(e)}} onKeyPress={(e)=>{this.send(this.state.input, e)}} />
                    </FormControl>
                </List>
      </Paper>
          </div>
    )
    }

    handleChange (e)
    {
        this.setState({input: e.target.value})
    }

    send(message, e){
        let msg = {
            user:this.props.user,
            message
        }
        
        if(e.key ==="Enter")
        {
            this.state.socket.emit("SEND", msg )

        }
    }
 }
