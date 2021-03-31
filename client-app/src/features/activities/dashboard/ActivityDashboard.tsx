import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

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
    const {selectedActivity, editMode} = activityStore; 
    
    const classes = useStyles();

   

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

                    {/* VIEW FORM */}
                    {selectedActivity && !editMode && 
                        <Grid item> 
                            <Paper className={classes.paper}>
                                <ActivityDetails/>
                            </Paper>
                        </Grid>
                    }
                    
                    {/* EDIT FORM */}
                    {editMode &&
                        <Grid item>
                            <Paper className={classes.paper}>
                                <ActivityForm />
                            </Paper>
                        </Grid>
                    }
                </Grid>
        </Grid>
    )
});