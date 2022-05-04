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
let store
try {
  store = createStore(
    appReducer,
    window &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
} catch (error) {
  store = createStore(appReducer)
}

// store.subscribe(
//   throttle(() => {
//     saveState({
//       todos: store.getState().todos,
//     })
//   }, 1000)
// )
export default store
