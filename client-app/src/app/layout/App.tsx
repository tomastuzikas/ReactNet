import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Container from '@material-ui/core/Container';
import { Activity } from '../models/activity';
import ActvityDashboard from '../../features/activities/dashboard/ActivityDashboard';

import { mockup_data } from '../models/activity_data_mockup';
import { v4 as uuid } from 'uuid';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]); 
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {

    const NO_SERVER = false;

    if(!NO_SERVER){
        axios.get<Activity[]>('http://localhost:5000/api/activities').then(
        response => {

          setActivities(response.data);
          
        }
      )
      .catch(function (error) {

        if (!error.response) {
            // network error
            console.log('Error: Network Error');
        } else {
            console.log(error.response.data.message);
        }
        setActivities(mockup_data);
      })
    }
    else {
      setActivities(mockup_data);
    }
    
  }, []);

  function handleSelectActivity(id: string){
    setSelectedActivity(activities.find(x => x.id === id));

  }

  function handleCancelSelectActivity(){
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string){
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose(){
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity){
    activity.id 
    ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
    : setActivities([...activities, {...activity, id: uuid()}]);
    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivty(id: string){
    setActivities([...activities.filter(x => x.id !== id)])
  }


  return (
    <div className="App">
      <NavBar openForm={handleFormOpen}/>
      
      <Container style={{outlineColor: 'red', outlineStyle: 'solid', marginTop: '1em'}}>
        <ActvityDashboard 
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivty}
        />
      </Container>
    </div>
  );
}

export default App;
