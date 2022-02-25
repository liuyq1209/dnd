import {
  ADD_BLOCK,
  CHNAGE_BLOCK_STYLES,
  DELETE_BLOCK,
  ADD_SCENE,
  CHANGE_SCENE_URL,
  CHANGE_CUR_SCENE,
  CHANGE_CUR_BLOCK,
} from "./actionTypes"

export const addBlock = props => {
  return {
    type: ADD_BLOCK,
    payload: props,
  }
}
export const changeBlockStyles = props => {
  return {
    type: CHNAGE_BLOCK_STYLES,
    payload: props,
  }
}
export const deleteBlock = id => {
  return {
    type: DELETE_BLOCK,
    payload: id,
  }
}
export const addScene = props => {
  return {
    type: ADD_SCENE,
    payload: props,
  }
}
export const changeSceneUrl = id => {
  return {
    type: CHANGE_SCENE_URL,
    payload: id,
  }
}

export const changeCurScene = props => {
  return {
    type: CHANGE_CUR_SCENE,
    payload: props,
  }
}
export const changeCurBlock = props => {
  return {
    type: CHANGE_CUR_BLOCK,
    payload: props,
  }
}
