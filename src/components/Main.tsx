import React from 'react';
import Header from './Header';
import Message from './Message';
import Send from './Send';


const Main:React.FC = () => {
	return (
      <div className="container">
        <Header />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Send />
      </div>
	);
}

export default Main;