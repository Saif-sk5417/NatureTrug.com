import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes"
import axios from 'axios'


export const getProductsData = (params) => (dispatch) =>{
    dispatch({type : GET_PRODUCTS_REQUEST})
    return axios
    .get("https://nature-trug-database.vercel.app/Products",params)
    .then((res) => {
        dispatch({type : GET_PRODUCTS_SUCCESS ,payload : res.data})
    })
    .catch((e)=>{
        dispatch({type : GET_PRODUCTS_FAILURE })
    })
}