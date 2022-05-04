import React, {useEffect, useState} from "react"
import {Flex} from "rebass"
import {ArrowLeftOutlined, VideoCameraOutlined} from "@ant-design/icons"
import {Input, Space, Button} from "antd"
import ReduxWrapToProps from "../components/ReduxWrapToProps/ReduxWrapToProps"
import UploadVideo from "../components/UploadVideo/UploadVideo"
import {
  changeCurBlock,
  changePageSetting,
  changeSceneAttr,
  substractCurStep,
  addCurStep,
} from "../store/actions/actions"
import orm from "../store/model/orm"
import Styles from "./Header.module.scss"

function Header({
  globalReducer,
  ormReducer,
  operateReducer,
  changeCurBlock,
  changeSceneAttr,
  changePageSetting,
  substractCurStep,
  addCurStep,
}) {
  useEffect(() => {
    setTimeout(() => {
      try {
        window.addEventListener("storage", () => {
          alert("22")
        })
      } catch (error) {
        console.log(error)
      }
    }, 1000)
    setTimeout(() => {
      localStorage.setItem("test", 111)
    }, 2000)
  }, [])
  const handleUndo = () => {
    const arr = operateReducer?.undoStack
    const func = arr[operateReducer.curStep - 1]
    Object.prototype.toString.call(func) === "[object Function]" && func()
    substractCurStep()
  }
  const handleReverseUndo = () => {
    const arr = operateReducer?.doStack

    //其实是当前步的下一个函数
    const func = arr[operateReducer.curStep]
    console.log(func)
    Object.prototype.toString.call(func) === "[object Function]" && func()
    addCurStep()
  }
  const changeName = e => {
    changePageSetting({
      name: e.target.value,
    })
  }
  const videoName = globalReducer?.curScene?.file?.name
  const {Scene, Block} = orm.session(ormReducer)
  //step:1,2,3
  const canUndo =
    operateReducer?.undoStack &&
    operateReducer.curStep &&
    operateReducer.undoStack[operateReducer.curStep - 1]

  const canReverseUndo =
    operateReducer?.doStack &&
    operateReducer.curStep &&
    operateReducer.doStack[operateReducer.curStep]
  return (
    <div className={Styles["header-container"]}>
      <Flex justifyContent={"space-around"} alignItems={"center"}>
        <Space>
          <ArrowLeftOutlined />
          <Input showCount maxLength={10} onChange={changeName}></Input>

          <span
            onClick={() => {
              canUndo && handleUndo()
            }}
            style={{color: canUndo ? "#1890ff" : "#dddddd"}}
          >
            撤销
          </span>
          <span
            onClick={() => {
              canReverseUndo && handleReverseUndo()
            }}
            style={{color: canReverseUndo ? "#1890ff" : "#dddddd"}}
          >
            反撤销
          </span>
        </Space>
        <Space>
          <UploadVideo
            icon={
              <span title="点击上传视频" className={Styles["re-upload"]}>
                <VideoCameraOutlined />
                <span className={Styles.desc}>
                  {videoName ? "重新上传" : "上传"}
                </span>
              </span>
            }
            onChange={(url, file) => {
              changeSceneAttr({
                id: globalReducer.curScene.id,
                attr: {
                  url,
                  file,
                },
              })
            }}
          ></UploadVideo>
          {videoName && <span>{videoName}</span>}
        </Space>
        <Space>
          <Button
            onClick={() => {
              const scs = Scene.all().toRefArray()
              const bks = Block.all().toRefArray()
              scs.map(s => {
                if (Array.isArray(s.blocks)) {
                  console.log(s.blocks)
                  const newbks = s.blocks.map(id => {
                    return bks.filter(bk => bk.id == id)[0]
                  })
                  s.blocks = newbks
                }
              })
              console.log(scs)
            }}
          >
            保存
          </Button>
          <Button>预览</Button>
        </Space>
      </Flex>
    </div>
  )
}
export default ReduxWrapToProps({
  Component: Header,
  actions: {
    changeCurBlock,
    changePageSetting,
    changeSceneAttr,
    substractCurStep,
    addCurStep,
  },
})
