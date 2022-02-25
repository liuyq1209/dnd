import React, {useState} from "react"
import {Menu} from "antd"
import BlocksList from "./BlockList/BlockList"
import SceneList from "./SceneList/SceneList"
import Styles from "./index.module.scss"

function index() {
  const [curTab, setCurTab] = useState("scene")
  const handleClick = v => {
    setCurTab(v.key)
  }
  return (
    <div className={Styles["material-container"]}>
      <div className={Styles["menu-container"]}>
        <Menu mode="horizontal" onClick={handleClick} selectedKeys={[curTab]}>
          <Menu.Item key="blocks">互动组件</Menu.Item>
          <Menu.Item key="scene">镜头列表</Menu.Item>
        </Menu>
      </div>
      <div className={Styles["list-container"]}>
        <div
          style={{visibility: curTab === "blocks" ? "visible" : "hidden"}}
          className={Styles["blocks-list-container"]}
        >
          <BlocksList></BlocksList>
        </div>
        <div
          style={{visibility: curTab === "scene" ? "visible" : "hidden"}}
          className={Styles["scene-list-container"]}
        >
          <SceneList></SceneList>
        </div>
      </div>
    </div>
  )
}

export default index
