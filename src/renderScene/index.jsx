import React, {useEffect} from "react"
import {useDrop} from "react-dnd"
import {connect} from "react-redux"
import Styles from "./index.module.scss"

function RenderScene({globalReducer, changeCurBlock}) {
  const [, dropRef] = useDrop({
    // accept 是一个标识，需要和对应的 drag 元素中 type 值一致，否则不能感应
    accept: "blocks",
    drop: (item, monitor) => {
      console.log("拖拽成功")
      console.log(globalReducer)
    },
  })
  // useEffect(()=>{

  // },[])
  return (
    <div className={Styles["scene-container"]}>
      <video src=""></video>
      <div ref={dropRef} className={Styles["component-container"]}>
        这是一个画布
        <div>当前block:{JSON.stringify(globalReducer?.curBlock)}</div>
        <div>当前Scene:{JSON.stringify(globalReducer?.curScene)}</div>
      </div>
    </div>
  )
}
function mapStateToProps(state) {
  console.log(state)
  return state
}
function mapDispatchToProps(dispatch) {
  return {
    changeCurBlock: payload => dispatch(changeCurBlock(payload)),
  }
}
const RenderSceneWrap = connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderScene)

export default RenderSceneWrap
