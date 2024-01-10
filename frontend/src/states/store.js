import { applyMiddleware, createStore } from "redux";
import  {thunk}  from 'redux-thunk';
import {combineReducers} from 'redux'
import { getAllPizzasReducers } from './reducers/pizzasReducers'
import {cartReducers} from './reducers/cartReducers'
import {quantityReducers} from './reducers/quantityReducers'
import { registerUserReducers,loginUserReducers } from "./reducers/userReducers";

const finalReducers = combineReducers({
    getAllPizzasReducers : getAllPizzasReducers,
    cartReducers : cartReducers,
    quantityReducers : quantityReducers,
    registerUserReducers :registerUserReducers,
    loginUserReducers :loginUserReducers,

})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const initialState = {
    cartReducers:{
        cartItems : cartItems
    },
    loginUserReducers:{
        currentUser:currentUser
    }
}

const store = createStore(finalReducers ,initialState , applyMiddleware(thunk))


export default store;