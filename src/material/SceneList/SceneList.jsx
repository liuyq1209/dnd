import React, {useEffect, useState} from "react"
import store from "../../store"
import {Menu, Tree} from "antd"
import {VideoCameraOutlined} from "@ant-design/icons"
import {connect} from "react-redux"
import {
  addScene,
  changeCurScene,
  deleteScene,
} from "../../store/actions/actions"
import orm from "../../store/model/orm"
import {Flex} from "rebass"
import {arrayToTree} from "./ArrayToTree"
import {operateList} from "./const"
import Styles from "./SceneList.module.scss"

function SceneList({
  globalReducer,
  ormReducer,
  addScene,
  deleteScene,
  changeCurScene,
}) {
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
    })
  }, [])
  useEffect(() => {
    setScenes(arrayToTree(orm.session(ormReducer).Scene.all().toRefArray()))
  }, [ormReducer])
  console.log(scenes)
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
      delete: cur => {
        deleteScene({
          id: cur.id,
        })
      },
    }
    const handleOperate = type => {
      handleMap[type](item)
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
                console.log(e)
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
    console.log(val, event, "改变了")
    const tar = orm
      .session(ormReducer)
      .Scene.filter(v => v.id == val)
      .toRefArray()
    changeCurScene(tar[0])
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

function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
  return {
    addScene: payload => dispatch(addScene(payload)),
    deleteScene: payload => dispatch(deleteScene(payload)),
    changeCurScene: payload => dispatch(changeCurScene(payload)),
  }
}
const SceneListWrap = connect(mapStateToProps, mapDispatchToProps)(SceneList)

export default SceneListWrap
