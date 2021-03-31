import React, { ChangeEvent, useState } from 'react';
import {TextField, Button, 
        Card, CardContent, CircularProgress } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

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

    const {activityStore} = useStore();
    const {selectedActivity, closeForm, createActivity, updateActivity, loading} = activityStore;

    const classes = useStyles();

    const initialState = selectedActivity ?? {
        id: '',
        title: '', 
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit(event: any){
        if(event){
            event.preventDefault()
        }
        activity.id ? updateActivity(activity) : createActivity(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setActivity({...activity, [name]: value});
    }

    return (
        <Card variant="outlined" className={classes.root} style={{outlineColor: 'purple', outlineStyle: 'solid'}}>
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
                        onClick={closeForm} 
                        variant="contained" 
                        color="secondary">
                        Cancel
                    </Button>
                </form>
            </CardContent>

        </Card>
    )

});