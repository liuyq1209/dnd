import React, {useEffect, useState} from "react"
import store from "../../store"
import {Menu} from "antd"
import {connect} from "react-redux"
import {addScene, changeCurScene} from "../../store/actions/actions"
import orm from "../../store/model/orm"
import Styles from "./SceneList.module.scss"
import {Flex} from "rebass"

function SceneList({globalReducer, ormReducer, addScene, changeCurScene}) {
  useEffect(() => {
    addScene({
      name: "镜头1",
    })
    changeCurScene({
      name: "镜头1",
    })
  }, [])
  return (
    <div className={Styles["scenelist-container"]}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[]}
        defaultOpenKeys={["pc"]}
        // onClick={v => {
        //   setCurType(v.key)
        // }}
      >
        <Menu.SubMenu
          title={
            <Flex justifyContent={"space-between"}>
              <span>镜头1</span>
              <span>...</span>
            </Flex>
          }
        >
          <Menu.Item>
            <Flex justifyContent={"space-between"}>
              <span>镜头1</span>
              <span>...</span>
            </Flex>
          </Menu.Item>
          <Menu.Item>镜头2</Menu.Item>
          <Menu.Item>镜头3</Menu.Item>
          <Menu.Item>镜头4</Menu.Item>
          <Menu.SubMenu title="1">
            <Menu.Item>13123</Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
      </Menu>
    </div>
  )
}

function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
  return {
    addScene: payload => dispatch(addScene(payload)),
    changeCurScene: payload => dispatch(changeCurScene(payload)),
  }
}
const SceneListWrap = connect(mapStateToProps, mapDispatchToProps)(SceneList)

export default SceneListWrap
