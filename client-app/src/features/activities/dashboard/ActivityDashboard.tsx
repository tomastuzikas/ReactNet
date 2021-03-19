import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        color: theme.palette.text.secondary,
      },
}));

export default function ActvityDashboard({activities} : Props){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                       <ActivityList activities={activities}/>
                </Grid>
            </Paper>
        </div>
    )
}