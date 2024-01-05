import { applyMiddleware, createStore } from "redux";
import  {thunk}  from 'redux-thunk';
import {combineReducers} from 'redux'
import { getAllPizzasReducers } from './reducers/pizzasReducers'
import {cartReducers} from './reducers/cartReducers'

const finalReducers = combineReducers({
    getAllPizzasReducers : getAllPizzasReducers,
    cartReducers : cartReducers,
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = {
    cartReducers:{
        cartItems : cartItems
    }
}

const store = createStore(finalReducers ,initialState , applyMiddleware(thunk))


export default store;