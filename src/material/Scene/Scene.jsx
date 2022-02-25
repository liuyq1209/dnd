import React, {useEffect} from "react"
import store from "../../store"
import {addScene, changeCurScene} from "../../store/actions/actions"
import orm from "../../store/model/orm"

function Scene() {
  useEffect(() => {
    store.dispatch(
      addScene({
        sceneId: 1,
        name: "镜头1",
      })
    )
    store.dispatch(
      changeCurScene({
        curScene: {
          sceneId: 1,
          name: "镜头1",
        },
      })
    )
    // const state = store.getState()
    // let query = orm.session(state).Scene.all()
    // console.log(state)
    // console.log(query)
  }, [])
  return <div>Scene</div>
}

export default Scene
