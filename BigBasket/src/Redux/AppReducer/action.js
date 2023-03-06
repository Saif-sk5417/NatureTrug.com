import {REMOVE_FOOD_FROM_CART, REDUCE_FOOD_QUANTITY, ADD_FOOD_QUANTITY, FOOD_PRO_ADD_TO_CART, GET_FOOD_PRODUCTS_FAILURE,GET_FOOD_PRODUCTS_REQUEST,GET_FOOD_PRODUCTS_SUCCESS, ADD_DAIRY_QUANTITY, ADD_QUANTITY, ADD_TO_CART, DAIRY_PRO_ADD_TO_CART, GET_DAIRY_PRODUCTS_FAILURE, GET_DAIRY_PRODUCTS_REQUEST, GET_DAIRY_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, REDUCE_DAIRY_QUANTITY, REDUCE_QUANTITY, REMOVE_DAIRY_FROM_CART, REMOVE_FROM_CART } from "./actionTypes"
import axios from 'axios'
import CartQuantity from "../../Components/Cart/CartQuantity"


//Vegetables Products for getting all products
export const getProductsData = (params) => (dispatch) =>{
    dispatch({type : GET_PRODUCTS_REQUEST})
    return axios
    .get("https://naturetest.onrender.com/Products",params)
    .then((res) => {
        dispatch({type : GET_PRODUCTS_SUCCESS ,payload : res.data})
    })
    .catch((e)=>{
        dispatch({type : GET_PRODUCTS_FAILURE })
    })
}


//Vegetables  Products added into cart

export const AddedToCart = (id) =>(dispatch)=>{
   
   return axios
     .patch(`https://naturetest.onrender.com/Products/${id}`,{
         CartQuantity : 1 ,
     })
     .then((res) => {
  
     dispatch({type : ADD_TO_CART}) 
     }
     )
 }
 
 
//Vegetables  Products incresaing or decreasing quantity

export const  AddProductQuantity = (id,value) => async(dispatch)=>{
    await axios
    .patch(`https://naturetest.onrender.com/Products/${id}`,{
        CartQuantity : value + 1 ,
    })
    .then((res) => {
   
    dispatch({type : ADD_QUANTITY}) 
    }
    )
}

 


export const  ReduceProductQuantity = (id,value) =>  (dispatch)=>{
     return axios
    .patch(`https://naturetest.onrender.com/Products/${id}`,{
        CartQuantity : value - 1 ,
    })
    .then((res) => {

    dispatch({type : REDUCE_QUANTITY}) 
    }
    )
}

//reomve product
export const RemoveFromCart = (id) =>(dispatch)=>{
    return axios
     .patch(`https://naturetest.onrender.com/Products/${id}`,{
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
//
//Food Products for getting all products

export const getFoodProductsData = (params) => (dispatch) =>{
    dispatch({type : GET_FOOD_PRODUCTS_REQUEST})
    return axios
    .get("https://naturetest.onrender.com/Food",params)
    .then((res) => {
        dispatch({type : GET_FOOD_PRODUCTS_SUCCESS ,payload : res.data})
    })
    .catch((e)=>{
        dispatch({type : GET_FOOD_PRODUCTS_FAILURE })
    })
}


//Food product 

export const FoodAddedToCart = (id) =>(dispatch)=>{
   
    return axios
      .patch(`https://naturetest.onrender.com/Food/${id}`,{
          CartQuantity : 1 ,
      })
      .then((res) => {
   
      dispatch({type : FOOD_PRO_ADD_TO_CART}) 
      }
      )
  }

 
 // Food product quantiy adding


 export const  AddFoodProductQuantity = (id,value) => async(dispatch)=>{
    await axios
    .patch(`https://naturetest.onrender.com/Food/${id}`,{
        CartQuantity : value + 1 ,
    })
    .then((res) => {
   
    dispatch({type : ADD_FOOD_QUANTITY}) 
    }
    )
}

// Food product quantity reducing

export const  ReduceFoodProductQuantity = (id,value) =>  (dispatch)=>{
    return axios
   .patch(`https://naturetest.onrender.com/Food/${id}`,{
       CartQuantity : value - 1 ,
   })
   .then((res) => {

   dispatch({type : REMOVE_FOOD_FROM_CART}) 
   }
   )
}


export const RemoveFoodFromCart = (id) =>(dispatch)=>{
    return axios
     .patch(`https://naturetest.onrender.com/Food/${id}`,{
         CartQuantity : 0 ,
     })
     .then((res) => {
   
     dispatch({type : REDUCE_FOOD_QUANTITY}) 
     }
     )
 }



