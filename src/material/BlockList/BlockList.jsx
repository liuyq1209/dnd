import React, {useState} from "react"
import {Menu, Space} from "antd"
import {menu, blocksList} from "./block.config"
import {Flex} from "rebass"
import DragBlocks from "../../components/DragBlocks/DragBlocks"
import store from "../../store"
import orm from "../../store/model/orm"
import ReduxWrapToProps from "../../components/ReduxWrapToProps/ReduxWrapToProps"
import {addBlock, changeCurBlock} from "../../store/actions/actions"
import Styles from "./BlockList.module.scss"

function BlocksList({globalReducer, ormReducer, addBlock, changeCurBlock}) {
  const [curType, setCurType] = useState("pc-click")
  const didDrop = v => {
    const bks = orm.session(ormReducer).Block.all().toRefArray()
    console.log(bks)
    addBlock({
      ...v,
      id: bks.length,
      curScene: globalReducer.curScene,
    })
    changeCurBlock({
      ...v,
      id: bks.length,
      curScene: globalReducer.curScene,
    })
  }
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
  actions: {addBlock, changeCurBlock},
})
