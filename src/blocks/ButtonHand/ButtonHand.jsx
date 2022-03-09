import React from "react"
import {MessageOutlined} from "@ant-design/icons"
import {Button} from "antd"
import Styles from "./ButtonHand.module.scss"

function ButtonHand({text, ...res}) {
  return (
    <div className={Styles["btn-container"]} style={res}>
      <img src="http://p1.ssl.qhimgs3.com/t01492917cbf47a02c9.png" alt="" />
    </div>
  )
}

export default ButtonHand
