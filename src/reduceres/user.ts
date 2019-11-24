export interface IUserhistory{
    data: Date,
    group: {id: number, name:string},
    moneyAmmount: number,
    goal: string
}

export interface IUser {
    id: number,
    name:string,
    lastName:string,
    mail: string,
    friends: Array<number>,
    groups: Array<number>,
    transactionHistory: Array<IUserhistory>,
}

const johnHistory:IUserhistory = {
    data: new Date('2019-03-25'),
    group: {id:3, name: "MyTeam"},
    moneyAmmount: 135,
    goal: 'pizza'
}

const olek:IUser = {
    id:1, 
    name: 'John', 
    lastName: 'Smith', 
    mail:'john@smith.gliwice', 
    friends:[2,3,4], 
    groups:[1,2,3],
    transactionHistory: [johnHistory],
}


export const user = (state:IUser = olek, action:{type:string, data:IUser}) => {
    switch(action.type){
        default:
            return state
    }
}