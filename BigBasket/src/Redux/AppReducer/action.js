import { ADD_DAIRY_QUANTITY, ADD_QUANTITY, ADD_TO_CART, DAIRY_PRO_ADD_TO_CART, GET_DAIRY_PRODUCTS_FAILURE, GET_DAIRY_PRODUCTS_REQUEST, GET_DAIRY_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, REDUCE_DAIRY_QUANTITY, REDUCE_QUANTITY, REMOVE_DAIRY_FROM_CART, REMOVE_FROM_CART } from "./actionTypes"
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



 //Dairy Products for getting all products

 export const getDairyProductsData = (params) => (dispatch) =>{
    dispatch({type : GET_DAIRY_PRODUCTS_REQUEST})
    return axios
    .get("https://naturetest.onrender.com/Dairy",params)
    .then((res) => {
        dispatch({type : GET_DAIRY_PRODUCTS_SUCCESS ,payload : res.data})
    })
    .catch((e)=>{
        dispatch({type : GET_DAIRY_PRODUCTS_FAILURE })
    })
}

//Dairy product 

export const DairyAddedToCart = (id) =>(dispatch)=>{
   
    return axios
      .patch(`https://naturetest.onrender.com/Dairy/${id}`,{
          CartQuantity : 1 ,
      })
      .then((res) => {
   
      dispatch({type : DAIRY_PRO_ADD_TO_CART}) 
      }
      )
  }

  // Dairy product quantiy adding


  export const  AddDairyProductQuantity = (id,value) => async(dispatch)=>{
    await axios
    .patch(`https://naturetest.onrender.com/Dairy/${id}`,{
        CartQuantity : value + 1 ,
    })
    .then((res) => {
   
    dispatch({type : ADD_DAIRY_QUANTITY}) 
    }
    )
}

// Dairy product quantity reducing

export const  ReduceDairyProductQuantity = (id,value) =>  (dispatch)=>{
    return axios
   .patch(`https://naturetest.onrender.com/Dairy/${id}`,{
       CartQuantity : value - 1 ,
   })
   .then((res) => {

   dispatch({type : REMOVE_DAIRY_FROM_CART}) 
   }
   )
}


export const RemoveDairyFromCart = (id) =>(dispatch)=>{
    return axios
     .patch(`https://naturetest.onrender.com/Dairy/${id}`,{
         CartQuantity : 0 ,
     })
     .then((res) => {
   
     dispatch({type : REDUCE_DAIRY_QUANTITY}) 
     }
     )
 }