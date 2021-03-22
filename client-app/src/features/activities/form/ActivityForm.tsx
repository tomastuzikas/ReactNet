import React, { ChangeEvent, useState } from 'react';
import {TextField, Button, 
        Card, CardContent } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { Activity } from '../../../app/models/activity';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    submit: {
        margin: theme.spacing(2, 0.5, 1),
    },
}));

interface Props{
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;

}

export default function ActivityDetails({activity: selectedActivity, closeForm, createOrEdit} : Props){
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

    function handleSubmit(){
        createOrEdit(activity)
        // console.log(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setActivity({...activity, [name]: value});
    }

    return (
        <Card variant="outlined" className={classes.root} style={{outlineColor: 'purple', outlineStyle: 'solid'}}>
            <CardContent>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
                    <TextField 
                        value={activity.title}
                        name="title"
                        onChange={handleInputChange}
                        label="Title"
                        margin='dense'
                        variant='outlined'
                        fullWidth
                    />
                    <TextField 
                        value={activity.description}
                        name="description"
                        onChange={handleInputChange}
                        label="Description" 
                        multiline 
                        rows={3} 
                        margin='dense'
                        variant='outlined'
                        fullWidth
                    />
                    <TextField 
                        value={activity.category}
                        name="category"
                        onChange={handleInputChange}
                        label="Category" 
                        margin='dense'
                        variant='outlined'
                        fullWidth 
                    />
                    <TextField 
                        value={activity.date}
                        name="date"
                        onChange={handleInputChange}
                        label="Date" 
                        margin='dense'
                        variant='outlined'
                        fullWidth
                    />
                    <TextField 
                        value={activity.city}
                        name="city"
                        onChange={handleInputChange}
                        label="City" 
                        margin='dense'
                        variant='outlined'
                        fullWidth
                    />
                    <TextField 
                        value={activity.venue}
                        name="venue"
                        onChange={handleInputChange}
                        label="Venue" 
                        margin='dense'
                        variant='outlined'
                        fullWidth
                    />
                    <Button className={classes.submit} 
                        type="submit" 
                        variant="contained" 
                        color="primary">
                    Submit
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

}