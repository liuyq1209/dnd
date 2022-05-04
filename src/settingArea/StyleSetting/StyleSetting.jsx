import React from "react"
import ReduxWrapToProps from "../../components/ReduxWrapToProps/ReduxWrapToProps"
import FormItem from "../../components/FormItem/FormItem"
import {
  changeBlockAttr,
  changeBlockStyles,
  addOperate,
  addUndoOperate,
  addCurStep,
} from "../../store/actions/actions"
import {panels} from "./setting.panel"
import Styles from "./StyleSetting.module.scss"
import orm from "../../store/model/orm"

function StyleSetting({
  globalReducer,
  ormReducer,
  changeBlockStyles,
  changeBlockAttr,
  addOperate,
  addUndoOperate,
  addCurStep,
}) {
  // console.log(globalReducer)
  const handleChange = (field, value) => {
    const {Scene, Block} = orm.session(ormReducer)
    if (field === "name") {
      const lastValue = Block.withId(globalReducer.curBlock.id)[field]
      changeBlockAttr({
        id: globalReducer.curBlock.id,
        field,
        value,
      })
      handleOperate(
        () => {
          changeBlockAttr({
            id: globalReducer.curBlock.id,
            field,
            value,
          })
        },
        () => {
          changeBlockAttr({
            id: globalReducer.curBlock.id,
            field,
            lastValue,
          })
        }
      )
      return
    }
    if (field === "text") {
      const lastValue = Block.withId(globalReducer.curBlock.id).props[field]
      changeBlockAttr({
        id: globalReducer.curBlock.id,
        field: "props",
        value: {
          text: value,
        },
      })
      handleOperate(
        () => {
          changeBlockAttr({
            id: globalReducer.curBlock.id,
            field: "props",
            value: {
              text: value,
            },
          })
        },
        () => {
          changeBlockAttr({
            id: globalReducer.curBlock.id,
            field: "props",
            value: {
              text: lastValue,
            },
          })
        }
      )
      return
    }
    changeBlockStyles({
      id: globalReducer.curBlock.id,
      styles: {
        [field]: value,
      },
    })
    const lastValue = Block.withId(globalReducer.curBlock.id).styles[field]

    handleOperate(
      () => {
        changeBlockStyles({
          id: globalReducer.curBlock.id,
          styles: {
            [field]: value,
          },
        })
      },
      () => {
        changeBlockStyles({
          id: globalReducer.curBlock.id,
          styles: {
            [field]: lastValue,
          },
        })
      }
    )
  }
  const handleOperate = (addFunc, addUndoFunc) => {
    addCurStep()
    addOperate({
      func: addFunc,
    })
    addUndoOperate({
      func: addUndoFunc,
    })
  }
  //根据id去找到orm中的block的所有配置项
  const curBkId = globalReducer?.curBlock?.id
  const bk = orm.session(ormReducer).Block.withId(curBkId)
  // console.log(curBkId, orm.session(ormReducer).Block, bk)
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
  actions: {
    changeBlockStyles,
    changeBlockAttr,
    addOperate,
    addUndoOperate,
    addCurStep,
  },
})
