import React, { useEffect } from 'react';
import {Card, CardMedia, CardActionArea, CardActions, CardContent, Typography, Button}  from '@material-ui/core/';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useParams } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

export default observer( function ActivityDetails(){

    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();

    useEffect(()=>{
        if(id) loadActivity(id);
    }, [id, loadActivity]);


    if (loadingInitial || !activity) return <LoadingComponent/>;

    return (

        <Card variant="outlined" style={{outline: '2px ridge rgba(171, 5, 66, .6)'}}>
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
                <Button component={Link} to={`/manage/${activity.id}`} size="small" variant="contained" color="primary">Edit</Button>
                <Button component={Link} to={'/activities'} size="small" variant="contained" color="secondary">Cancel</Button>
            </CardActions>
        </Card>
         
    )
});