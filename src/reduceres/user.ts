export interface IUserhistory{
    date: Date,
    group: {id: number, name:string},
    moneyAmmount: number,
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

const olekHistory:IUserhistory = {
    date: new Date('2019-03-25'),
    group: {id:3, name: "TNTs"},
    moneyAmmount: 135,
}

const olek:IUser = {
    id:1, 
    name: 'Bolek', 
    lastName: 'Olek ', 
    email:'olek@zsti.gliwice', 
    groups:[1,2,3],
    token: 'dsada',
    newPassword: '',
    transactionHistory: [olekHistory, olekHistory],
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