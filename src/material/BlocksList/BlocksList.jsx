import React, {useState} from "react"
import {Menu, Space} from "antd"
import {menu, componentsList} from "./blocks.config"
import {Flex} from "rebass"
import Styles from "./BlocksList.module.scss"
import DragBlocks from "../../components/DragBlocks/DragBlocks"
import {connect} from "react-redux"
import store from "../../store"
import {addBlocks, changeCurBlock} from "../../store/actions/actions"

function BlocksList({state, changeCurBlock}) {
  const [curType, setCurType] = useState("pc-click")
  const didDrop = v => {
    console.log(changeCurBlock)
    changeCurBlock({curBlock: v})
    // console.log(store, store.getState())
    // store.dispatch(
    //   addBlocks({
    //     ...v,
    //     sceneId: 1,
    //     blockId: 1,
    //   })
    // )
    // store.dispatch(changeCurBlock({}))
  }
  return (
    <Flex justifyContent={"space-between"}>
      <div>
        <Menu
          mode="inline"
          defaultSelectedKeys={[curType]}
          defaultOpenKeys={["pc"]}
          onClick={v => {
            console.log(v)
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
    changeCurBlock: payload => dispatch(changeCurBlock(payload)),
  }
}
const BlocksListWrap = connect(mapStateToProps, mapDispatchToProps)(BlocksList)
export default BlocksListWrap
