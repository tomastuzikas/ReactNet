import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Container from '@material-ui/core/Container';
import ActvityDashboard from '../../features/activities/dashboard/ActivityDashboard';

import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {

  const {activityStore} = useStore();

  useEffect(() => {

    activityStore.loadActivities();

  }, [activityStore])


  if (activityStore.loadingInitial) return <LoadingComponent/>
    
  return (
    <div className="App">
      <NavBar/>
      
      <Container style={{outline: '2px ridge rgba(170, 50, 220, .6)', marginTop: '1em'}}>
        <ActvityDashboard />
      </Container>
    </div>
  );
}

export default observer(App);
