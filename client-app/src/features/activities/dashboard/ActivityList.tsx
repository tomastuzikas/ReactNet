import React from 'react';
import { Activity } from '../../../app/models/activity';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Card, CardActions, CardContent}  from '@material-ui/core/';

interface Props {
    activities: Activity[];
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

export default function ActivityList({activities} : Props){
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
                            <Button size="small" variant="contained" color="primary">View</Button>
                        </CardActions>
                    </Card>
                </Grid>
                ))}
        </Grid>
    )
}