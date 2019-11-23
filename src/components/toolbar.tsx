import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeMenuState } from './../actions/changeMenuState'

interface IProps{
  groupName:string,
}

export const Tolbar:React.FC<IProps> = (props) => {
    const dispatch = useDispatch()
    return (
        <Link to={`/groups/${props.groupName}`}>
        <ButtonBase onClick={() => dispatch(changeMenuState())}>
            <Toolbar className='ripple'>
          <Avatar style={{marginRight: '1em'}} />
          <Typography style={{color: 'black'}} variant="h6" noWrap>
            {props.groupName}
          </Typography>
            </Toolbar>
        </ButtonBase>
        </Link>
    )
}
