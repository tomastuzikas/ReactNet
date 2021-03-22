import React from 'react';
import {Card, CardMedia, CardActionArea, CardActions, CardContent, Typography, Button}  from '@material-ui/core/';
import { Activity } from '../../../app/models/activity'

interface Props {
    activity: Activity
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({activity, cancelSelectActivity, openForm}: Props){

    console.log(activity);

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
                <Button onClick={cancelSelectActivity}  size="small" variant="contained" color="secondary">Cancel</Button>
            </CardActions>
        </Card>
         
    )
}