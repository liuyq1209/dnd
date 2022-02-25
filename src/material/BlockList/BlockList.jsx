import React, {useState} from "react"
import {Menu, Space} from "antd"
import {menu, componentsList} from "./block.config"
import {Flex} from "rebass"
import Styles from "./BlocksList.module.scss"
import DragBlocks from "../../components/DragBlocks/DragBlocks"
import {connect} from "react-redux"
import store from "../../store"
import orm from "../../store/model/orm"
import {addBlock, changeCurBlock} from "../../store/actions/actions"

function BlocksList({globalReducer, ormReducer, addBlock, changeCurBlock}) {
  const [curType, setCurType] = useState("pc-click")
  const didDrop = v => {
    addBlock({
      ...v,
      curScene: globalReducer.curScene,
    })
    changeCurBlock(v)
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
        {componentsList
          .filter(v => v.type === curType)
          .map(v => {
            const com = (
              <div key={v.id}>
                {React.createElement(v.content)}
                {v.name}
              </div>
            )
            return <DragBlocks com={com} val={v} didDrop={didDrop} />
          })}
      </Space>
    </Flex>
  )
}

function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
  return {
    addBlock: payload => dispatch(addBlock(payload)),
    changeCurBlock: payload => dispatch(changeCurBlock(payload)),
  }
}
const BlocksListWrap = connect(mapStateToProps, mapDispatchToProps)(BlocksList)
export default BlocksListWrap
