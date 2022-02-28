import {configureStore} from "@reduxjs/toolkit"
import {createStore, combineReducers, applyMiddleware} from "redux"
import appReducer from "./reducer/reducer"

// const store = configureStore({
//   reducer: appReducer,
//   devTools: __DEV__,
//   middleware: getDefaultMiddleware => {
//     return getDefaultMiddleware({
//       // serializableCheck: false
//     })
//   },
// })
const store = createStore(appReducer)
// store.subscribe(
//   throttle(() => {
//     saveState({
//       todos: store.getState().todos,
//     })
//   }, 1000)
// )
export default store
