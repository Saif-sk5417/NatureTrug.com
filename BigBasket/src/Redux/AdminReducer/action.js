import axios from "axios"
import { ADD_PRODUCTS_FAILURE, ADD_PRODUCTS_REQUEST, ADD_PRODUCTS_SUCCESS } from "./actionType"


// ADD PRODUCT "POST"
export const AddProducts = (newProduct) => (dispatch) =>{
    dispatch({type : ADD_PRODUCTS_REQUEST})
    return axios
    .post("https://nature-trug-database.vercel.app/Products",newProduct)
    .then((res) => {
        console.log(res)
        dispatch({type : ADD_PRODUCTS_SUCCESS ,payload : res.data})
    })
    .catch((e)=>{
        dispatch({type : ADD_PRODUCTS_FAILURE })
    })
}

