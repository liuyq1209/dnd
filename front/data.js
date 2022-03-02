const list = [
  {
    value: "css",
    title: "css",
    children: [
      {
        title: "样式选择器优先级",
        content: "",
        id: "1-1",
      },
      {
        title: "position属性值",
        content: "",
        id: "1-2",
      },
      {
        title: "盒模型",
        content: "",
        id: "1-3",
      },
      {
        title: "BFC",
        content: "",
        id: "1-4",
      },
      {
        title: "水平垂直居中",
        content: "",
        id: "1-5",
      },
      {
        title: "flex布局",
        content: "",
        id: "1-6",
      },
      {
        title: "浏览器兼容性",
        content: "",
        id: "1-7",
      },
    ],
  },
  {
    value: "js",
    title: "js",
    children: [
      {
        title: "基本数据类型",
        content: "",
        id: "2-1",
      },
      {
        title: "数据类型检测方案",
        content: "",
        id: "2-2",
      },
      {
        title: "var let const",
        content: "",
        id: "2-3",
      },
      {
        title: "垃圾回收",
        content: "",
        id: "2-3",
      },
      {
        title: "作用域",
        content: "",
        id: "2-4",
      },
      {
        title: "闭包",
        content: "",
        id: "2-5",
      },
      {
        title: "原型和原型链",
        content: "",
        id: "2-6",
      },
      {
        title: "new",
        content: "",
        id: "2-7",
      },
      {
        title: "事件循环(浏览器和node)",
        content: "",
        id: "2-8",
      },
      {
        title: "异步函数",
        content: "",
        id: "2-9",
      },
      {
        title: "防抖节流",
        content: "",
        id: "2-10",
      },
    ],
  },
  {
    value: "react",
    title: "react",
    children: [
      {
        title: "类组件和函数组件区别",
        content: "",
        id: "3-1",
      },
      {
        title: "key的作用",
        content: "",
        id: "3-2",
      },
      {
        title: "通信方式",
        content: "",
        id: "3-3",
      },
      {
        title: "setState同步异步问题",
        content: "",
        id: "3-4",
      },
      {
        title: "v17、v18分别做了什么改动",
        content: "",
        id: "3-5",
      },
      {
        title: "常用hooks",
        content: "",
        id: "3-6",
      },
      {
        title: "react-fiber原理",
        content: "",
        id: "3-7",
      },
      {
        title: "react事件绑定原理",
        content: "",
        id: "3-8",
      },
      {
        title: "组件异步加载",
        content: "",
        id: "3-9",
      },
      {
        title: "react中的不可变问题",
        content: "",
        id: "3-10",
      },
    ],
  },
  {
    value: "vue",
    title: "vue",
    children: [
      {
        title: "mvvm",
        content: "",
        id: "4-1",
      },
      {
        title: "双向绑定原理",
        content: "",
        id: "4-2",
      },
      {
        title: "vue3原理",
        content: "",
        id: "4-3",
      },
      {
        title: "vue生命周期",
        content: "",
        id: "4-4",
      },
      {
        title: "watch原理",
        content: "",
        id: "4-5",
      },
      {
        title: "nextTick原理",
        content: "",
        id: "4-6",
      },
      {
        title: "通信方式",
        content: "",
        id: "4-7",
      },
      {
        title: "slot",
        content: "",
        id: "4-8",
      },
    ],
  },
  {
    value: "browser",
    title: "浏览器",
    children: [
      {
        title: "浏览器重排和重绘的区别",
        content: "",
        id: "5-1",
      },
      {
        title: "状态码",
        content: "",
        id: "5-2",
      },
      {
        title: "进程线程和协程",
        content: "",
        id: "5-3",
      },
      {
        title: "浏览器缓存",
        content: "",
        id: "5-4",
      },
      {
        title: "跨域原理",
        content: "",
        id: "5-5",
      },
      {
        title: "dom的解析和渲染",
        content: "",
        id: "5-6",
      },
      {
        title: "打开url发生了什么",
        content: "",
        id: "5-7",
      },
      {
        title: "v8内存",
        content: "",
        id: "5-8",
      },
    ],
  },
  {
    value: "net",
    title: "网络",
    children: [
      {
        title: "https和http的基本优缺点",
        content: "",
        id: "6-1",
      },
      {
        title: "https原理",
        content: "",
        id: "6-2",
      },
      {
        title: "tcp三次握手和四次挥手",
        content: "",
        id: "6-3",
      },
      {
        title: "tcp如何保证数据传输的可靠性",
        content: "",
        id: "6-4",
      },
      {
        title: "tcp和udp的区别",
        content: "",
        id: "6-5",
      },
    ],
  },
  {
    value: "webpack",
    title: "webpack",
    children: [
      {
        title: "webpack常见优化",
        content: "",
        id: "7-1",
      },
      {
        title: "webpack打包流程",
        content: "",
        id: "7-2",
      },
      {
        title: "loader和plugin的区别",
        content: "",
        id: "7-3",
      },
      {
        title: "热更新原理",
        content: "",
        id: "7-4",
      },
      {
        title: "tree-shaking",
        content: "",
        id: "7-5",
      },
    ],
  },
  {
    value: "babel",
    title: "babel",
    children: [
      {
        title: "babel和webpack的区别",
        content: "",
        id: "8-1",
      },
      {
        title: "babel的工作原理",
        content: "",
        id: "8-2",
      },
      {
        title: "AST语法树",
        content: "",
        id: "8-3",
      },
    ],
  },
]

const score = [
  {
    label: "很差",
    value: 1,
  },
  {
    label: "差",
    value: 2,
  },
  {
    label: "中等",
    value: 3,
  },
  {
    label: "良好",
    value: 4,
  },
  {
    label: "好",
    value: 5,
  },
]
export {list, score}
