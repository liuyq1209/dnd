//将Scenes中的扁平化数据项转化为层级结构数据
// "video1": {
//     "id": "video1",
//     "url": "",
//     "name": "镜头1",
//     "components": ["1", "2"],
//     "children": ["video2"]
//   },
//   "video2": {
//     "id": "video2",
//     "url": "",
//     "name": "镜头2",
//     "components": ["3", "4"]
//   }
//TO
// "video1": {
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

function scenesToList(scs) {}
