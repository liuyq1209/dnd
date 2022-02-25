import {CHANGE_CUR_SCENE, CHANGE_CUR_BLOCK} from "../actions/actionTypes"

const globalReducer = (state = {}, action) => {
  const {type, payload} = action
  console.log(type, payload)

  switch (type) {
    case CHANGE_CUR_SCENE:
      console.log("----------------------")

      return {
        ...state,
        curScene: payload.curScene,
      }
    case CHANGE_CUR_BLOCK:
      return {
        ...state,
        curBlock: payload.curBlock,
      }
    default:
      return state
  }
}
export default globalReducer
