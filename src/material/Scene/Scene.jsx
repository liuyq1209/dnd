import React, {useEffect} from "react"
import store from "../../store"
import {addScene} from "../../store/actions/actions"
import orm from "../../store/model/orm"

function Scene() {
  useEffect(() => {
    store.dispatch(
      addScene({
        sceneId: 1,
        name: "镜头1",
      })
    )
    let query = orm.session().Scene.all()
    console.log(query)
  }, [])
  return <div>Scene</div>
}

export default Scene
