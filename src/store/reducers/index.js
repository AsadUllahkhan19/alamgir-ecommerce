import { combineReducers } from 'redux'
import authReducers from './authReducers';
import reducerCart from "./cartReducer"

export default combineReducers({
    cart:reducerCart,
    auth:authReducers
})