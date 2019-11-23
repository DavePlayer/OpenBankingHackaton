import React from 'react';
import Header from './Header';
import Message from './Message';


const Main:React.FC = () => {
	return (
      <>
        <Header />
        <Message />
        <Message />
        <Message />
      </>
	);
}

export default Main;