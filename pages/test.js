import React from "react"

function test() {
  const childStyle = {width: "100px", height: "100px", border: "1px solid #000"}
  return (
    <div>
      <div
        style={{
          width: "500px",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "space-between",
          backgroundColor: "aquamarine",
        }}
      >
        <div style={childStyle}>1</div>
        <div style={childStyle}>2</div>
        <div style={childStyle}>3</div>
      </div>
    </div>
  )
}

export default test
