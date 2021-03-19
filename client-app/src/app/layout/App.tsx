import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Container from '@material-ui/core/Container';
import { Activity } from '../models/activity';
import ActvityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]); 

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(
      response => {
        // console.log(response);
        setActivities(response.data);
      }
    )
  }, []);

  return (
    <div className="App">
      <NavBar/>
      
      <Container style={{marginTop: '3em'}}>
        <ActvityDashboard activities={activities}/>
        {/* <Box>
          <List activities={activities}/>
        </Box> */}
      </Container>
    </div>
  );
}

export default App;
