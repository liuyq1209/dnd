import {Model, fk, oneToOne, many, attr} from "redux-orm"
//fk for many to one, oneToOne for one to one, and many for many to many

class Block extends Model {
  toString() {
    return `Block:${this.name}`
  }
  static modelName = "Block"
  static fields = {
    id: attr(),
    name: attr(),
    styles: attr(),
    eventType: attr(),
    linkType: attr(),
    targetLink: attr(),
    scene: fk("Scene", "blocks"), //多个组件对应一个镜头,(因为即使相同的组件被拖拽出来后,配置项不同也就成了独一无二的组件)
  }
}

export default Block
