import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import UserList from './userList'
import Window from './window'

import Input from './input'

 export default class Main extends Component{

    render(){
        const socket = this.props.socket
        console.log(socket)
        return(
        <div>
        <h1>main</h1>
        <div >
            <Grid
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
                                <Window socket = {socket}/>
                            </Paper>
                        </Grid>

                        <Grid item xs={2}>
                            <Paper>
                                <UserList/>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid item xs={8}>
                        <Input socket = {this.props.socket}/>
                    </Grid>
                </Grid>

            </Grid>
        </div>

    </div>
    )
    }
 }
