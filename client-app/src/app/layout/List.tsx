import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Activity } from '../models/activity';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));


export default function SimpleList(props: {activities: Activity[]}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="data list">
        {props.activities.map((activity: Activity) => (
            <ListItem button key={activity.id}>
              <Typography>{activity.title}</Typography>
            </ListItem>
        ))}
      </List>
    </div>
  );
}
