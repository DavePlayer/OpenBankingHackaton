import React from 'react';
import Header from './Header';
import Message from './Message';
import Send from './Send';

import { useSelector } from 'react-redux';
import GoalReminder from './GoalReminder';

const Main:React.FC = () => {

  const messages: any = useSelector((msg: any) => msg);

  const msg = messages.messages.text;
  console.log(msg);
	return (
      <div className="container">
        <Header />
        <GoalReminder />
        <Message message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, quis?"}/>
        <Message message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, quis?"}/>
        { msg.map((el: any)=> el != '' && (<Message message={el}/>))}
        <Send />
      </div>
	);
}

export default Main;