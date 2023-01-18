

import { reducer as AuthReducer } from './AuthReducer/reducer'
import { reducer as AppReducer } from './AppReducer/reducer' 
import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'

const rootReducer = combineReducers({AuthReducer,AppReducer})
const ComposeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(rootReducer,ComposeEnhancer(applyMiddleware(thunk)))


export { store }