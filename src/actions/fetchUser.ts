export const fetchUser = (url:string) => (dispatch:any) => {
    console.log('fetch start');
    fetch(url).then( (data:any) => {
        if(data.ok){
            console.log("data z fetch: ",data)
            return data.json()
        }
    }).then( (json:any) => {
        console.log('fetching: ', json)
        dispatch({
            type: "FETCH_USER",
            data: json,
        })
    })
}