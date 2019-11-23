import React from 'react';
import { HeaderComponents } from './HeaderComponents'
import { Drawerr } from './drawer';

interface IProps{
  id:string
}

export const Header:React.FC<IProps> = (props) => {
	return (
      <>
        <HeaderComponents id={props.id} />
        <Drawerr />
      </>
	);
}
