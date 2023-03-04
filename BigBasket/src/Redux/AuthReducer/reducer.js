// import { getData, setData } from "../../Utils/accessLocalStorage"
// import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionTypes"



// const initialState = {
//     isLoading : false ,
//     isAuth : getData('isAuth') || false ,
//     isError : false ,
// }

//  const reducer = (state = initialState , action) => {
//     const {type,payload} = action
//     switch(type)
//     {   
//         case  LOGIN_REQUEST :
//         return {
//             ...state ,
//             isLoading : true
//         }
//         case LOGIN_SUCCESS :
//             setData('isAuth',true)
//             return {
//                 ...state ,
//                 isLoading : false ,
//                 isError : false ,
//                 isAuth : true
//             }
//         case LOGIN_FAILURE :
//             return {
//                 ...state ,
//                 isLoading : false ,
//                 isError : true 
//             }
//         case LOGOUT_SUCCESS :
//             setData('isAuth',false)
//             return {
//                 ...state ,
//                 isLoading : false ,
//                 isAuth : false ,
//             }
//         default :
//         return state
//     }
// }


// export { reducer }

import * as types from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    userData: {},
    isAuth: false,
    userlist: [],
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        // While logging in
        case types.LOGIN_SET_USER_DATA: {
            return {
                ...state,
                userData: { ...payload },
            };
        }
        case types.LOGIN_GET_USER_DATA: {
            return {
                ...state,
                isAuth: true,
            };
        }
        case types.LOGIN_REMOVE_USER_DATA: {
            return {
                ...state,
                userData: {},
            };
        }


        // user login cases end
        case types.ADD_USER_LOADING: {
            return {
                ...state,
                isLoading: true,
            };
        }

        case types.ADD_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            };
        }

        case types.ADD_USER_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        }
        case types.GET_USER_LOADING: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case types.GET_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                userlist: payload,
            };
        }
        case types.GET_USER_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        }

        default:
            return state;
    }
};