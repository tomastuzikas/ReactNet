import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 720,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function SimpleList(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="data list">
        {props.activities.map((activity: any) => (
            <ListItem button key={activity.id}>
              {activity.title}
            </ListItem>
        ))}
      </List>
    </div>
  );
}
