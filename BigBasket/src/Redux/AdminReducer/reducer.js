
import { ADD_PRODUCTS_FAILURE, ADD_PRODUCTS_REQUEST, ADD_PRODUCTS_SUCCESS } from "./actionType"

let intialProduct={
    name:"",
    Image:"",
    category:"",
    Price:"",
    isLoading : false,
    isError:false
}

const reducer = (state = intialProduct,{type,payload}) =>
{
    switch(type)
    {
        case ADD_PRODUCTS_REQUEST :
            return{
                ...state ,
                isLoading : true
            }
        case ADD_PRODUCTS_SUCCESS :
            return {
                ...state ,
                isLoading : false ,
                Products : payload ,
                isError : false 
            }
        case ADD_PRODUCTS_FAILURE :
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