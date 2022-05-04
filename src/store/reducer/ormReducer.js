import orm from "../model/orm"
import {
  ADD_BLOCK,
  CHNAGE_BLOCK_STYLES,
  CHNAGE_BLOCK_ATTR,
  DELETE_BLOCK,
  ADD_SCENE,
  DELETE_SCENE,
  CHANGE_SCENE_ATTR,
} from "../actions/actionTypes"
import store from ".."
import {
  addBlock,
  changeBlockStyles,
  changeBlockAttr,
  deleteBlock,
  addScene,
  deleteScene,
  changeSceneAttr,
} from "./operateFuntion"
import _ from "lodash"

const ormReducer = (dbState, action) => {
  const session = orm.session(dbState)
  const {Block, Scene} = session
  const {type, payload} = action
  switch (type) {
    case ADD_BLOCK:
      // console.log(dbState)
      const bk = addBlock(payload, Block, Scene)
      // console.log(bk.id)
      // payload?.cb(bk)
      break
    case CHNAGE_BLOCK_STYLES:
      changeBlockStyles(payload, Block)
      break
    case CHNAGE_BLOCK_ATTR:
      changeBlockAttr(payload, Block)
      break
    case DELETE_BLOCK:
      console.log("delete时传进来的参数:", payload)
      deleteBlock(payload, Block, Scene)
      break
    case ADD_SCENE:
      addScene(payload, Block, Scene, dbState)
      break
    case DELETE_SCENE:
      deleteScene(payload, Block, Scene)
      break
    case CHANGE_SCENE_ATTR:
      changeSceneAttr(payload, Block, Scene)
      break
  }
  return session.state
}
export default ormReducer
