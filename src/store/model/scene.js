import {Model, fk, many, attr} from "redux-orm"
import {
  ADD_BLOCK,
  CHNAGE_BLOCK_STYLES,
  DELETE_BLOCK,
  ADD_SCENE,
  CHANGE_SCENE_URL,
} from "../actions/actionTypes"

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
