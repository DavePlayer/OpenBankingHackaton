
export const menu = (state:boolean = false, action: any) => {
    switch(action.type){
        case "CHANGE_MENU_STATE":
            return !state;
        default:
            return state;
    }
}