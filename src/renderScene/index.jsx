import React, {useEffect, useRef, useState} from "react"
import {useDrop} from "react-dnd"
import ReduxWrapToProps from "../components/ReduxWrapToProps/ReduxWrapToProps"
import {
  DeleteOutlined,
  PlusOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
} from "@ant-design/icons"
import orm from "../store/model/orm"
import {
  changeBlockAttr,
  changeBlockStyles,
  changeCurBlock,
  deleteBlock,
  changeSceneAttr,
  addOperate,
  addUndoOperate,
  addCurStep,
  addBlock,
} from "../store/actions/actions"
import {blocksList} from "../material/BlockList/block.config"
import cx from "classnames"
import Styles from "./index.module.scss"
import DragBlocks from "../components/DragBlocks/DragBlocks"
import UploadVideo from "../components/UploadVideo/UploadVideo"

function RenderNoVideo({onChange}) {
  return (
    <div className={Styles["no-video-container"]}>
      <UploadVideo
        icon={
          <div className={Styles["upload-icon"]}>
            <PlusOutlined />
          </div>
        }
        onChange={onChange}
      ></UploadVideo>

      <div className={Styles["upload-text"]}>点击添加视频素材</div>
    </div>
  )
}
function RenderVideo({curSc}) {
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef()
  const progressBar = useRef()
  return (
    <div className={Styles["video-container"]}>
      <video
        src={curSc.url}
        ref={videoRef}
        onTimeUpdate={() => {
          setCurrentTime(videoRef.current.currentTime)
          progressBar.current.style.width =
            Math.floor(
              (videoRef.current.currentTime / videoRef.current.duration) * 100
            ) + "%"
        }}
        onLoadedMetadata={() => {
          setDuration(videoRef.current.duration)
        }}
      ></video>
      <div className={Styles["play-btn-container"]}>
        <span ref={progressBar} className={Styles["progressbar"]}></span>
        <div className={Styles["ope-btn"]}>
          <span className={Styles.timer}>
            {parseFloat(currentTime).toFixed(2)}/
            {parseFloat(duration).toFixed(2)}
          </span>
          <span
            className={Styles["play-btn"]}
            onClick={() => {
              if (videoRef.current.paused) {
                videoRef.current.play()
              } else {
                videoRef.current.pause()
              }
            }}
          >
            播放/暂停
          </span>
        </div>
      </div>
    </div>
  )
}
function RenderScene({
  globalReducer,
  ormReducer,
  changeCurBlock,
  deleteBlock,
  changeBlockStyles,
  changeSceneAttr,
  addOperate,
  addUndoOperate,
  addCurStep,
  addBlock,
}) {
  const undoMap = {
    changeBlockStyles: params => {
      changeBlockStyles(params)
      changeCurBlock(params.bk)
    },
    addBlock: params => {
      deleteBlock(params)
      changeCurBlock(null)
    },
  }

  const {Scene, Block} = orm.session(ormReducer)
  const curSc = Scene.withId(globalReducer?.curScene?.id)
  const bks = Block.all().toRefArray()
  const curBks = bks.filter(v => v.curScene.id === globalReducer.curScene.id)

  const [collected, dropRef] = useDrop({
    // accept 是一个标识，需要和对应的 drag 元素中 type 值一致，否则不能感应
    accept: ["blocks", "translate"],
    collect: minoter => ({
      isOver: minoter.isOver(),
      getInitialSourceClientOffset: minoter.getInitialSourceClientOffset(),
      item: minoter.getItem(),
    }),
    drop: (item, monitor) => {
      const pos = monitor.getDifferenceFromInitialOffset()
      // console.log("投影:", monitor.getSourceClientOffset())
      // console.log("指针最后记录的偏移:", monitor.getClientOffset())
      // console.log(
      //   "拖拽源组件根dom节点的偏移:",
      //   monitor.getInitialSourceClientOffset()
      // )
      // console.log("指针的偏移:", monitor.getInitialClientOffset())
      console.log(
        "上次记录的指针客户端偏移量与当前拖动操作开始时的客户端偏移量之间的差值:",
        pos
      )
      const {x: x3, y: y3} = pos
      const {left: x1, top: y1} = document
        .getElementById("component-container")
        .getBoundingClientRect()
      const {left: x2, top: y2} = document
        .getElementById(item.key)
        .getBoundingClientRect()

      console.log("画布位置:", x1, y1)
      console.log("组件初始位置:", x2, y2)
      console.log("组件前后位置差:", x3, y3)
      console.log("x:", x2 + x3 - x1, "--y:", y2 + y3 - y1)
      const targetX = x2 + x3 - x1
      const targetY = y2 + y3 - y1

      if (monitor.getItemType() === "translate") {
        const bk = Block.withId(item.id)
        // console.log(monitor.getSourceClientOffset())
        // console.log(monitor.getClientOffset())
        // console.log(monitor.getInitialSourceClientOffset())
        // console.log(monitor.getInitialClientOffset())
        const initTop = bk.styles.top ? parseInt(bk.styles.top) : 0
        const initLeft = bk.styles.left ? parseInt(bk.styles.left) : 0
        changeBlockStyles({
          id: bk.id,
          //删除按钮导致拖拽错位, 手动+26
          //todo: 还有一定误差,后续有时间继续优化
          styles: {
            // top: initTop + pos.y + 26 + "px",
            // left: initLeft + pos.x + "px",
            top: initTop + pos.y + "px",
            left: initLeft + pos.x + "px",
          },
        })
        console.log(item, bk)
        changeCurBlock(item)

        changeStyleEffect(bk, pos)
      }
      if (monitor.getItemType() === "blocks") {
        const maxId = ormReducer?.Block?.meta?.maxId
        const newId = maxId == undefined ? 0 : maxId + 1
        addBlock({
          ...item,
          curScene: globalReducer.curScene,
        })
        changeBlockStyles({
          id: newId,
          //删除按钮导致拖拽错位, 手动+26
          //todo: 还有一定误差,后续有时间继续优化
          styles: {
            top: (targetY >= 0 ? targetY : 0) + "px",
            left: (targetX >= 0 ? targetX : 0) + "px",
          },
        })

        changeCurBlock({
          ...item,
          // id: Block.all().toRefArray().length == 0 ? 0 : maxId + 1, //新组件的id是maxId+1,redux-orm的规则
          id: newId,
          curScene: globalReducer.curScene,
        })
        changeAddEffect(newId)
      }
    },
  })
  // console.log(collected, collected.getInitialSourceClientOffset, collected.item)
  const changeAddEffect = newId => {
    addCurStep()
    addOperate({
      func: () => {
        addBlock({
          ...v,
          id: newId,
          curScene: globalReducer.curScene,
        })
      },
    })
    addUndoOperate({
      func: getUndoFun(newId),
    })
  }
  const getUndoFun = id => {
    return () => {
      undoMap["addBlock"]({
        id: id,
        sceneId: globalReducer.curScene.id,
      })
    }
  }
  const changeStyleEffect = (bk, pos) => {
    const initTop = bk.styles.top ? parseInt(bk.styles.top) : 0
    const initLeft = bk.styles.left ? parseInt(bk.styles.left) : 0
    addCurStep()
    addOperate({
      func: () => {
        changeBlockStyles({
          id: bk.id,
          styles: {
            top: initTop + pos.y + 26 + "px",
            left: initLeft + pos.x + "px",
          },
        })
        changeCurBlock(bk)
      },
    })
    addUndoOperate({
      func: () => {
        undoMap["changeBlockStyles"]({
          id: bk.id,
          bk,
          styles: {
            top: initTop + "px",
            left: initLeft + "px",
          },
        })
      },
    })
  }
  return (
    <div className={Styles["scene-container"]}>
      {curSc && curSc.url ? (
        <div className={Styles["scene-content"]}>
          <RenderVideo curSc={curSc}></RenderVideo>
          <div
            ref={dropRef}
            className={Styles["component-container"]}
            id={"component-container"}
          >
            {curBks.map(v => {
              //在编辑器中,绝对定位放在外层处理,组件内层将样式隐式处理掉
              //但是在sdk中要在组件内部处理
              const resetStyle = {
                position: "relative",
                top: "0",
                left: "0",
              }
              const c = blocksList.find(b => b.key === v.key)
              const com = (
                <div>
                  {React.createElement(c.content, {
                    ...v.props,
                    ...v.styles,
                    ...resetStyle,
                  })}
                </div>
              )
              return (
                <div
                  key={v.id}
                  className={cx({
                    [Styles["com-wrap"]]: true,
                    [Styles["com-wrap-active"]]:
                      v.id === globalReducer?.curBlock?.id,
                  })}
                  style={{
                    position: "absolute",
                    top: v.styles.top,
                    left: v.styles.left,
                  }}
                  onClick={() => {
                    changeCurBlock(v)
                  }}
                >
                  <div
                    className={Styles["tooltips"]}
                    onClick={e => {
                      e.stopPropagation()
                      deleteBlock({
                        id: v.id,
                        sceneId: curSc.id,
                      })
                      changeCurBlock(null)
                    }}
                  >
                    <DeleteOutlined />
                  </div>
                  <DragBlocks com={com} val={v} type="translate" />
                </div>
              )
            })}
          </div>
        </div>
      ) : curSc ? (
        <RenderNoVideo
          onChange={(url, file) => {
            changeSceneAttr({
              id: globalReducer.curScene.id,
              attr: {
                url,
                file,
              },
            })
          }}
        ></RenderNoVideo>
      ) : (
        <div className={Styles["no-scene-container"]}>请先选择一个镜头</div>
      )}
    </div>
  )
}
export default ReduxWrapToProps({
  Component: RenderScene,
  actions: {
    changeCurBlock,
    deleteBlock,
    changeBlockStyles,
    changeSceneAttr,
    addOperate,
    addUndoOperate,
    addCurStep,
    addBlock,
  },
})
