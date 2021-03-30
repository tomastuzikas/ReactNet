import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
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

export default function ActvityDashboard({
    activities, selectedActivity, 
    selectActivity, cancelSelectActivity,
    editMode, openForm,
    closeForm, createOrEdit, 
    deleteActivity, submitting} : Props){
        
    const classes = useStyles();

    return (
        <Grid container spacing={2}>

            {/* ACTIVITIES COLUMN */}
                <Grid xs={6} item>
                    <Paper className={classes.paper}>
                        <ActivityList 
                            activities={activities} 
                            selectActivity={selectActivity}
                            deleteActivity={deleteActivity}
                            submitting={submitting}
                        />
                    </Paper>
                </Grid>

            {/* VIEW-EDIT COLUMN */}
                <Grid xs={6} container direction="column" item spacing={2}> 

                    {/* VIEW FORM */}
                    {selectedActivity && !editMode && 
                        <Grid item> 
                            <Paper className={classes.paper}>
                                <ActivityDetails 
                                    activity={selectedActivity} 
                                    cancelSelectActivity={cancelSelectActivity}
                                    openForm={openForm}
                                />
                            </Paper>
                        </Grid>
                    }
                    
                    {/* EDIT FORM */}
                    {editMode &&
                        <Grid item>
                            <Paper className={classes.paper}>
                                <ActivityForm
                                    closeForm={closeForm}
                                    activity={selectedActivity}
                                    createOrEdit={createOrEdit}
                                    submitting={submitting}
                                />
                            </Paper>
                        </Grid>
                    }
                </Grid>
        </Grid>
    )
}