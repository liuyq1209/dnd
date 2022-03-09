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
        id: globalReducer.curBlock.id,
        field,
        value,
      })
      return
    }
    if (field === "text") {
      changeBlockAttr({
        id: globalReducer.curBlock.id,
        field: "props",
        value: {
          text: value,
        },
      })
      return
    }
    changeBlockStyles({
      id: globalReducer.curBlock.id,
      styles: {
        [field]: value,
      },
    })
  }
  //根据id去找到orm中的block的所有配置项
  const curBkId = globalReducer?.curBlock?.id
  const bk = orm.session(ormReducer).Block.withId(curBkId)
  return globalReducer.curBlock ? (
    <FormItem
      attributes={panels.map(v => {
        v.content = v.content.map(c => {
          if (c.field == "text") {
            c.props = {...c.props, value: bk.props?.text}
            return c
          }
          if (c.field == "name") {
            c.props = {...c.props, value: bk.name}
            return c
          }
          if (bk?.styles[c.field]) {
            c.props = {...c.props, value: parseInt(bk?.styles[c.field])}
            return c
          } else {
            c.props = {...c.props, value: ""}
            return c
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
