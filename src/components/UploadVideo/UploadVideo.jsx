import React from "react"
import {Space, Upload, Button, message} from "antd"

function UploadVideo({icon, onChange}) {
  const validateFile = file => {
    const isVideo = file.type.includes("video")
    if (!isVideo) {
      message.error("请上传正确的视频文件")
    }
    // const isLt2M = file.size / 1024 / 1024 < 2
    // if (!isLt2M) {
    //   message.error("Image must smaller than 2MB!")
    // }
    return isVideo
  }
  const _validateVideoSize = (file, radio, onOk, onFail) => {
    return new Promise(resolve => {
      let width, height
      var videoUrl = URL.createObjectURL(file)
      var videoObj = document.createElement("video")
      videoObj.onloadedmetadata = function (evt) {
        URL.revokeObjectURL(videoUrl)
        width = videoObj.videoWidth
        height = videoObj.videoHeight
        // console.log(width, height, radio)
        if (width / height == radio) {
          onOk && onOk(`${width}x${height}`)
          resolve(true)
        } else {
          onFail && onFail()
          resolve(false)
        }
      }
      videoObj.src = videoUrl
    })
  }
  const validateSize = async file => {
    const flag = await _validateVideoSize(file, 16 / 9)
    if (!flag) {
      message.error("请上传正确尺寸的视频")
    }
    return flag
  }
  const props = {
    name: "file",
    accept: "video/*",
    action: "/api/uploadImg",
    headers: {
      authorization: "authorization-text",
    },
    showUploadList: false,
    onChange: info => {
      const res = info?.file?.response
      console.log(info, res)
      if (res?.code == 200) {
        onChange?.(res.data.url, info.file)
      }
    },
    beforeUpload: async file => {
      return validateFile(file) && (await validateSize(file))
    },
  }
  return <Upload {...props}>{icon}</Upload>
}

export default UploadVideo
