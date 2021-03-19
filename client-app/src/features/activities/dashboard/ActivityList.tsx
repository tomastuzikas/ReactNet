import React from 'react';
import { Activity } from '../../../app/models/activity';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

interface Props {
    activities: Activity[];
}


export default function ActivityList({activities} : Props){

    return (
        <div>
            {activities.map((activity: Activity) => (
                <Grid key={activity.id} item xs={12} sm container spacing={2}>
                    <Grid item xs container direction="column">
                        <Grid item xs>
                                <Typography gutterBottom variant="h6">{activity.title}</Typography>
                                <Typography variant="caption" color="textSecondary" gutterBottom>{activity.date}</Typography>
                                <Typography variant="subtitle2">{activity.description}</Typography>
                                <Typography>{activity.city}, {activity.venue}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item style={{position: 'relative'}}>
                        <Typography align="right" variant="body2" style={{ cursor: 'pointer', color: 'blue', position: 'absolute', bottom: 0}}>
                            View {activity.category}
                        </Typography>
                    </Grid>
                </Grid>
                ))}
        </div>
    )
}