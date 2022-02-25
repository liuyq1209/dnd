import {Model, fk, many, attr} from "redux-orm"

class Scene extends Model {
  toString() {
    return `Scene:${this.name}`
  }
}
Scene.modelName = "Scene"
Scene.fields = {
  sceneId: attr(),
  name: attr(),
  url: attr(),
  // blocks: attr(),
  childrenVideo: attr(),
}

export default Scene
