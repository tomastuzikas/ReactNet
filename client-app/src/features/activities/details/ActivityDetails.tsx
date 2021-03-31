import React from 'react';
import {Card, CardMedia, CardActionArea, CardActions, CardContent, Typography, Button}  from '@material-ui/core/';
import { useStore } from '../../../app/stores/store';

export default function ActivityDetails(){

    // console.log(activity);
    const {activityStore} = useStore();
    const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;

    if (!activity) return <></>;

    return (

        <Card variant="outlined" style={{outlineColor: 'purple', outlineStyle: 'solid'}}>
            <CardActionArea>
                <CardMedia
                    style={{height: 140}}
                    image={`/assets/categoryImages/${activity.category}.jpg`}
                    title="Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">{activity.title}</Typography>
                    <Typography variant="caption" color="textSecondary" gutterBottom>{activity.date}</Typography>
                    <Typography variant="body2" component="p">{activity.description}</Typography>
                </CardContent>
                
            </CardActionArea>
            <CardActions>
                <Button onClick={() => openForm(activity.id)} size="small" variant="contained" color="primary">Edit</Button>
                <Button onClick={cancelSelectedActivity}  size="small" variant="contained" color="secondary">Cancel</Button>
            </CardActions>
        </Card>
         
    )
}