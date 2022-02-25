import React from "react"
import {useDrag} from "react-dnd"

function DragBlocks({com, val, didDrop}) {
  const [, dragRef] = useDrag({
    type: "blocks",
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        console.log("成功拖入", val)
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
