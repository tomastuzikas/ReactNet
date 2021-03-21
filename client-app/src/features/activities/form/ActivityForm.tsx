import React from 'react';
import {TextField, Button}  from '@material-ui/core/';
import {Card, CardActions, CardContent}  from '@material-ui/core/';

import { makeStyles } from '@material-ui/core/styles';
// import { Activity } from '../../../app/models/activity'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
}));


export default function ActivityDetails(){
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.root} style={{outlineColor: 'purple', outlineStyle: 'solid'}}>
            <CardContent>
                <form noValidate autoComplete="off">
                    <TextField 
                    label="Title"
                    margin='dense'
                    variant='outlined'
                    fullWidth
                    />
                    <TextField 
                    label="Description" 
                    multiline 
                    rows={3} 
                    margin='dense'
                    variant='outlined'
                    fullWidth
                    />
                    <TextField 
                    label="Category" 
                    margin='dense'
                    variant='outlined'
                    fullWidth 
                    />
                    <TextField 
                    label="Date" 
                    margin='dense'
                    variant='outlined'
                    fullWidth
                    />
                    <TextField 
                    label="City" 
                    margin='dense'
                    variant='outlined'
                    fullWidth
                    />
                    <TextField 
                    label="Venue" 
                    margin='dense'
                    variant='outlined'
                    fullWidth
                    />
                    
                </form>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" color="primary">Submit</Button>
                <Button size="small" variant="contained" color="secondary">Cancel</Button>
            </CardActions>

        </Card>
    )

}