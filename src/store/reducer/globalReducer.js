import {
  CHANGE_CUR_SCENE,
  CHANGE_CUR_BLOCK,
  CHANGE_PAGE_SETTING,
} from "../actions/actionTypes"

const globalReducer = (state = {}, action) => {
  const {type, payload} = action
  switch (type) {
    case CHANGE_CUR_SCENE:
      return {
        ...state,
        curScene: payload,
      }
    case CHANGE_CUR_BLOCK:
      return {
        ...state,
        curBlock: payload,
      }
    case CHANGE_PAGE_SETTING:
      return {
        ...state,
        pageSetting: {
          ...state.pageSetting,
          ...payload,
        },
      }
    default:
      return state
  }
}
export default globalReducer
