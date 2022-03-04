import React, {useEffect, useState} from "react"
import {useDrop} from "react-dnd"
import ReduxWrapToProps from "../components/ReduxWrapToProps/ReduxWrapToProps"
import {Space} from "antd"
import {DeleteOutlined} from "@ant-design/icons"
import orm from "../store/model/orm"
import {
  changeBlockAttr,
  changeBlockStyles,
  changeCurBlock,
  deleteBlock,
} from "../store/actions/actions"
import {blocksList} from "../material/BlockList/block.config"
import cx from "classnames"
import Styles from "./index.module.scss"
import DragBlocks from "../components/DragBlocks/DragBlocks"

function RenderScene({
  globalReducer,
  ormReducer,
  changeCurBlock,
  deleteBlock,
  changeBlockStyles,
}) {
  const {Scene, Block} = orm.session(ormReducer)
  const bks = Block.all().toRefArray()
  const curBks = bks.filter(v => v.curScene.id === globalReducer.curScene.id)
  const [, dropRef] = useDrop({
    // accept 是一个标识，需要和对应的 drag 元素中 type 值一致，否则不能感应
    accept: ["blocks", "translate"],
    drop: (item, monitor) => {
      console.log(item)
      if (monitor.getItemType() === "translate") {
        const pos = monitor.getDifferenceFromInitialOffset()
        //todo:删除按钮导致拖拽错位
        const bk = Block.withId(item.id)
        const initTop = bk.styles.top ? parseInt(bk.styles.top) : 0
        const initLeft = bk.styles.left ? parseInt(bk.styles.left) : 0
        changeBlockStyles({
          blockId: bk.id,
          styles: {
            top: initTop + pos.y + "px",
            left: initLeft + pos.x + "px",
          },
        })
        changeCurBlock(item)
      }
    },
  })
  const didDrop = val => {}
  return (
    <div className={Styles["scene-container"]}>
      <video src=""></video>
      <div ref={dropRef} className={Styles["component-container"]}>
        <Space direction="vertical">
          <div>当前block:{JSON.stringify(globalReducer?.curBlock)}</div>
          <div>当前Scene:{JSON.stringify(globalReducer?.curScene)}</div>
          <div>
            当前的blocks:
            {curBks.map(v => {
              return <div>{JSON.stringify(v)}</div>
            })}
          </div>
        </Space>
        {curBks.map(v => {
          const c = blocksList.find(b => b.key === v.key)
          const com = (
            <div
              className={cx({
                [Styles["com-wrap"]]: true,
                [Styles["com-wrap-active"]]:
                  v.id === globalReducer?.curBlock?.id,
              })}
              style={v.styles}
              onClick={() => {
                console.log("触发---------------------")
                changeCurBlock(v)
              }}
            >
              <div
                className={Styles["tooltips"]}
                onClick={e => {
                  e.stopPropagation()
                  deleteBlock({
                    blockId: v.id,
                  })
                  changeCurBlock(null)
                }}
              >
                <DeleteOutlined />
              </div>
              {React.createElement(c.content, {...v.props, ...v.styles})}
            </div>
          )
          return (
            <DragBlocks com={com} val={v} didDrop={didDrop} type="translate" />
          )
        })}
      </div>
    </div>
  )
}
export default ReduxWrapToProps({
  Component: RenderScene,
  actions: {changeCurBlock, deleteBlock, changeBlockStyles},
})
