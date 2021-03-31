import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, 
        Typography, 
        Tabs, Tab, 
        Box, Avatar} from '@material-ui/core/';

import '../styles/navbar.css';
import { useStore } from '../stores/store';


function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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
    marginRight: '10px',
  },
}));

export default function NavBar() {

  const {activityStore} = useStore();

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className='navbar'>
        <Toolbar>
          <Box >
            <Avatar alt="logo" src="/assets/logo.png" className={classes.small} />
          </Box>
          <Typography variant="h6">
            Activities
          </Typography>

          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Activities" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
            <Tab label="Create Activity" 
              onClick={() => activityStore.openForm()} 
              {...a11yProps(0)} 
              className={classes.navbar__createBtn} 
            />
          </Tabs>
          
        </Toolbar>
      </AppBar>

      {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}

    </div>
  );
}