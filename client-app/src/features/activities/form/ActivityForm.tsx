import React, { ChangeEvent, useEffect, useState } from 'react';
import {TextField, Button, 
        Card, CardContent, CircularProgress } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { useHistory, useParams } from 'react-router';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { v4 as uuid } from 'uuid';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    submit: {
        margin: theme.spacing(2, 0.5, 1),
    },
}));

export default observer (function ActivityDetails(){
    const history = useHistory();
    const {activityStore} = useStore();
    const {createActivity, updateActivity, loading, 
        loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();

    const classes = useStyles();

    const [activity, setActivity] = useState({
        id: '',
        title: '', 
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!)) 
    }, [id, loadActivity]);

    function handleSubmit(event: any){
        if(event) {
            event.preventDefault() // this is important to be able load full logical before post submit
        }
        
        if (activity.id.length === 0) {
            let newActivity = {
                ...activity,
                id: uuid()
            };
            createActivity(newActivity).then(
                () => history.push(`/activities/${newActivity.id}`))
        } else {
            updateActivity(activity).then(
                () => history.push(`/activities/${activity.id}`))
        }
        
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setActivity({...activity, [name]: value});
    }

    if(loadingInitial) return <LoadingComponent/>;

    return (
        <Card variant="outlined" className={classes.root} style={{outline: '2px ridge rgba(227, 176, 7, .6)'}}>
            <CardContent>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <TextField name="title"
                        value={activity.title}
                        onChange={handleInputChange}
                        label="Title"
                        margin='dense'
                        variant='outlined'
                        fullWidth
                    />
                    <TextField name="description"
                        value={activity.description}
                        onChange={handleInputChange}
                        label="Description" 
                        multiline 
                        rows={3} 
                        margin='dense'
                        variant='outlined'
                        fullWidth
                    />
                    <TextField name="category"
                        value={activity.category}
                        onChange={handleInputChange}
                        label="Category" 
                        margin='dense'
                        variant='outlined'
                        fullWidth 
                    />
                    <TextField name="date"
                        value={activity.date}
                        onChange={handleInputChange}
                        type='date'
                        margin='dense'
                        variant='outlined'
                        fullWidth
                    />
                    <TextField name="city"
                        value={activity.city}
                        onChange={handleInputChange}
                        label="City" 
                        margin='dense'
                        variant='outlined'
                        fullWidth
                    />
                    <TextField name="venue"
                        value={activity.venue}
                        onChange={handleInputChange}
                        label="Venue" 
                        margin='dense'
                        variant='outlined'
                        fullWidth
                    />

                    <Button 
                        className={classes.submit} 
                        variant="contained"
                        disabled={loading}
                        type="submit"
                        color="primary"
                    >
                        {loading && <CircularProgress size={22} />}
                        {!loading && 'Submit'}
                    </Button>
                    <Button className={classes.submit}
                        variant="contained" 
                        color="secondary">
                        Cancel
                    </Button>
                </form>
            </CardContent>

        </Card>
    )

});