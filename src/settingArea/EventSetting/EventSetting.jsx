import React, {useState} from "react"
import {Select, Space, Input} from "antd"
import ReduxWrapToProps from "../../components/ReduxWrapToProps/ReduxWrapToProps"
import {changeBlockAttr} from "../../store/actions/actions"
import {eventList, jumpType} from "./event.panel"
import orm from "../../store/model/orm"
import Styles from "./EventSetting.module.scss"

function EventSetting({globalReducer, ormReducer, changeBlockAttr}) {
  const {Scene, Block} = orm.session(ormReducer)
  const scenesList = Scene.all().toRefArray()
  const curBkId = globalReducer?.curBlock?.id
  const bk = Block.withId(curBkId)
  const changeAttr = (field, value) => {
    changeBlockAttr({
      id: globalReducer.curBlock.id,
      field,
      value,
    })
  }

  return globalReducer.curBlock && globalReducer.curScene ? (
    <div className={Styles["event-setting-container"]}>
      <Space direction="vertical">
        <div>
          <span className={Styles["label"]}> 交互事件：</span>
          {eventList.find(v => v.type === globalReducer.curBlock.type)?.label}
        </div>
        <div>
          <span className={Styles["label"]}>跳转结果：</span>
          <Select
            value={bk.linkType}
            onChange={val => {
              changeAttr("linkType", val)
            }}
          >
            {jumpType.map(v => {
              return <Select.Option value={v.linkType}>{v.label}</Select.Option>
            })}
          </Select>
        </div>
        {bk.linkType === "inner" && (
          <div>
            <span className={Styles["label"]}></span>
            <Select
              placeholder="选择内部镜头"
              onChange={val => {
                changeAttr("targetLink", val)
              }}
              value={bk.targetLink}
            >
              {scenesList
                .filter(v => v.id != globalReducer.curScene.id)
                .map(v => {
                  return <Select.Option value={v.id}>{v.name}</Select.Option>
                })}
            </Select>
          </div>
        )}
        {bk.linkType === "outter" && (
          <div>
            <span className={Styles["label"]}></span>
            <Input
              style={{width: "180px"}}
              placeholder="https://ec.e.360.cn"
              onChange={e => {
                changeAttr("targetLink", e.target.value)
              }}
              value={bk.targetLink}
            ></Input>
          </div>
        )}
      </Space>
    </div>
  ) : (
    <div className={Styles["no-block"]}>请选择一个组件</div>
  )
}

export default ReduxWrapToProps({
  Component: EventSetting,
  actions: {changeBlockAttr},
})
