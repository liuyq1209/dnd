import React, {useState} from "react"
import {useRef} from "react"
import {useEffect} from "react"

function test1() {
  const [count, setCount] = useState(0)
  let timer
  useEffect(() => {
    timer = setInterval(() => {
      console.log(count)
    }, 1000)
  }, [])

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        点击count+1
      </button>
      <p>count:{count}</p>
      <button
        onClick={() => {
          clearInterval(timer)
        }}
      >
        clear
      </button>
    </div>
  )
}
function test2() {
  const [data, setdata] = useState({count: 0})
  let timer
  useEffect(() => {
    timer = setInterval(() => {
      console.log(data.count)
    }, 1000)
  }, [])
  return (
    <div>
      <button
        onClick={() => {
          setdata({...data, count: data.count + 1})
        }}
      >
        点击count+1
      </button>
      <p>count:{data.count}</p>
      <button
        onClick={() => {
          clearInterval(timer)
        }}
      >
        clear
      </button>
    </div>
  )
}

function test3() {
  const [data, setdata] = useState({count: 0})
  const [timer, settimer] = useState(null)
  useEffect(() => {
    let timer = setInterval(() => {
      console.log(data.count)
    }, 1000)
    settimer(timer)
  }, [])
  return (
    <div>
      <button
        //这种可以
        onClick={() => {
          setdata(data => {
            return Object.assign(data, {count: data.count + 1})
          })
        }}
        //下面这种不可以
        // onClick={() => {
        //   setdata(data => {
        //     return {...data, count: data.count + 1}
        //   })
        // }}
      >
        点击count+1
      </button>
      <p>data:{JSON.stringify(data)}</p>
      <p>count:{data.count}</p>
      <button
        onClick={() => {
          clearInterval(timer)
        }}
      >
        clear
      </button>
    </div>
  )
}

//对象的方式不好用,解决闭包还是用1.ref 2.消除重建
function test() {
  const [timer, settimer] = useState(null)
  const [count, setcount] = useState(0)
  const dataRef = useRef(count)

  // useEffect(() => {
  //   let timer = setInterval(() => {
  //     console.log(dataRef.current)
  //   }, 1000)
  //   settimer(timer)
  // }, [])

  return (
    <div>
      <button
        onClick={() => {
          setcount(count + 1)
          dataRef.current = count + 1
        }}
      >
        点击count+1
      </button>
      <p>count:{count}</p>
      <button
        onClick={() => {
          // clearInterval(timer)
        }}
      >
        clear
      </button>
    </div>
  )
}
export default test
