import orm from "../model/orm"
import {
  ADD_BLOCK,
  CHNAGE_BLOCK_STYLES,
  CHNAGE_BLOCK_ATTR,
  DELETE_BLOCK,
  ADD_SCENE,
  DELETE_SCENE,
  CHANGE_SCENE_URL,
} from "../actions/actionTypes"
import store from ".."
import {styles} from "styled-system"

const ormReducer = (dbState, action) => {
  const session = orm.session(dbState)
  const {Block, Scene} = session
  const {type, payload} = action
  switch (type) {
    case ADD_BLOCK:
      let bk = Block.create(payload)
      const scs = Scene.filter(v => v.name === bk.curScene.name).toRefArray()
      const sc = scs.length ? scs[0] : {}
      sc.blocks = sc.blocks || []
      Scene.withId(sc.id).update({blocks: sc.blocks.concat(bk.id)})
      break
    case CHNAGE_BLOCK_STYLES:
      bk = Block.withId(payload.blockId)
      bk.styles = bk.styles || {}
      bk.update({styles: {...bk.styles, ...payload.styles}})
      break
    case CHNAGE_BLOCK_ATTR:
      bk = Block.withId(payload.blockId)
      if (payload.field === "props") {
        bk.update({[payload.field]: {...bk.props, ...payload.value}})
      } else {
        bk.update({[payload.field]: payload.value})
      }
      break
    case DELETE_BLOCK:
      Block.withId(payload.blockId).delete()
      break
    case ADD_SCENE:
      //获取当前最大id, +1作为镜头名

      const maxId = Scene.all()
        .toRefArray()
        .map(v => v.id)
        .reduce((pre, cur) => {
          return Math.max(pre, cur)
        }, 0)
      let newId = maxId + 1
      if (Scene.all().toRefArray().length == 0) {
        newId = 0
      }
      Scene.create({
        ...payload,
        name: `镜头${newId + 1}`,
      })
      break
    case DELETE_SCENE:
      Scene.withId(payload.id).delete()
      break
    case CHANGE_SCENE_URL:
      console.log(payload)
      Scene.withId(payload.id).update({url: payload.url})
      break
  }
  return session.state
}
export default ormReducer
