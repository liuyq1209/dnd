import {
  ADD_OPERATE,
  ADD_UNDO_OPERATE,
  ADD_CUR_STEP,
  SUBSTRACT_CUR_STEP,
} from "../actions/actionTypes"
import _ from "lodash"

const operateReducer = (state = {}, action) => {
  const {type, payload} = action
  switch (type) {
    case ADD_OPERATE:
      // console.log("doStack", state.doStack)
      // console.log("curStep:", state.curStep)
      state.doStack ? "" : (state.doStack = [])
      //撤销后重新做了新的操作
      //去除掉栈中index大于curStep-1 项的操作
      return {
        ...state,
        doStack: state.doStack.slice(0, state.curStep - 1).concat(payload.func),
      }
    case ADD_UNDO_OPERATE:
      state.undoStack ? "" : (state.undoStack = [])
      return {
        ...state,
        undoStack: state.undoStack
          .slice(0, state.curStep - 1)
          .concat(payload.func),
      }
    case ADD_CUR_STEP:
      return {
        ...state,
        curStep: (state.curStep || 0) + 1,
      }
    case SUBSTRACT_CUR_STEP:
      return {
        ...state,
        curStep: (state.curStep || 0) - 1,
      }
    default:
      return state
  }
}
export default operateReducer
