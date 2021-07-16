import React, { useEffect } from 'react';
import {Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ActivityList from './ActivityList';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';

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

export default observer(function ActvityDashboard(){
        
    const {activityStore} = useStore();
    const classes = useStyles(); 

    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore])

    if (activityStore.loadingInitial) return <LoadingComponent/>

    return (
        <Grid container spacing={2}>

            {/* ACTIVITIES COLUMN */}
                <Grid xs={6} item>
                    <Paper className={classes.paper}>
                        <ActivityList />
                    </Paper>
                </Grid>

            {/* VIEW-EDIT COLUMN */}
                <Grid xs={6} container direction="column" item spacing={2}> 

                    <h2>Activity filters</h2>

                    {/* VIEW FORM */}
                    {/* {selectedActivity && !editMode && 
                        <Grid item> 
                            <Paper className={classes.paper}>
                                <ActivityDetails/>
                            </Paper>
                        </Grid>
                    } */}
                    
                    {/* EDIT FORM */}
                    {/* {editMode &&
                        <Grid item>
                            <Paper className={classes.paper}>
                                <ActivityForm />
                            </Paper>
                        </Grid>
                    } */}

                    
                </Grid>
        </Grid>
    )
});