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
            <GoalReminder id={match.params.id}/>
             <div className="container">
                <Message message={"Hey what's up? How about pizza tommorow?"}/>
                { msg.map((el: any)=> (el.message != '' && el.id == match.params.id) && (<Message message={el.message}/>))}
                <Send id={match.params.id}/>
            </div>
        </>
    )
}
