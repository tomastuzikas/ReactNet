import React from 'react';
import NavBar from './NavBar';
import Container from '@material-ui/core/Container';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <NavBar/>
      <Container style={{outline: '2px ridge rgba(170, 50, 220, .6)', marginTop: '1em'}}>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/activities' component={ActivityDashboard}/>
        <Route path='/activities/:id' component={ActivityDetails}/>
        <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm}/>
      </Container>
    </div>
  );
}

export default observer(App);
