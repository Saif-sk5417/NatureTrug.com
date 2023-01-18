import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"



const initialState = {
    isLoading : false ,
    isAuth : false ,
    isError : false ,
}

 const reducer = (state = initialState , action) => {
    const {type,payload} = action
    switch(type)
    {   
        case  LOGIN_REQUEST :
        return {
            ...state ,
            isLoading : true
        }
        case LOGIN_SUCCESS :
            return {
                ...state ,
                isLoading : false ,
                isError : false ,
                isAuth : true
            }
        case LOGIN_FAILURE :
            return {
                ...state ,
                isLoading : false ,
                isError : true 
            }
        default :
        return state
    }
}


export { reducer }