import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ButtonAppBar from './Menu';
import List from './List'
import Container from '@material-ui/core/Container';

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
      <Container maxWidth="sm">
        <ButtonAppBar/>
        <List activities={activities}/>
      </Container>
    </div>
  );
}

export default App;
