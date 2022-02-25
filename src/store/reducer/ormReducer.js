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
  const session = orm.session(dbState)
  const {Block, Scene} = session
  const {type, payload} = action
  switch (type) {
    case ADD_BLOCK:
      const bk = Block.create(payload)
      const scs = Scene.filter(v => v.name === bk.curScene.name).toRefArray()
      const sc = scs.length ? scs[0] : {}
      sc.blocks = sc.blocks || []
      Scene.withId(sc.id).update({blocks: sc.blocks.concat(bk.id)})
      console.log(
        "ADD_BLOCK:",
        Scene.all().toRefArray(),
        Block.all().toRefArray()
      )

      break
    case CHNAGE_BLOCK_STYLES:
      Block.withId(payload.blockId).update({styles: payload.style})
      break
    case DELETE_BLOCK:
      Block.withId(payload.blockId).delete()
      break
    case ADD_SCENE:
      Scene.create(payload)
      console.log("addScene:", Scene.all().toRefArray())
      break
    case CHANGE_SCENE_URL:
      Scene.withId(payload.sceneId).update({url: payload.url})
      break
  }
  return session.state
}
export default ormReducer
