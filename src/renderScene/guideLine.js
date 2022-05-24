function drawLine({left, top, dom}) {
  //   console.log("划线")
  //   console.log("targetLeft:", left)
  //   console.log(dom)
  if (left) {
    dom.style.left = left + "px"
    dom.style.borderLeft = "1px dashed #4285f4"
    dom.style.width = "1px"
    dom.style.height = "100%"
  }
  if (top) {
    dom.style.top = top + "px"
    dom.style.borderTop = "1px dashed #4285f4"
    dom.style.width = "100%"
    dom.style.height = "1px"
  }
}
function removeLine(dom) {
  //   console.log("remove line")
  dom.style.left = 0
  dom.style.top = 0
  dom.style.width = 0
  dom.style.height = 0
}
//1px的误差
function jinsi(val1, val2, wucha = 1) {
  if (Math.abs(val1 - val2) <= wucha) return true
  return false
}

const createGuidelines = ({
  left: targetLeft,
  top: targetTop,
  width: targetW,
  height: targetH,
  curBks,
  curBk,
  dom,
}) => {
  // console.log(x, y)

  curBks.forEach(b => {
    if (curBk && b.id == curBk.id) return
    const {left, top, width, height} = b.styles
    // console.log("targetLeft:", targetLeft)
    // console.log("left:", left)
    // console.log("width:", width)
    if (
      jinsi(parseInt(targetLeft), parseInt(left)) ||
      jinsi(parseInt(targetLeft) + parseInt(targetW), parseInt(left))
    ) {
      drawLine({left: parseInt(left), top: 0, dom})
      return
    }

    if (
      jinsi(parseInt(targetLeft), parseInt(left) + parseInt(width)) ||
      jinsi(
        parseInt(targetLeft) + parseInt(targetW),
        parseInt(left) + parseInt(width)
      )
    ) {
      drawLine({left: parseInt(left) + parseInt(width), top: 0, dom})
      return
    }

    if (
      jinsi(parseInt(targetTop), parseInt(top)) ||
      jinsi(parseInt(targetTop) + parseInt(targetH), parseInt(top))
    ) {
      drawLine({left: 0, top: parseInt(top), dom})
      return
    }
    if (
      jinsi(parseInt(targetTop), parseInt(top) + parseInt(height)) ||
      jinsi(
        parseInt(targetTop) + parseInt(targetH),
        parseInt(top) + parseInt(height)
      )
    ) {
      drawLine({left: 0, top: parseInt(top) + parseInt(height), dom})
      return
    }

    return removeLine(dom)
  })
}

export {createGuidelines, removeLine}
