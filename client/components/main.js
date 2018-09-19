import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//components
import UserList from './userList'
import Window from './window'
import Input from './input'

//css



const style = {
    background:{
        padding: 50
    }
}
 export default class Main extends Component{
    constructor(){
        super()
        this.state ={
            socket:{},
            user:{}
        }
    }

    componentWillMount()
    {
        this.setState({socket:this.props.socket})
        this.props.socket.on("USERDATA", (data)=>{
            this.setState({user: data})
        })
    }

    render(){
        const socket = this.props.socket
        return(
        <div >
        <div  >
            <Grid style={style.background}
            container 
            >
               <Grid
               container
               direction='row'
               justify='center'
               spacing={8}
               >
                    <Grid 
                    container
                    direction='row'
                    justify='center'
                    spacing={8}
                    >
                        <Grid item xs={6}>
                            <Paper>
                                <Window ip={this.props.ip} user = {this.state.user} socket = {socket}/>
                            </Paper>
                        </Grid>

                        <Grid item xs={2}>
                            <Paper>
                                <UserList socket = {socket}/>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid item xs={8}>
                        <Input user = {this.state.user} socket = {this.props.socket}/>
                    </Grid>
                </Grid>

            </Grid>
        </div>

    </div>
    )
    }
 }
