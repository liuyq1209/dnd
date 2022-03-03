import React from "react"
import {Button} from "antd"

function ButtonPrimary({text = "我是一个按钮"}) {
  return <Button type="primary">{text}</Button>
}

export default ButtonPrimary
