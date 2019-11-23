import React from 'react';
import { HeaderComponents } from './HeaderComponents'
import { Drawer } from './drawer';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps <{id: string}>{

}

export const Header:React.FC<IProps> = ({ match }) => {
  console.log(match)
	return (
      <>
        <HeaderComponents id={match.params.id} />
        <Drawer/>
      </>
	);
}