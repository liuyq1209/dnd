import React from "react"
import {MessageOutlined} from "@ant-design/icons"
import {Button} from "antd"
import Styles from "./ButtonHand.module.scss"

function ButtonHand({text, ...res}) {
  return (
    <div className={Styles["btn-container"]} style={res}>
      <img
        src="https://tse1-mm.cn.bing.net/th/id/R-C.562a67be5b93866ca1729f5b42aec3f4?rik=btfthPllsJgKog&riu=http%3a%2f%2fpic53.nipic.com%2ffile%2f20141119%2f5249692_092637429472_2.jpg&ehk=4B%2bedyJnBcqAbnyjesLD%2fNpLuhTFHnM71DZum1RQiFE%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
    </div>
  )
}

export default ButtonHand
