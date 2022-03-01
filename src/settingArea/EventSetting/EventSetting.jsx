import React from "react"
import ReduxWrapToProps from "../../components/ReduxWrapToProps/ReduxWrapToProps"
import {changeBlockAttr} from "../../store/actions/actions"

function EventSetting({globalReducer, ormReducer, changeBlockAttr}) {
  console.log(globalReducer)

  return (
    <div>
      <div
        onClick={() =>
          changeBlockAttr({
            blockId: globalReducer.curBlock.id,
            field: "name",
            value: "测试aaaa",
          })
        }
      >
        改变名字
      </div>
    </div>
  )
}

export default ReduxWrapToProps({
  Component: EventSetting,
  actions: {changeBlockAttr},
})
