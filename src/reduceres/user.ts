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

const olekHistory:IUserhistory = {
    data: new Date('2019-03-25'),
    group: {id:3, name: "TNTs"},
    moneyAmmount: 135,
    goal: 'Zarcie'
}

const olek:IUser = {
    id:1, 
    name: 'olek', 
    lastName: 'na jego czesc', 
    mail:'olek@zsti.gliwice', 
    friends:[2,3,4], 
    groups:[1,2,3],
    transactionHistory: [olekHistory],
}


export const user = (state:IUser = olek, action:{type:string, data:IUser}) => {
    switch(action.type){
        default:
            return state
    }
}