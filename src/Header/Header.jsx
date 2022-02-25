import React from "react"
import {Flex} from "rebass"
import {ArrowLeftOutlined} from "@ant-design/icons"
import {Input, Space, Button} from "antd"
import Styles from "./Header.module.scss"

function Header() {
  const changeTitle = e => {}
  return (
    <div className={Styles["header-container"]}>
      <Flex justifyContent={"space-around"} alignItems={"center"}>
        <Space>
          <ArrowLeftOutlined />
          <Input showCount maxLength={100} onChange={changeTitle}></Input>
        </Space>
        <Space>
          <Button>保存</Button>
          <Button>预览</Button>
        </Space>
      </Flex>
    </div>
  )
}

export default Header
