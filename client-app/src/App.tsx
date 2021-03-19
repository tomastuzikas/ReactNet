import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ButtonAppBar from './Menu';
import List from './List'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


function App() {

  const [activities, setActivities] = useState([]); 

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(
      response => {
        console.log(response);
        setActivities(response.data);
      }
    )
  }, []);

  return (
    <div className="App">
      <Container>
        <Box>
          <Typography variant="h3" component="h2" gutterBottom>
            h1. Heading
          </Typography>
          <ButtonAppBar/>
          <List activities={activities}/>
        </Box>
      </Container>
    </div>
  );
}

export default App;
