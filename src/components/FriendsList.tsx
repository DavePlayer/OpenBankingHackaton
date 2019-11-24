import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import { List } from '@material-ui/core';

interface IAddGroupProps {
    friends: Array<string>;
}

const FriendsList:React.FC<IAddGroupProps> = ({friends}) => {

    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value: any) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };

    console.log(checked)
  

	return (
        <>
        <List>
            {friends.map((el: any) => (
                <ListItem>
                <ListItemAvatar>
                <Avatar
                    alt={`Avatar1`}
                />
                </ListItemAvatar>
                <ListItemText primary={el} />
                <ListItemSecondaryAction>
                <Checkbox
                    edge="end"
                    onChange={(value: any) => handleToggle(value)}  
                />
                </ListItemSecondaryAction>
                </ListItem>
            ))}
            </List>
        </>
	);
}
export default FriendsList;