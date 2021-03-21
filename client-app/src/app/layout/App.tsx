import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Container from '@material-ui/core/Container';
import { Activity } from '../models/activity';
import ActvityDashboard from '../../features/activities/dashboard/ActivityDashboard';

import { mockup_data } from '../models/activity_data_mockup';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]); 

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

  return (
    <div className="App">
      <NavBar/>
      
      <Container style={{outlineColor: 'red', outlineStyle: 'solid'}}>
        <ActvityDashboard activities={activities}/>
      </Container>
    </div>
  );
}

export default App;
