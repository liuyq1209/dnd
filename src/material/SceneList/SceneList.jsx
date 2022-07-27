import React, {useEffect, useState} from "react"
import store from "../../store"
import {Menu, message, Tree} from "antd"
import {VideoCameraOutlined} from "@ant-design/icons"
import ReduxWrapToProps from "../../components/ReduxWrapToProps/ReduxWrapToProps"
import {
  addBlock,
  addScene,
  changeCurBlock,
  changeCurScene,
  deleteScene,
} from "../../store/actions/actions"
import orm from "../../store/model/orm"
import {Flex} from "rebass"
import {arrayToTree} from "./ArrayToTree"
import {operateList} from "./const"
import _ from "lodash"
import Styles from "./SceneList.module.scss"

//todo:镜头操作时需阻止选中操作
// todo: 镜头操作样式问题
function SceneList({
  globalReducer,
  ormReducer,
  addScene,
  deleteScene,
  changeCurScene,
  changeCurBlock,
  addBlock,
}) {
  console.log("scenelist rerendered")
  const [scenes, setScenes] = useState(
    arrayToTree(orm.session(ormReducer).Scene.all().toRefArray())
  )
  useEffect(() => {
    addScene({
      name: "镜头1",
      pid: null,
    })
    changeCurScene({
      name: "镜头1",
      pid: null,
      id: 0,
    })
  }, [])
  useEffect(() => {
    setScenes(arrayToTree(orm.session(ormReducer).Scene.all().toRefArray()))
  }, [ormReducer])

  function copy(cur) {
    //复制镜头
    console.log(cur)
    let newBkId = ormReducer.Block.meta.maxId + 1
    const newOj = _.cloneDeep(cur)
    delete newOj.id
    delete newOj.name
    delete newOj.blocks
    let blocks = []

    //复制镜头对应的组件
    const newScId = ormReducer.Scene.meta.maxId + 1
    const bks = orm.session(ormReducer).Block.all().toRefArray()
    console.log(bks)
    const curBks = bks.filter(v => v.curScene.id === cur.id)
    console.log(curBks)
    curBks &&
      curBks.map(b => {
        const newB = _.cloneDeep(b)
        delete newB.id
        console.log()
        newB.curScene = {
          id: newScId,
          name: `镜头${newScId + 1}`,
        }
        console.log(newB)
        blocks.push(newBkId++)
        addBlock(newB)
      })
    //复制镜头时,需要在复制组件时同步处理blocks的问题
    newOj.blocks = blocks
    addScene(newOj)
  }

  function SceneItem({item}) {
    const Scene = orm.session(ormReducer).Scene
    const handleMap = {
      "add-child": cur => {
        addScene({
          name: `镜头${Scene.all().toRefArray().length + 1}`,
          pid: cur.id,
        })
      },
      "add-top-bro": cur => {
        addScene({
          name: `镜头${Scene.all().toRefArray().length + 1}`,
          pid: cur.pid,
        })
      },
      "add-bottom-bro": cur => {
        addScene({
          name: `镜头${Scene.all().toRefArray().length + 1}`,
          pid: cur.pid,
        })
      },
      copy: cur => {
        copy(cur)
      },
      delete: cur => {
        if (Scene.all().toRefArray().length <= 1) {
          message.warn("请至少保留一个镜头")
          return
        }
        deleteScene({
          id: cur.id,
        })
        changeCurScene(null)
      },
    }

    const handleOperate = type => {
      handleMap[type]?.(item)
    }
    return (
      <>
        <span className={Styles["scene-name"]}>{item.name}</span>
        <span className={Styles["scene-operate"]}>
          <span className={Styles["scene-operate-icon"]}>...</span>
          <span className={Styles["operate-container"]}>
            <Menu
              mode="vertical"
              onClick={e => {
                handleOperate(e.key)
              }}
            >
              {operateList.map(v => {
                if (v.children) {
                  return (
                    <Menu.SubMenu title={v.label}>
                      {v.children.map(c => (
                        <Menu.Item key={c.name}>{c.label}</Menu.Item>
                      ))}
                    </Menu.SubMenu>
                  )
                }
                return <Menu.Item key={v.name}>{v.label}</Menu.Item>
              })}
            </Menu>
          </span>
        </span>
      </>
    )
  }
  const transfer = scenes => {
    return scenes.map(v => {
      if (v.children.length) {
        return {
          ...v,
          icon: <VideoCameraOutlined />,
          key: v.id,
          title: <SceneItem item={v}></SceneItem>,
          children: transfer(v.children),
        }
      }
      return {
        ...v,
        icon: <VideoCameraOutlined />,
        key: v.id,
        title: <SceneItem item={v}></SceneItem>,
      }
    })
  }
  const handleSelect = (val, event) => {
    if (!val.length) {
      return
    }
    const tar = orm.session(ormReducer).Scene.withId(val)
    changeCurScene(tar)
    changeCurBlock(null)
  }
  return (
    <div className={Styles["scenelist-container"]}>
      <Tree
        showIcon
        blockNode={true}
        defaultExpandAll
        defaultSelectedKeys={[scenes[0]?.id]}
        treeData={transfer(scenes)}
        onSelect={handleSelect}
      ></Tree>
    </div>
  )
}
export default ReduxWrapToProps({
  Component: SceneList,
  actions: {addScene, deleteScene, changeCurScene, changeCurBlock, addBlock},
})
