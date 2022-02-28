//将Scenes中的扁平化数据项转化为层级结构数据
const testArray = [
  {
    id: "video1",
    url: "",
    name: "镜头1",
    components: ["1", "2"],
    pid: null,
  },
  {
    id: "video2",
    url: "",
    name: "镜头2",
    components: ["3", "4"],
    pid: "video1",
  },
  {
    id: "video3",
    url: "",
    name: "镜头3",
    components: ["3", "4"],
    pid: "video1",
  },
  {
    id: "video4",
    url: "",
    name: "镜头4",
    components: ["3", "4"],
    pid: "video2",
  },
]
//TO
// {
//     "id": "video1",
//     "url": "",
//     "name": "镜头1",
//     "components": ["1", "2"],
//     "children": [{
//         "video2": {
//             "id": "video2",
//             "url": "",
//             "name": "镜头2",
//             "components": ["3", "4"]
//           }
//     }]
//   }

//O(n2)
function arrayToTree(arr, pid = null) {
  const getChildren = (arr, id) => {
    const res = []
    arr.forEach(v => {
      if (v.pid === id) {
        res.push({...v, children: getChildren(arr, v.id)})
      }
    })
    return res
  }
  return getChildren(arr, pid)
}

function treeToArray(tree) {
  let res = []
  for (const item of tree) {
    const {children, ...i} = item
    if (children && children.length) {
      res = res.concat(treeToArray(children))
    }
    res.push(i)
  }
  return res
}
export {arrayToTree, treeToArray}
