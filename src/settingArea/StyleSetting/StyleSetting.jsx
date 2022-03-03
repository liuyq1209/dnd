import React from "react"
import ReduxWrapToProps from "../../components/ReduxWrapToProps/ReduxWrapToProps"
import FormItem from "../../components/FormItem/FormItem"
import {changeBlockAttr, changeBlockStyles} from "../../store/actions/actions"
import {panels} from "./setting.panel"
import Styles from "./StyleSetting.module.scss"
import orm from "../../store/model/orm"

function StyleSetting({
  globalReducer,
  ormReducer,
  changeBlockStyles,
  changeBlockAttr,
}) {
  // console.log(globalReducer)
  const handleChange = (field, value) => {
    if (field === "name") {
      changeBlockAttr({
        blockId: globalReducer.curBlock.id,
        field,
        value,
      })
      return
    }
    if (field === "text") {
      changeBlockAttr({
        blockId: globalReducer.curBlock.id,
        field: "props",
        value: {
          text: value,
        },
      })
      return
    }
    changeBlockStyles({
      blockId: globalReducer.curBlock.id,
      styles: {
        [field]: value,
      },
    })
  }
  //根据id去找到orm中的block的所有配置项
  const curBkId = globalReducer?.curBlock?.id
  const bk = orm.session(ormReducer).Block.withId(curBkId)
  console.log(bk)
  return globalReducer.curBlock ? (
    <FormItem
      attributes={panels.map(v => {
        v.content = v.content.map(c => {
          if (c.field == "text") {
            c.props = {...c.props, value: bk.props?.text}
          }
          if (c.field == "name") {
            c.props = {...c.props, value: bk.name}
          }
          return c
        })
        return v
      })}
      onChange={(field, value) => handleChange(field, value)}
    ></FormItem>
  ) : (
    <div className={Styles["no-block"]}>请选择一个组件</div>
  )
}
export default ReduxWrapToProps({
  Component: StyleSetting,
  actions: {changeBlockStyles, changeBlockAttr},
})
