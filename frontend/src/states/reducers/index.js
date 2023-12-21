import {combineReducers} from 'redux'
import { getAllPizzasReducers } from './pizzasReducers'

const finalReducers = combineReducers({
    getAllPizzasReducers : getAllPizzasReducers
})

export default finalReducers