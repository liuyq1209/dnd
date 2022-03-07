import React from "react"
import Styles from "./ButtonPrimary.module.scss"

function ButtonPrimary({text = "我是一个按钮", ...res}) {
  const style = {
    ...res,
    boxShadow: `${res["shadow-x"]} ${res["shadow-y"]} ${res["shadow-blur"]} ${res["shadow-spread"]}`,
  }
  return (
    <div className={Styles["btn-primary"]} style={style}>
      <span> {text}</span>
    </div>
  )
}

export default ButtonPrimary
