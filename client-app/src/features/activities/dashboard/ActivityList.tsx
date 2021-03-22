import React from 'react';
import { Activity } from '../../../app/models/activity';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Button, Typography, Card, CardActions, CardContent}  from '@material-ui/core/';

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

const useStyles = makeStyles((theme) => ({
    Info: {
        marginTop: '2px',
        border: '1px solid #b1a8a8',
        display: 'block',
        padding: '2px',
        borderRadius: '9px',
        width: 'fit-content'
      },
}));

export default function ActivityList({activities, selectActivity, deleteActivity} : Props){
    const classes = useStyles();

    return (
        <Grid container direction="column">
            {activities.map((activity: Activity) => (
                
                <Grid item key={activity.id} style={{outlineColor: 'green', outlineStyle: 'solid'}}>
                    <Card variant="outlined" style={{outlineColor: 'purple', outlineStyle: 'solid'}}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">{activity.title}</Typography>
                            <Typography variant="caption" color="textSecondary" gutterBottom>{activity.date}</Typography>
                            <Typography variant="body2" component="p">{activity.description}</Typography>
                            <Typography variant="body2" component="p">{activity.city}, {activity.venue}</Typography>
                            <Typography variant="body2" component="p" className={classes.Info}>{activity.category}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button 
                                onClick={() => selectActivity(activity.id)} 
                                size="small" 
                                variant="contained" 
                                color="primary"
                            >
                                View
                            </Button>
                            <Button 
                                onClick={() => deleteActivity(activity.id)} 
                                size="small" 
                                variant="contained" 
                                color="secondary"
                            >
                                Delete
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                ))}
        </Grid>
    )
}