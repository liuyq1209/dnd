import React, {useState} from "react"
import StyleSetting from "./StyleSetting/StyleSetting"
import EventSetting from "./EventSetting/EventSetting"
import {Menu} from "antd"
import Styles from "./index.module.scss"

function index() {
  const [curTab, setCurTab] = useState("style")
  const handleClick = v => {
    setCurTab(v.key)
  }
  return (
    <div className={Styles["material-container"]}>
      <div className={Styles["menu-container"]}>
        <Menu mode="horizontal" onClick={handleClick} selectedKeys={[curTab]}>
          <Menu.Item key="style">样式</Menu.Item>
          <Menu.Item key="event">交互</Menu.Item>
        </Menu>
      </div>
      <div className={Styles["list-container"]}>
        <div style={{visibility: curTab === "style" ? "visible" : "hidden"}}>
          <StyleSetting></StyleSetting>
        </div>
        <div style={{visibility: curTab === "event" ? "visible" : "hidden"}}>
          <EventSetting></EventSetting>
        </div>
      </div>
    </div>
  )
}

export default index
