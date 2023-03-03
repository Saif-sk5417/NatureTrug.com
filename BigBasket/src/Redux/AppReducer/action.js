import { ADD_QUANTITY, ADD_TO_CART, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, REDUCE_QUANTITY, REMOVE_FROM_CART } from "./actionTypes"
import axios from 'axios'
import CartQuantity from "../../Components/Cart/CartQuantity"



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


export const AddedToCart = (id) =>(dispatch)=>{
   
   return axios
     .patch(`https://nature-trug-database.vercel.app/Products/${id}`,{
         CartQuantity : 1 ,
     })
     .then((res) => {
  
     dispatch({type : ADD_TO_CART}) 
     }
     )
 }
 


export const  AddProductQuantity = (id,value) => async(dispatch)=>{
    await axios
    .patch(`https://nature-trug-database.vercel.app/Products/${id}`,{
        CartQuantity : value + 1 ,
    })
    .then((res) => {
   
    dispatch({type : ADD_QUANTITY}) 
    }
    )
}


export const  ReduceProductQuantity = (id,value) =>  (dispatch)=>{
     return axios
    .patch(`https://nature-trug-database.vercel.app/Products/${id}`,{
        CartQuantity : value - 1 ,
    })
    .then((res) => {

    dispatch({type : REDUCE_QUANTITY}) 
    }
    )
}


export const RemoveFromCart = (id) =>(dispatch)=>{
    return axios
     .patch(`https://nature-trug-database.vercel.app/Products/${id}`,{
         CartQuantity : 0 ,
     })
     .then((res) => {
   
     dispatch({type : REMOVE_FROM_CART}) 
     }
     )
 }