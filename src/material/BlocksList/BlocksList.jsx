import React, {useState} from "react"
import {Menu, Space} from "antd"
import {menu, componentsList} from "./blocks.config"
import {Flex} from "rebass"
import Styles from "./BlocksList.module.scss"
import DragBlocks from "../../components/DragBlocks/DragBlocks"

function BlocksList() {
  const [curType, setCurType] = useState("pc-click")

  return (
    <Flex justifyContent={"space-between"}>
      <div>
        <Menu
          mode="inline"
          defaultSelectedKeys={[curType]}
          defaultOpenKeys={["pc"]}
          onClick={v => {
            setCurType(v.id)
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
        {componentsList
          .filter(v => v.type === curType)
          .map(v => {
            const com = (
              <div key={v.id}>
                {React.createElement(v.content)}
                {v.name}
              </div>
            )
            return <DragBlocks com={com} val={v} />
          })}
      </Space>
    </Flex>
  )
}

export default BlocksList
