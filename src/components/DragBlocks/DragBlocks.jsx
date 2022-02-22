import React from "react"
import {useDrag} from "react-dnd"

function DragBlocks({com, val}) {
  const [, dragRef] = useDrag({
    type: "blocks",
    end: (item, monitor) => {
      console.log(item, monitor)
      if (monitor.didDrop()) {
        console.log("成功拖入", val)
        console.log("在这里处理数据")
      }
    },
  })
  return <div ref={dragRef}>{com}</div>
}

export default DragBlocks
