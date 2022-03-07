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
        id: "1-5",
        content: (
          <div>
            <h4>文本居中:</h4>
            <h4>盒子居中:</h4>
            <div>
              <h5>已知宽高:margin/绝对定位</h5>
              <h5>未知宽高:</h5>
              <div>margin:auto/flex/translates</div>
            </div>
          </div>
        ),
      },
      {
        title: "flex布局",
        id: "1-6",
        content: (
          <div>
            <div>
              flex-direction/flex-wrap = flex-flow <br />
              justify-content align-items align-content
            </div>
            <div>
              <div>flex:1 === flex: 1 1 auto</div>
              <p>
                第一个参数表示: flex-grow
                定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
              </p>
              <p>
                第二个参数表示: flex-shrink
                定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
              </p>
              <p>
                第三个参数表示: flex-basis给上面两个属性分配多余空间之前,
                计算项目是否有多余空间, 默认值为 auto, 即项目本身的大小
              </p>
            </div>
          </div>
        ),
      },
      {
        title: "浏览器兼容性",
        id: "1-7",
        content: (
          <div>
            <a
              target="_blank"
              href="https://juejin.cn/post/6971312765356998687"
            >
              参考链接
            </a>
            <h4>HTML兼容</h4>
            <div>高级标签无法使用,统一使用基础标签开发(div,p,span)</div>
            <h4>CSS兼容</h4>
            <div>
              <h5>1.不同浏览器的默认样式不同 (reset.css重置)</h5>
              <h5>2.不同浏览器margin,padding不同(reset.css重置)</h5>
              <h5>3不同浏览器支持属性不同 (需要兼容时,不使用高级样式)</h5>
            </div>
            <h4>JS兼容</h4>
            <div>
              适配写法(比如冒泡,事件处理等)
              使用babel将高版本js打包为低版本(IE7-11不支持ES6)
            </div>
          </div>
        ),
      },
    ],
  },
  {
    value: "js",
    title: "js",
    children: [
      {
        title: "数据类型",
        content: (
          <div>
            <h4>基本数据类型</h4>
            undefined：typeof instance === "undefined" <br />
            null：typeof instance === 'object'
            <br />
            boolean：typeof instance === "boolean"
            <br />
            number：typeof instance === "number"
            <br />
            string：typeof instance === "string"
            <br />
            symbol ：typeof instance === "symbol"
            <br />
            <div>
              <h4>复杂数据类型</h4>
              Object, Function, Date
            </div>
            <div>
              <h4>
                typeof可以检测如下六种数据类型:
                number、string、boolean、object、undefined、function
              </h4>
              <h4>
                instansof用于检测某个对象的原型链是否包含某个构造函数的
                prototype 属性
              </h4>
            </div>
          </div>
        ),
        id: "2-1",
      },
      {
        title: "数据类型检测方案",
        id: "2-2",
        content: (
          <div>
            <h4>四种数据类型检测方案</h4>
            <p>1.typeof检测基本数据类型(null除外)</p>
            <p>2.instanceof检测原型链</p>
            <p>
              3.检测当前对象的构造函数 var o = new Object();
              console.log(o.constructor == Object); // true
            </p>
            <p>
              4.Object.prototype.toString.call()
              <div>Object.prototype.toString.call({}) // "[object Object]"</div>
            </p>
          </div>
        ),
      },
      {
        title: "var let const",
        id: "2-3",
        content: (
          <div>
            <h4>1.var有变量提升,let则没有</h4>
            <h4>
              2.因为var有变量提升,所以var会存在暂时性死区; undefined;let会报错
            </h4>
            <h4>
              3.因为var有变量提升,所以var在循环中声明,多次循环会共享一个变量;let则是每次循环都生成自己的函数作用域
            </h4>
            <h4>let上js拥有了块级作用域</h4>
          </div>
        ),
      },
      {
        title: "垃圾回收",
        id: "2-4",
        content: (
          <div>
            <div>
              <h4>栈内存垃圾回收</h4>
              <div>ESP指针记录当前执行状态</div>
            </div>
            <div>
              <h4>堆内存垃圾回收</h4>
              <div>
                <div>
                  副垃圾回收器:新生代 ;<br />
                  新生代分为对象区域和空闲区域;
                  <br />
                  对象区域满了之后进行一次垃圾回收,将还存在的对象复制到空闲区域,空时将对象区域和空闲区域进行翻转;
                  <br />
                  如果经过两次翻转还存在的对象会被复制到老生区中
                  <br />
                </div>
                <div>
                  主垃圾回收器:老生代;对象占用空间大,对象存活时间长
                  <br />
                  遍历调用栈,找到并标记垃圾数据和活动数据 <br />
                  清除垃圾数据
                  <br />
                  标记-清除 算法还有优化空间;比如标记-整理等等
                </div>
              </div>
            </div>
            <div>
              <h4>避免内存泄漏</h4>
              <div>
                少用闭包;手动清除定时器;手动清除事件监听器;少使用全局变量
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "作用域",
        id: "2-5",
        content: (
          <div>
            <h4>全局作用域</h4>
            <div>如果您为尚未声明的变量赋值，此变量会自动成为全局变量。</div>
            <div>任何函数都可以改变全局变量,所以要尽量少的使用全局变量</div>
            <h4>局部作用域</h4>
            <div>每个函数创建一个新的作用域;作用域决定了变量的可访问性</div>
          </div>
        ),
      },
      {
        title: "闭包",
        id: "2-6",
        content: (
          <div>
            <h4>
              定义:一个函数返回值是另一个函数,导致在该函数的作用域外部还能访问到该函数的内部变量
              <div>
                (包括定时器,事件监听器等,也会导致在作用域外部访问函数内部变量的问题)
              </div>
            </h4>
            <div>无法进行垃圾回收,导致内存泄漏</div>
          </div>
        ),
      },
      {
        title: "原型和原型链",
        id: "2-7",
        content: <div></div>,
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
