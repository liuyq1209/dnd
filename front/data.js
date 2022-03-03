const list = [
  {
    value: "css",
    title: "css",
    children: [
      {
        title: "样式选择器优先级",
        content: (
          <div>
            <p>5:!important </p>
            <p>4:内联</p>
            <p>3:id</p>
            <p>2:类/属性/伪类</p>
            <p>1:标签</p>
          </div>
        ),
        id: "1-1",
      },
      {
        title: "position属性值",
        id: "1-2",
        content: (
          <div>
            <div>absolute 、relative、fixed</div>
            <div>static：默认值。没有定位，元素出现在正常的流中</div>
            <div>
              sticky：元素先按照普通文档流定位，然后相对于该元素在流中的 flow
              root（BFC）和 containing block（最近的块级祖先元素）定位。
              <p>1.父元素不能overflow:hidden或者overflow:auto属性。</p>
              <p>
                2.必须指定top、bottom、left、right4个值之一，否则只会处于相对定位
              </p>
              <p>3.父元素的高度不能低于sticky元素的高度</p>
              <p>4、sticky元素仅在其父元素内生效</p>
            </div>
          </div>
        ),
      },
      {
        title: "盒模型",
        id: "1-3",
        content: (
          <div>
            <h5>
              CSS 盒模型本质上是一个盒子，封装周围的 HTML
              元素，它包括：边距，边框，填充，和实际内容。
            </h5>
            <p>标准盒模型(content-box):width和height指的是内容区域的宽和高</p>
            <p>
              怪异盒模型(border-box):width和height指的是内容+边框+内边距的总宽高
            </p>
          </div>
        ),
      },
      {
        title: "BFC",
        content: (
          <div>
            <h4>块级格式化上下文: 一个独立的渲染区域。</h4>
            <div>
              <h4>触发BFC</h4>
              <p>1、浮动元素，float 除 none 以外的值；</p>
              <p>2、定位元素，position（absolute，fixed）；</p>
              <p>
                3、display 为以下其中之一的值
                inline-block，table-cell，table-caption；
              </p>
              <p>4、overflow 除了 visible 以外的值（hidden，auto，scroll）；</p>
            </div>
            <div>
              <h4>BFC 特性：</h4>
              1.内部的 Box 会在垂直方向上一个接一个的放置；
              <br />
              <br />
              2.垂直方向上的距离由margin 决定；（解决外边距重叠问题）
              <br />
              3.bfc 的区域不会与 float 的元素区域重叠；（防止浮动文字环绕）
              <br />
              4.计算 bfc 的高度时，浮动元素也参与计算；（清除浮动）
              <br />
              5.bfc 就是页面上的一个独立容器，容器里面的子元素不会影响外面元素；
              <br />
            </div>
          </div>
        ),
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
        id: "2-4",
      },
      {
        title: "作用域",
        content: "",
        id: "2-5",
      },
      {
        title: "闭包",
        content: "",
        id: "2-6",
      },
      {
        title: "原型和原型链",
        content: "",
        id: "2-7",
      },
      {
        title: "new",
        content: "",
        id: "2-8",
      },
      {
        title: "事件循环(浏览器和node)",
        content: "",
        id: "2-9",
      },
      {
        title: "异步函数",
        content: "",
        id: "2-10",
      },
      {
        title: "防抖节流",
        content: "",
        id: "2-11",
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
    label: "没了解过",
    value: 1,
  },
  {
    label: "不太了解",
    value: 2,
  },
  {
    label: "一般",
    value: 3,
  },
  {
    label: "掌握还可以",
    value: 4,
  },
  {
    label: "掌握还不错",
    value: 5,
  },
]
export {list, score}
