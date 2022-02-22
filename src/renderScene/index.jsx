import React from "react"
import {useDrop} from "react-dnd"
import Styles from "./index.module.scss"

function RenderScene() {
  const [, dropRef] = useDrop({
    // accept 是一个标识，需要和对应的 drag 元素中 type 值一致，否则不能感应
    accept: "blocks",
    drop: (item, monitor) => {
      console.log(monitor)
    },
  })
  return (
    <div className={Styles["scene-container"]}>
      <video src=""></video>
      <div ref={dropRef} className={Styles["component-container"]}>
        这是一个画布
      </div>
    </div>
  )
}

export default RenderScene
