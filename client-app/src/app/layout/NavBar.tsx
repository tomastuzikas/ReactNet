import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, 
        Typography, 
        Tabs, Tab, Avatar} from '@material-ui/core/';

import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar__createBtn: {
    backgroundColor: '#10b80d',
    opacity: '1',
    color: '#FFF',
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: theme.spacing(2),
  }
}));

export default function NavBar() {

  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className='navbar'>
        <Toolbar>
          <Avatar component={NavLink} to="/" exact alt="logo" src="/assets/logo.png" className={classes.small} />
          <Typography variant="h6">
            Activities
          </Typography>

          <Tabs value={value} onChange={handleChange}>
            <Tab label="Activities" component={NavLink} to="/activities"  />
            <Tab label="Create Activity" 
              component={NavLink} to="/createActivity"
              className={classes.navbar__createBtn} 
            />
          </Tabs>
          
        </Toolbar>
      </AppBar>

    </div>
  );
}