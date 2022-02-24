import React from "react"
import Header from "./Header/Header"
import Material from "./material/index"
import RenderScene from "./renderScene/index"
import Setting from "./settingArea/index"
import {Flex, Box, Text} from "rebass"
import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"
import {Provider} from "react-redux"
import store from "./store"
import Styles from "./index.module.scss"

function index() {
  return (
    <Provider store={store}>
      <div className={Styles["page-container"]}>
        <Header></Header>
        <div className={Styles["content-container"]}>
          <DndProvider backend={HTML5Backend}>
            <Flex
              justifyContent={"space-between"}
              style={{height: "100%", width: "100%"}}
            >
              <Material></Material>
              <RenderScene></RenderScene>
              <Setting></Setting>
            </Flex>
          </DndProvider>
        </div>
      </div>
    </Provider>
  )
}

export default index
