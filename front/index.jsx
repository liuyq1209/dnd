import React, {useState, useEffect} from "react"
import {Collapse, Divider, Radio, Space, Button} from "antd"
import Styles from "./index.module.scss"
import {list, score} from "./data"
import useLocalStorage from "./hooks/useLocalStorage/useLocalStorage"
import EChartsReact from "echarts-for-react"

function index() {
  const [filter, setFilter] = useState({})
  const [localScore, setLocalScore] = useLocalStorage("score", {})
  const [chartsData, setChartsData] = useState([])

  const showAnswer = () => {}
  const changeScore = (target, val) => {
    const newV = {[target.id]: val}
    setLocalScore({...localScore, ...newV})
  }
  const changeChartsData = () => {
    const valueMap = {
      1: {
        name: "很差",
        value: 0,
      },
      2: {
        name: "差",
        value: 0,
      },
      3: {
        name: "中",
        value: 0,
      },
      4: {
        name: "良好",
        value: 0,
      },
      5: {
        name: "好",
        value: 0,
      },
    }
    Object.values(localScore).map(val => {
      valueMap[val].value += 1
    })
    const all = list.reduce((pre, cur) => {
      return pre.concat(cur.children)
    }, [])
    const res = Object.values(valueMap)
    const total = res.reduce((pre, cur) => pre + cur.value, 0)
    if (total < all.length) {
      res.push({
        name: "其他",
        value: all.length - total,
      })
    }
    setChartsData(res)
  }
  useEffect(() => {
    changeChartsData()
  }, [JSON.stringify(localScore)])

  return (
    <div className={Styles["front-container"]}>
      <Space>
        <span>筛选</span>
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={score}
          value={filter.score}
          onChange={e => {
            setFilter({
              score: e.target.value,
            })
          }}
        ></Radio.Group>
        <Button
          onClick={() => {
            setFilter({score: ""})
          }}
        >
          清除条件
        </Button>
        <div className={Styles["chart-container"]}>
          <EChartsReact
            option={{
              series: [
                {
                  name: "访问来源",
                  type: "pie",
                  radius: "55%",
                  data: chartsData,
                },
              ],
            }}
          ></EChartsReact>
        </div>
      </Space>

      <div className={Styles["content-container"]}>
        <Collapse accordion={true}>
          {list.map(d => {
            const showItem = d.children.filter(v => {
              if (filter.score) {
                return v.score == filter.score
              }
              return true
            })
            return (
              <Collapse.Panel
                header={
                  <div>
                    {d.title}（
                    <span style={{color: "red"}}>{showItem.length}</span>-
                    {d.children.length}）
                  </div>
                }
                key={d.value}
              >
                <Space direction="vertical">
                  {showItem.map(t => {
                    if (localScore[t.id]) {
                      t.score = localScore[t.id]
                    }
                    return (
                      <div>
                        <span
                          className={Styles["queation-title"]}
                          title="点击查看答案"
                          onClick={() => {
                            showAnswer(t)
                          }}
                        >
                          {t.title}
                        </span>
                        <Radio.Group
                          optionType="button"
                          buttonStyle="solid"
                          options={score}
                          value={t.score}
                          onChange={e => {
                            changeScore(t, e.target.value)
                            //改变本地存储的数据值
                            t.score = e.target.value
                          }}
                        ></Radio.Group>
                        <Divider style={{margin: "10px 0"}}></Divider>
                      </div>
                    )
                  })}
                </Space>
              </Collapse.Panel>
            )
          })}
        </Collapse>
      </div>
    </div>
  )
}

export default index
