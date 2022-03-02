import React, {useEffect} from "react"
import {useDrop} from "react-dnd"
import ReduxWrapToProps from "../components/ReduxWrapToProps/ReduxWrapToProps"
import {Space} from "antd"
import orm from "../store/model/orm"
import {changeCurBlock} from "../store/actions/actions"
import Styles from "./index.module.scss"
import Front from "../../front"

function RenderScene({globalReducer, ormReducer, changeCurBlock}) {
  const {Scene, Block} = orm.session(ormReducer)
  const [, dropRef] = useDrop({
    // accept 是一个标识，需要和对应的 drag 元素中 type 值一致，否则不能感应
    accept: "blocks",
    drop: (item, monitor) => {
      console.log("拖拽成功", globalReducer)
    },
  })
  const bks = Block.all().toRefArray()
  return (
    <div className={Styles["scene-container"]}>
      <video src=""></video>
      <div ref={dropRef} className={Styles["component-container"]}>
        <Space direction="vertical">
          <div>当前block:{JSON.stringify(globalReducer?.curBlock)}</div>
          <div>当前Scene:{JSON.stringify(globalReducer?.curScene)}</div>
          <div>
            当前scene的block:{" "}
            {bks
              .filter(v => v.curScene.id === globalReducer.curScene.id)
              .map(v => {
                return (
                  <div
                    onClick={() => {
                      changeCurBlock(v)
                    }}
                  >
                    {JSON.stringify(v)}
                  </div>
                )
              })}
          </div>
          <div>
            所有的blocks:
            {bks.map(v => {
              return <div>{JSON.stringify(v)}</div>
            })}
          </div>
          <div>{/* <Front></Front> */}</div>
        </Space>
      </div>
    </div>
  )
}
export default ReduxWrapToProps({
  Component: RenderScene,
  actions: {changeCurBlock},
})
