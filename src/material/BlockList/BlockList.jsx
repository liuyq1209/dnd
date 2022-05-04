import React, {useState, useEffect} from "react"
import {Menu, Space} from "antd"
import {menu, blocksList} from "./block.config"
import {Flex} from "rebass"
import DragBlocks from "../../components/DragBlocks/DragBlocks"
import store from "../../store"
import orm from "../../store/model/orm"
import ReduxWrapToProps from "../../components/ReduxWrapToProps/ReduxWrapToProps"
import {
  addBlock,
  deleteBlock,
  changeCurBlock,
  addOperate,
  addUndoOperate,
  addCurStep,
} from "../../store/actions/actions"
import Styles from "./BlockList.module.scss"

function BlocksList({
  globalReducer,
  ormReducer,
  operateReducer,
  addBlock,
  changeCurBlock,
  addOperate,
  addUndoOperate,
  deleteBlock,
  addCurStep,
}) {
  console.log("operate:", operateReducer)
  const [curType, setCurType] = useState("pc-click")
  // const [newCom, setNewCom] = useState({})
  const undoMap = {
    addBlock: params => {
      deleteBlock(params)
      changeCurBlock(null)
    },
  }

  const didDrop = v => {
    const {Block, Scene} = orm.session(ormReducer)
    const maxId = ormReducer?.Block?.meta?.maxId
    console.log("当前最大的id:", maxId)
    console.log(ormReducer, maxId, newId)
    const newId = maxId == undefined ? 0 : maxId + 1
    addBlock({
      ...v,
      curScene: globalReducer.curScene,
    })
    addCurStep()
    // //要拿到最新的newCom
    addOperate({
      func: () => {
        addBlock({
          ...v,
          id: newId,
          curScene: globalReducer.curScene,
        })
      },
    })
    addUndoOperate({
      func: getUndoFun(newId),
    })

    changeCurBlock({
      ...v,
      // id: Block.all().toRefArray().length == 0 ? 0 : maxId + 1, //新组件的id是maxId+1,redux-orm的规则
      id: newId,
      curScene: globalReducer.curScene,
    })
  }
  //需要存一个curStep
  const getUndoFun = id => {
    console.log("新增的id:", id)

    return () => {
      undoMap["addBlock"]({
        id: id,
        sceneId: globalReducer.curScene.id,
      })
    }
  }
  // const _add = (newCom, globalReducer) => {
  //   addBlock({
  //     ...newCom,
  //     curScene: globalReducer.curScene,
  //   })
  // }
  // const _delete = (newCom, globalReducer) => {
  //   undoMap["addBlock"]({
  //     id: newCom.id,
  //     sceneId: globalReducer.curScene.id,
  //   })
  // }
  return (
    <Flex justifyContent={"space-between"}>
      <div>
        <Menu
          mode="inline"
          defaultSelectedKeys={[curType]}
          defaultOpenKeys={["pc"]}
          onClick={v => {
            setCurType(v.key)
          }}
        >
          {menu.map(v => {
            return (
              <Menu.SubMenu key={v.id} title={v.label}>
                {v.subMenu.map(c => {
                  return <Menu.Item key={c.id}>{c.label}</Menu.Item>
                })}
              </Menu.SubMenu>
            )
          })}
        </Menu>
      </div>
      <Space className={Styles["components"]} wrap direction="vertical">
        {blocksList
          .filter(v => v.type === curType)
          .map(v => {
            const com = (
              <div key={v.id} className={Styles["com-wrap"]}>
                {React.createElement(v.content)}
                <div className={Styles["com-name"]}>{v.name}</div>
              </div>
            )
            return (
              <DragBlocks com={com} val={v} didDrop={didDrop} type="blocks" />
            )
          })}
      </Space>
    </Flex>
  )
}

export default ReduxWrapToProps({
  Component: BlocksList,
  actions: {
    addBlock,
    changeCurBlock,
    addOperate,
    addUndoOperate,
    deleteBlock,
    addCurStep,
  },
})
