import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props {
    activities: Activity[];
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2), // 16 px padding
        margin: 'auto',
        color: theme.palette.text.secondary,
      },
}));

export default function ActvityDashboard({activities} : Props){
    const classes = useStyles();

    return (
        // <div className={classes.root}>
            <Grid container spacing={2}>
                    <Grid xs={6} item>
                        <Paper className={classes.paper}>
                            <ActivityList activities={activities}/>
                        </Paper>
                    </Grid>

                    <Grid xs={6} container direction="column" item spacing={2}> 
                    
                        <Grid item> 
                            <Paper className={classes.paper}>
                                {activities[0] && 
                                <ActivityDetails activity={activities[0]}/>}
                            </Paper>
                        </Grid>

                        <Grid item>
                            <Paper className={classes.paper}>
                                <ActivityForm/>
                            </Paper>
                        </Grid>

                    </Grid>
            </Grid>
        // </div>
    )
}