export interface IUserhistory{
    date: Date,
    group: {id: number, name:string},
    moneyAmmount: number,
    goal: string,
}

export interface IUser {
    id: number,
    name:string,
    lastName:string,
    email: string,
    newPassword?: string,
    token?: string,
    // friends: Array<number>,
    groups: Array<number>,
    toke?: string,
    transactionHistory: Array<IUserhistory>,
}

const johnHistory:IUserhistory = {
    date: new Date('2019-03-25'),
    group: {id:3, name: "MyTeam"},
    moneyAmmount: 135,
    goal: 'pizza'
}

const olek:IUser = {
    id:1, 
    name: 'John', 
    lastName: 'Smith', 
    email:'john@smith.gliwice', 
    groups:[1,2,3],
    transactionHistory: [johnHistory],
}


export const user = (state:any = olek, action:{type:string, data:any}) => {
    switch(action.type){
        case "UPDATE_USER":
            return action.data
        case "FETCH_USER":
            return action.data
        default:
            return state
    }
}