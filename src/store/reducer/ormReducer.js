import orm from "../model/orm"
import {
  ADD_BLOCK,
  CHNAGE_BLOCK_STYLES,
  DELETE_BLOCK,
  ADD_SCENE,
  CHANGE_SCENE_URL,
} from "../actions/actionTypes"
import store from ".."

const ormReducer = (dbState, action) => {
  const sess = orm.session(dbState)
  const {Block, Scene} = sess
  const {type, payload} = action
  switch (type) {
    case ADD_BLOCK:
      Block.create(payload)
      console.log(dbState)
      // Scene.withId(store.getState())
      console.log(Scene.all())
      // Scene.withId(payload.sceneId).blocks.add(payload.blockId)
      break
    case CHNAGE_BLOCK_STYLES:
      Block.withId(payload.blockId).update({styles: payload.style})
      break
    case DELETE_BLOCK:
      Block.withId(payload.blockId).delete()
      break
    case ADD_SCENE:
      Scene.create(payload)
      break
    case CHANGE_SCENE_URL:
      Scene.withId(payload.sceneId).update({url: payload.url})
      break
  }
  return sess.state
}
export default ormReducer
