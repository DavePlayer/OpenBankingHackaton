import React from 'react';
import { HeaderComponents } from './HeaderComponents'
import { Drawer } from './drawer';


export const Header:React.FC = () => {
	return (
        <>
        <HeaderComponents />
        <Drawer />
      </>
	);
}