import React from 'react';
import { Header } from './Header';
import Message from './Message';
import Send from './Send';
import GoalReminder from './GoalReminder';

import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps <{id: string}>{

}

export const mainContent:React.FC<IProps> = ({ match }) => {
    const messages: any = useSelector((msg: any) => msg);

    const msg = messages.messages.text;
    return (
        <>
            <Header id={match.params.id} />
            <GoalReminder />
             <div className="container">
                <Message message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, quis?"}/>
                <Message message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, quis?"}/>
                { msg.map((el: any)=> el != '' && (<Message message={el}/>))}
                <Send />
            </div>
        </>
    )
}
