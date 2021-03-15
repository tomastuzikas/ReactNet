import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ButtonAppBar from './Menu';
import List from './List'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import DashBoard from './DashBoard/Dashboard'


function App() {

  const [activities, setActivities] = useState([]); 

  useEffect(() => {
    // axios.get('http://localhost:5000/api/activities').then(
    //   response => {
    //     console.log(response);
    //     setActivities(response.data);
    //   }
    // )
  }, []);

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box>
          <ButtonAppBar/>
          <List activities={activities}/>
        </Box>
        <DashBoard/>
      </Container>
      
    </div>
  );
}

export default App;
