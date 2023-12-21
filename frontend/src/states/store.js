import { applyMiddleware, createStore } from "redux";
import finalReducers from "./reducers";
import { thunk } from "redux-thunk";
const store = createStore(finalReducers , {} , applyMiddleware(thunk))

export default store;