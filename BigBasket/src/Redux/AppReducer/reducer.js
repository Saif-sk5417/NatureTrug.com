import {REMOVE_FOOD_FROM_CART, REDUCE_FOOD_QUANTITY, ADD_FOOD_QUANTITY, FOOD_PRO_ADD_TO_CART, GET_FOOD_PRODUCTS_FAILURE,GET_FOOD_PRODUCTS_REQUEST,GET_FOOD_PRODUCTS_SUCCESS, ADD_DAIRY_QUANTITY, ADD_QUANTITY, ADD_TO_CART, DAIRY_PRO_ADD_TO_CART, GET_DAIRY_PRODUCTS_FAILURE, GET_DAIRY_PRODUCTS_REQUEST, GET_DAIRY_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, REMOVE_DAIRY_FROM_CART, REMOVE_FROM_CART } from "./actionTypes"


const initialState = {
    Products: [],
    Food:[],
    isLoading: false,
    isError: false
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                Products: payload,
                isError: false
            }
        case GET_PRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                Products: [],
                isError: false
            }
        case GET_DAIRY_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_FOOD_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_DAIRY_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                Products: payload,
                isError: false
            }
        case GET_FOOD_PRODUCTS_SUCCESS:
            return {
                    ...state,
                    isLoading: false,
                    Products: payload,
                    isError: false
                }
        case GET_DAIRY_PRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                Products: payload,
                isError: false
            }
        case GET_FOOD_PRODUCTS_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    Products: payload,
                    isError: false
                }
        case ADD_TO_CART:
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        case DAIRY_PRO_ADD_TO_CART:
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        case FOOD_PRO_ADD_TO_CART:
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        case ADD_QUANTITY:
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        case ADD_DAIRY_QUANTITY:
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        case ADD_FOOD_QUANTITY:
            return {
                    ...state,
                    isLoading: false,
                    isError: false
                }
        case REMOVE_FROM_CART:
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        case REMOVE_DAIRY_FROM_CART:
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        case REMOVE_FOOD_FROM_CART:
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        default:
            return state
    }
}
export { reducer }