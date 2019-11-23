import React from 'react';
import Header from './Header';
import Message from './Message';
import Send from './Send';

import { useSelector } from 'react-redux';
// import { sendMessage } from '../actions/senMessage';
// import { useEffect } from 'react';

const Main:React.FC = () => {

  //const dispatch = useDispatch();
  const messages: any = useSelector((msg: any) => msg);

  // useEffect(()=>{
  //   dispatch(sendMessage());
  // }, [])
  const msg = messages.messages.text;
  console.log(msg);
	return (
      <div className="container">
        <Header />
        <Message message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, quis?"}/>
        <Message message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, quis?"}/>
        { msg.map((el: any)=> el != '' && (<Message message={el}/>))}
        <Send />
      </div>
	);
}

export default Main;