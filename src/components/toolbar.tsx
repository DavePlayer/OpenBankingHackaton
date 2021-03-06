import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeMenuState } from './../actions/changeMenuState'
import * as img from '../assets/img/group.png';

interface IProps{
  groupName:string,
}

export const Tolbar:React.FC<IProps> = (props) => {
    const dispatch = useDispatch()
    return (
        <Link to={`/users/olek/groups/${props.groupName}`}>
        <ButtonBase style={{width: '100%', borderBottom: '1px solid black',}} onClick={() => dispatch(changeMenuState())}>
            <Toolbar style={{width: '100%', display: 'flex', justifyContent: 'space-between'}} className='ripple'>
              <Avatar style={{marginRight: '1em'}} src={img} />
              <Typography style={{color: 'black'}} variant="h6" noWrap>
                {props.groupName}
              </Typography>
            </Toolbar>
        </ButtonBase>
        </Link>
    )
}
