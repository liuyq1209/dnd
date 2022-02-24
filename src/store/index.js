import {createStore, combineReducers, applyMiddleware} from "redux"
import appReducer from "./reducer/reducer"

const store = createStore(appReducer)
export default store
