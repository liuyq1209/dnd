import {combineReducers} from "redux"
import ormReducer from "./ormReducer"
import globalReducer from "./globalReducer"

const appReducer = combineReducers({
  ormReducer,
  globalReducer,
})
export default appReducer
