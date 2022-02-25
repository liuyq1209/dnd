import {Model, fk, many, attr} from "redux-orm"

class Scene extends Model {
  toString() {
    return `Scene:${this.name}`
  }
  static modelName = "Scene"
  static fields = {
    id: attr(),
    name: attr(),
    url: attr(),
    // blocks: attr(),
    childrenVideo: attr(),
  }
}

export default Scene
