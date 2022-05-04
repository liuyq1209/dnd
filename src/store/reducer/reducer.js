import {combineReducers} from "redux"
import ormReducer from "./ormReducer"
import globalReducer from "./globalReducer"
import operateReducer from "./operateReducer"

const appReducer = combineReducers({
  ormReducer,
  globalReducer,
  operateReducer,
})
export default appReducer
