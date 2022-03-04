import React from "react"
import {useDrag} from "react-dnd"

function DragBlocks({com, val, didDrop, type = "blocks"}) {
  const [, dragRef] = useDrag({
    type,
    item: val,
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        didDrop?.(val)
      }
      return val
    },
  })
  return React.cloneElement(com, {ref: dragRef, key: val.id})
}

export default DragBlocks
