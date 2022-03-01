import React from "react"
import ReduxWrapToProps from "../../components/ReduxWrapToProps/ReduxWrapToProps"
import FormItem from "../../components/FormItem/FormItem"
import {changeBlockAttr, changeBlockStyles} from "../../store/actions/actions"
import {panels} from "./setting.panel"
import Styles from "./StyleSetting.module.scss"

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
    //todo:改变按钮的文案
    if (field === "text") {
      return
    }
    changeBlockStyles({
      blockId: globalReducer.curBlock.id,
      styles: {
        [field]: value,
      },
    })
  }
  return globalReducer.curBlock ? (
    <FormItem
      attributes={panels}
      onChange={(field, value) => handleChange(field, value)}
    ></FormItem>
  ) : (
    <div className={Styles["no-blocks"]}>请选择一个组件</div>
  )
}
export default ReduxWrapToProps({
  Component: StyleSetting,
  actions: {changeBlockStyles, changeBlockAttr},
})
