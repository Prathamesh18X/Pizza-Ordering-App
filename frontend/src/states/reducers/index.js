import {combineReducers} from 'redux'
import { getAllPizzasReducers } from './pizzasReducers'
import {cartReducers} from './cartReducers'

const finalReducers = combineReducers({
    getAllPizzasReducers : getAllPizzasReducers,
    cartReducers : cartReducers,
})

export default finalReducers