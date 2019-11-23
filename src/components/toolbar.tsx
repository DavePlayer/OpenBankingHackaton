import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';

interface IProps{
  groupName:string,
}

export const Tolbar:React.FC<IProps> = (props) => {
    return (
        <ButtonBase>
            <Toolbar className='ripple'>
          <Avatar style={{marginRight: '1em'}} />
          <Typography variant="h6" noWrap>
            {props.groupName}
          </Typography>
            </Toolbar>
        </ButtonBase>
    )
}
