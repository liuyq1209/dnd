// 关联数据表
import {ORM} from "redux-orm"
import Block from "./block"
import Scene from "./scene"

const orm = new ORM({
  stateSelector: state => state.orm,
})
orm.register(Block, Scene)

export default orm
