import {combineReducers} from 'redux'
import { getAllPizzasReducers } from './pizzasReducers'
import {cartReducers} from './cartReducer'

const finalReducers = combineReducers({
    getAllPizzasReducers : getAllPizzasReducers,
    cartReducers : cartReducers
})

export default finalReducers