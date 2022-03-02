import React, {useState} from "react"
import {Select, Space, Input} from "antd"
import ReduxWrapToProps from "../../components/ReduxWrapToProps/ReduxWrapToProps"
import {changeBlockAttr} from "../../store/actions/actions"
import {eventList, jumpType} from "./event.panel"
import orm from "../../store/model/orm"
import Styles from "./EventSetting.module.scss"

function EventSetting({globalReducer, ormReducer, changeBlockAttr}) {
  console.log(globalReducer)
  const scenesList = orm.session(ormReducer).Scene.all().toRefArray()
  const [linkType, setLinkType] = useState(jumpType[0].linkType)
  const changeAttr = (field, value) => {
    console.log(globalReducer)
    changeBlockAttr({
      blockId: globalReducer.curBlock.id,
      field,
      value,
    })
  }
  return (
    <div className={Styles["event-setting-container"]}>
      {globalReducer.curBlock ? (
        <Space direction="vertical">
          <div>
            <span className={Styles["label"]}> 交互事件：</span>
            {eventList.find(v => v.type === globalReducer.curBlock.type)?.label}
          </div>
          <div>
            <span className={Styles["label"]}>跳转结果：</span>
            <Select
              defaultValue={linkType}
              onChange={val => {
                setLinkType(val)
                changeAttr("linkType", val)
              }}
            >
              {jumpType.map(v => {
                return (
                  <Select.Option value={v.linkType}>{v.label}</Select.Option>
                )
              })}
            </Select>
          </div>
          {linkType === "inner" && (
            <div>
              <span className={Styles["label"]}></span>
              <Select
                placeholder="选择内部镜头"
                onChange={val => {
                  changeAttr("targetLink", val)
                }}
              >
                {scenesList
                  .filter(v => v.id != globalReducer.curScene.id)
                  .map(v => {
                    return <Select.Option value={v.id}>{v.name}</Select.Option>
                  })}
              </Select>
            </div>
          )}
          {linkType === "outter" && (
            <div>
              <span className={Styles["label"]}>外部链接：</span>
              <Input
                style={{width: "180px"}}
                placeholder="https://ec.e.360.cn"
                onChange={e => {
                  changeAttr("targetLink", e.target.value)
                }}
              ></Input>
            </div>
          )}
        </Space>
      ) : (
        <div>请选择一个组件</div>
      )}
    </div>
  )
}

export default ReduxWrapToProps({
  Component: EventSetting,
  actions: {changeBlockAttr},
})
