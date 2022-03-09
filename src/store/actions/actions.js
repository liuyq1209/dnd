import {
  ADD_BLOCK,
  CHNAGE_BLOCK_STYLES,
  CHNAGE_BLOCK_ATTR,
  DELETE_BLOCK,
  ADD_SCENE,
  DELETE_SCENE,
  CHANGE_SCENE_ATTR,
  CHANGE_CUR_SCENE,
  CHANGE_CUR_BLOCK,
  CHANGE_PAGE_SETTING,
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
export const changeBlockAttr = props => {
  return {
    type: CHNAGE_BLOCK_ATTR,
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
export const deleteScene = props => {
  return {
    type: DELETE_SCENE,
    payload: props,
  }
}
export const changeSceneAttr = props => {
  return {
    type: CHANGE_SCENE_ATTR,
    payload: props,
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

export const changePageSetting = props => {
  return {
    type: CHANGE_PAGE_SETTING,
    payload: props,
  }
}
