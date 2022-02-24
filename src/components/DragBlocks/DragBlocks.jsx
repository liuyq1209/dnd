import React from "react"
import {useDrag} from "react-dnd"

function DragBlocks({com, val, didDrop}) {
  const [, dragRef] = useDrag({
    type: "blocks",
    end: (item, monitor) => {
      console.log(monitor)
      if (monitor.didDrop()) {
        console.log("成功拖入", val)
        console.log("在这里处理数据")
        didDrop?.(val)
      }
    },
  })
  return (
    <div ref={dragRef} key={val.id}>
      {com}
    </div>
  )
}

export default DragBlocks
