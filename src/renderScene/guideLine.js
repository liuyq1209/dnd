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

function calculate(
  targetLeft,
  targetTop,
  targetW,
  targetH,
  left,
  top,
  width,
  height
) {
  if (
    jinsi(parseInt(targetLeft), parseInt(left)) ||
    jinsi(parseInt(targetLeft) + parseInt(targetW), parseInt(left))
  ) {
    return {left: parseInt(left), top: 0}
  }

  if (
    jinsi(parseInt(targetLeft), parseInt(left) + parseInt(width)) ||
    jinsi(
      parseInt(targetLeft) + parseInt(targetW),
      parseInt(left) + parseInt(width)
    )
  ) {
    return {left: parseInt(left) + parseInt(width), top: 0}
  }

  if (
    jinsi(parseInt(targetTop), parseInt(top)) ||
    jinsi(parseInt(targetTop) + parseInt(targetH), parseInt(top))
  ) {
    return {left: 0, top: parseInt(top)}
  }
  if (
    jinsi(parseInt(targetTop), parseInt(top) + parseInt(height)) ||
    jinsi(
      parseInt(targetTop) + parseInt(targetH),
      parseInt(top) + parseInt(height)
    )
  ) {
    return {left: 0, top: parseInt(top) + parseInt(height)}
  }
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
  for (let i in curBks) {
    // console.log(curBks[i])
    if (curBk && curBks[i].id == curBk.id) continue
    const {left, top, width, height} = curBks[i].styles

    const result = calculate(
      targetLeft,
      targetTop,
      targetW,
      targetH,
      left,
      top,
      width,
      height
    )
    // console.log(result)
    // console.log("targetLeft:", targetLeft)
    // console.log("left:", left)
    if (result) {
      drawLine({...result, dom})
      break
    }
    removeLine(dom)
  }
}

export {createGuidelines, removeLine}
