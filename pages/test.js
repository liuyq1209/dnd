import React, {useEffect, useState, useLayoutEffect} from "react"

function test() {
  const [count, setcount] = useState(0)
  useEffect(() => {
    console.log(count)
  }, [count])
  useLayoutEffect(() => {
    console.log(count)
  }, [count])

  return (
    <div>
      {count}
      <button
        onClick={() => {
          setcount(count + 1)
        }}
      >
        点击增加1
      </button>
    </div>
  )
}

export default test
