import axios from "axios"
import { ADD_PRODUCTS_FAILURE, ADD_PRODUCTS_REQUEST, ADD_PRODUCTS_SUCCESS } from "./actionType"



export const AddProducts = (newProduct) => (dispatch) =>{
    dispatch({type : ADD_PRODUCTS_REQUEST})
    return axios
    .post("http://localhost:8080/Products",newProduct)
    .then((res) => {
        console.log(res)
        dispatch({type : ADD_PRODUCTS_SUCCESS ,payload : res.data})
    })
    .catch((e)=>{
        dispatch({type : ADD_PRODUCTS_FAILURE })
    })
}