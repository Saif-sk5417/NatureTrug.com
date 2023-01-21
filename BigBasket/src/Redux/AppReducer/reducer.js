import { ADD_QUANTITY, ADD_TO_CART, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, REMOVE_FROM_CART } from "./actionTypes"


const initialState = {
    Products : [] ,
    isLoading : false ,
    isError : false 
}

const reducer = (state = initialState,action) =>
{
    const {type,payload} = action
    switch(type)
    {
        case GET_PRODUCTS_REQUEST :
            return{
                ...state ,
                isLoading : true
            }
        case GET_PRODUCTS_SUCCESS :
            return {
                ...state ,
                isLoading : false ,
                Products : payload ,
                isError : false 
            }
        case GET_PRODUCTS_FAILURE :
            return {
                ...state ,
                isLoading : false ,
                Products : [] ,
                isError : false 
            }
        case ADD_TO_CART :
            return {
                ...state ,
                isLoading : false ,
                isError : false
            }
        case ADD_QUANTITY :
            return {
                ...state ,
                isLoading : false ,
                isError : false 
            }
        case REMOVE_FROM_CART :
            return {
                ...state ,
                isLoading : false ,
                isError : false 
            }
        default :
        return state
    }
}
 export { reducer }