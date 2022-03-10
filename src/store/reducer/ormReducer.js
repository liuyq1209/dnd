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
      //在对应的镜头的blocks字段中添加该组件id
      Scene.withId(sc.id).update({blocks: sc.blocks.concat(bk.id)})
      break
    case CHNAGE_BLOCK_STYLES:
      //其实changestyles和changeAttr可以合并,但是考虑到处理方式略有不同,写在一起需要额外写ifelse,姑且就这样吧
      bk = Block.withId(payload.id)
      bk.styles = bk.styles || {}
      bk.update({styles: {...bk.styles, ...payload.styles}})
      break
    case CHNAGE_BLOCK_ATTR:
      bk = Block.withId(payload.id)
      if (payload.field === "props") {
        bk.update({[payload.field]: {...bk.props, ...payload.value}})
      } else {
        bk.update({[payload.field]: payload.value})
      }
      break
    case DELETE_BLOCK:
      Block.withId(payload.id).delete()
      break
    case ADD_SCENE:
      //redux-orm id的规则是取当前id最大值+1
      //获取当前最大id, +1作为镜头名
      const maxId = dbState?.Scene?.meta?.maxId || 0
      let newId = Scene.all().toRefArray().length == 0 ? 0 : maxId + 1
      Scene.create({
        ...payload,
        name: `镜头${newId + 1}`,
      })
      break
    case DELETE_SCENE:
      Scene.withId(payload.id).delete()
      break
    case CHANGE_SCENE_ATTR:
      Scene.withId(payload.id).update(payload.attr)
      break
  }
  return session.state
}
export default ormReducer
