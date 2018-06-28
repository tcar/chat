import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import UserList from './userList'
import Window from './window'
import Input from './input'

 export default class Main extends Component{
    render(){
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
                        <Grid item centered xs={6}>
                            <Paper>
                                <Window/>
                            </Paper>
                        </Grid>

                        <Grid item centered xs={2}>
                            <Paper>
                                <UserList/>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid item centered xs={8}>
                        <Input/>
                    </Grid>
                </Grid>

            </Grid>
        </div>

    </div>
    )
    }
 }
