import React from "react"
import {Collapse, Divider, Input, InputNumber, Space} from "antd"
import Styles from "./FormItem.module.scss"

function RenderInput({props, field, onChange}) {
  //onChange节流
  return (
    <Input
      {...props}
      onChange={e => {
        onChange?.(field, e.target.value)
      }}
    ></Input>
  )
}
function RenderInputNumber({props, label, field, onChange}) {
  return (
    <div>
      <span className={Styles["input-number-name"]}> {label}：</span>
      <InputNumber
        {...props}
        onChange={val => {
          onChange?.(field, val + "px")
        }}
      ></InputNumber>
    </div>
  )
}
const componentsMap = {
  input: <RenderInput></RenderInput>,
  "input-number": <RenderInputNumber></RenderInputNumber>,
}
function FormItem({attributes, onChange}) {
  return (
    <div className={Styles["formitem-container"]}>
      <Collapse accordion={true} ghost>
        {attributes.map(v => {
          if (v.title) {
            return (
              <Collapse.Panel header={v.title}>
                {v.content && (
                  <Space direction="vertical">
                    {v.content.map(item => {
                      return React.cloneElement(componentsMap[item.type], {
                        ...item,
                        onChange,
                      })
                    })}
                  </Space>
                )}
              </Collapse.Panel>
            )
          }
          return null
        })}
      </Collapse>
    </div>
  )
}

export default FormItem
