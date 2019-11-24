import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import { List, ExpansionPanel, Typography, ExpansionPanelSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        <div className="friends">
         <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Invite friends</Typography>
            </ExpansionPanelSummary>
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
          </ExpansionPanel>
          </div>
        </>
	);
}
export default FriendsList;