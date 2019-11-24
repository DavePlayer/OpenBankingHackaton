export const addGoal= (user:any) => (dispatch: any) => {
    dispatch({type: "UPDATE_USER", data: user })
}