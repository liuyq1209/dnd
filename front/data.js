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
            <div>作用域就是代码的执行环境</div>
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
        content: (
          <div>
            <div>
              定义一个函数数据类型(普通函数、类)时候，都会自带一个 prototype
              属性，这个属性指向函数的原型对象，并且这个属性是一个对象数据类型的值
            </div>
            <div>
              对象数据类型也自带一个属性 __proto__
              ，属性值是当前实例所属类的原型(prototype)。原型对象中有一个属性
              constructor , 它指向函数对象
            </div>
            <div>
              原型链指的是通过prototype对象指向父类对象最后指向Object对象的过程【Object最后为null】
            </div>
          </div>
        ),
      },
      {
        title: "事件循环(浏览器和node)",
        id: "2-9",
        content: (
          <div>
            宏任务: 包括整体代码script，setTimeout，setInterval <br />
            微任务: promise, 以及由promise封装而成的axios, fetch等等 <br />
            <h4>在node中, 主要是增加了两个异步事件</h4>
            setImmediate: 类似于setTimeout, 是宏任务
            <br />
            process.nextTick:是微任务,但是与普通微任务有区别，永远在微任务队列执行之前执行
            <br />
            在node11版本之前, 如果宏任务队列中有多个任务,
            就会依次执行完宏任务再去执行对应的微任务
            <br />
            在node11及以后的版本中,
            改为一旦执行一个阶段里的一个宏任务(setTimeout,setInterval和setImmediate)就立刻执行微任务队列，这就跟浏览器端运行一致
            <br />
          </div>
        ),
      },
      {
        title: "script标签中的defer和async的区别",
        id: "2-10",
        content: (
          <div>
            async script ：解析 HTML
            过程中进行脚本的异步下载，下载成功立马执行，有可能会阻断 HTML
            的解析。
            <br />
            defer script：完全不会阻碍 HTML
            的解析，解析完成之后再按照顺序执行脚本。
          </div>
        ),
      },
      {
        title: "事件机制",
        id: "2-10",
        content: (
          <div>
            <div>
              <p>DOM0级事件:通过onclick添加事件处理程序</p>
              <p>
                DOM2级事件:捕获阶段-目标阶段-冒泡阶段,
                通过addEventListener添加事件处理程序,第三个参数默认为false(冒泡阶段处理)
              </p>
              <p>DOM0级的事件可以</p>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    value: "react",
    title: "react",
    children: [
      {
        title: "类组件和函数组件区别",
        id: "3-1",
        content: (
          <div>
            <div>类组件执行时,要实例化;函数组件执行时,直接调用函数</div>
            <div>
              <h4>hooks的优点</h4>
              <div>
                1.更容易复用代码(最重要) <br />
                2.副作用统一处理, 不需要维护各个生命周期
                <br />
                3.代码可读性更强, 代码风格更简洁清爽
                <br />
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "key的作用",
        id: "3-2",
        content: (
          <div>
            react中的key是用来标识组件的唯一性的;
            <br />
            在进行diff操作时,如果key相同,react可以认为是同一个组件,而不需要重复更新渲染
            <div>(*强制重新渲染问题)</div>
          </div>
        ),
      },
      {
        title: "通信方式",
        id: "3-3",
        content: <div>props/context/reducer+context/redux</div>,
      },
      {
        title: "setState同步异步问题",
        id: "3-4",
        content: (
          <div>
            有时异步, 有时同步(setTimeout, DOM事件) <br />
            有时合并(多次相同的setState会合并, 后面的会覆盖前面的)(对象形式),
            有时不合并(函数形式)
            <br />
            <h4>isBatchingUpdate:主要是看是否命中batchUpdate机制</h4>
          </div>
        ),
      },
      {
        title: "v17、v18分别做了什么改动",
        id: "3-5",
        content: (
          <div>
            <div>
              <h4>v17</h4>
              <div>
                1.事件委托的变更,事件由挂载到document上改为挂载到root节点 <br />
                2.useEffect更新由同步改为异步
              </div>
            </div>
            <div>
              <h4>v18</h4>
              <div>
                在React18中，如果是调用ReactDOM.createRoot(rootElement).render('');渲染根组件的话，将会开启Automatic
                batching。 <br />
                <div>
                  在react18之前,是否命中isBatchingUpdate机制来判断是否是批量更新,这样会导致更新次数不一致,给用户错觉
                  <br />
                  在react18之后,如果是通过createRoot创建元素,则会统一一次更新,这就是automatic
                  batching
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "常用hooks",
        id: "3-6",
        content: (
          <div>
            <h4>1.常用的基本hooks</h4>
            <div>useEffect/useState</div>
            <h4>2.特殊功能的hooks</h4>
            <div>useRef/usePrevious/useContext/useReducer</div>
            <h4>3.优化hooks</h4>
            <div>useMemo/useCallback</div>
          </div>
        ),
      },
      {
        title: "react-fiber原理",
        id: "3-7",
        content: (
          <div>
            <h4>react16.8之前的版本</h4>
            <div>
              协调器/渲染器
              递归计算,交替进行,但是是同步更新;如果diff时间过久,就会有卡顿的感觉
            </div>
            <h4>react16.8之后</h4>
            <div>
              增加了一个调度器,调度器可以操作任务的执行顺序,中断/开启任务,设置任务的优先级等等{" "}
              <br />
              调度器和协调器交替工作,可以中断/开启等
              (在内存中进行,不会被用户感知到) <br />
              最后统一使用渲染器渲染到页面上
            </div>
          </div>
        ),
      },
      {
        title: "react事件绑定原理",
        id: "3-8",
        content: (
          <div>
            <div>
              react17之前,事件是绑定在document上的,onclick只是作为一个属性给到元素;
              <br />
              1.将事件绑定在document统一管理，防止很多事件直接绑定在原生的dom元素上
              <br />
              2.抹平不同浏览器之间的差异
            </div>
          </div>
        ),
      },
      {
        title: "组件异步加载",
        id: "3-9",
        content: (
          <div>
            lazy(() =`{">"}` import('components/Index')) <br />
            Suspense
          </div>
        ),
      },
      {
        title: "react中的不可变问题",
        id: "3-10",
        content: (
          <div>
            库:immer <br />
            Immer 的基本思想是，所有更改都应用于临时的 draftState，它是
            currentState 的代理。一旦完成所有变更，Immer
            将基于草稿状态的变更生成
            nextState。这意味着可以通过简单地修改数据而与数据进行交互，同时保留不可变数据的所有优点。
          </div>
        ),
      },
      // {
      //   title: "react中是如何监听数据变化的",
      //   id: "3-10",
      //   content: "",
      // },
    ],
  },
  {
    value: "vue",
    title: "vue",
    children: [
      {
        title: "mvvm",
        id: "4-1",
        content: (
          <div>双向数据绑定,数据驱动视图;监听数据变化从而直接更新视频</div>
        ),
      },
      {
        title: "双向绑定原理",
        id: "4-2",
        content: (
          <div>
            <h4>vue2 Object.defineProperty</h4>
            <div>监听对象, 监听数据, 深度监听,递归监听</div>
            <div>
              深度监听, 需要递归到底, 一次性计算量大 <br />
              Object.defineProperty无法监听新增/删除属性, 所以需要Vue.set,
              Vue.delete 做这件事情 <br />
              通过下边更改数组时, 无法监听数组的变化, 需要特殊处理 <br />
            </div>
            <h4>vue3 proxy</h4>
            <div>
              深度监听. 性能更好
              <br />
              可监听新增/删除 属性
              <br />
              可监听数组变化
              <br />
            </div>
          </div>
        ),
      },
      {
        title: "vue3原理",
        id: "4-3",
        content: "",
      },
      {
        title: "vue生命周期",
        id: "4-4",
        content: "",
      },
      {
        title: "watch原理",
        id: "4-5",
        content: (
          <div>
            <h4>watch和computed功能类似,computed同步,watch异步</h4>
            <div>
              1.组件created时,实例化一个监听器,将监听的数据收集起来 <br />
              2.数据发生变化时,调用watcher.prototype.update更新
              <br />
            </div>
          </div>
        ),
      },
      {
        title: "nextTick原理",
        id: "4-6",
        content: (
          <div>
            vue是异步渲染, data改变dom不会立刻渲染,
            如果需要立刻使用的话需要使用$nextTick
            <div>
              1.异步渲染, $nextTick待DOM渲染完再回调 <br />
              2.页面渲染时会将data的修改做整合, 多次data 修改只会渲染一次
              <br />
            </div>
          </div>
        ),
      },
      {
        title: "通信方式",
        id: "4-7",
        content: <div>props/emit/eventBus/vuex</div>,
      },
      {
        title: "slot",
        id: "4-8",
        content: "",
      },
    ],
  },
  {
    value: "browser",
    title: "浏览器",
    children: [
      {
        title: "浏览器重排和重绘的区别",
        id: "5-1",
        content: "",
      },
      {
        title: "状态码",
        id: "5-2",
        content: (
          <div>
            200：请求被正常处理 <br />
            204：请求被受理但没有资源可以返回
            <br />
            206：客户端只是请求资源的一部分，服务器只对请求的部分资源执行GET方法，相应报文中通过Content-Range指定范围的资源。
            <br />
            301：永久性重定向
            <br />
            302：临时重定向
            <br />
            303：与302状态码有相似功能，只是它希望客户端在请求一个URI的时候，能通过GET方法重定向到另一个URI上
            <br />
            304：发送附带条件的请求时，条件不满足时返回，与重定向无关
            <br />
            307：临时重定向，与302类似，只是强制要求使用POST方法
            <br />
            400：请求报文语法有误，服务器无法识别
            <br />
            401：请求需要认证
            <br />
            403：请求的对应资源禁止被访问
            <br />
            404：服务器无法找到对应资源
            <br />
            500：服务器内部错误
            <br />
            503：服务器正忙
            <br />
          </div>
        ),
      },
      {
        title: "进程线程和协程",
        content: "",
        id: "5-3",
      },
      {
        title: "浏览器缓存",
        id: "5-4",
        content: (
          <div>
            <h4>
              强缓存:向浏览器缓存查找该请求结果，并根据该结果的缓存规则来决定是否使用该缓存结果的过程
            </h4>
            <div>
              1.不存在该缓存结果和缓存标识(Expires(HTTP/1.0)/Cache-Control(HTTP/1.1优先级更高))，强制缓存失效，则直接向服务器发起请求（跟第一次发起请求一致）
              <br />
              2.存在该缓存结果和缓存标识，但该结果已失效，强制缓存失效，则使用协商缓存
              <br />
              3.存在该缓存结果和缓存标识，且该结果尚未失效，强制缓存生效，直接返回该结果
              <br />
            </div>
            <h4>
              协商缓存:强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程
            </h4>
            <div>
              Last-Modified / If-Modified-Since
              <br />
              Etag / If-None-Match(优先级更高) <br />
            </div>
          </div>
        ),
      },
      {
        title: "跨域原理",
        id: "5-5",
        content: (
          <div>
            1.JSONP
            <br />
            2.CORS
            <div>1.简单请求:判断是否有ACAO字段 2.非简单请求:预检请求</div>
            3.proxy代理
          </div>
        ),
      },
      {
        title: "dom的解析和渲染",
        id: "5-6",
        content: (
          <div>
            <h4>html解析器</h4>
            <div>
              1.字节流转换为token (词法分析)
              <br />
              2.token解析为DOM节点
              <br />
              3.DOM节点添加到DOM树中
              <br />
            </div>
            <div>
              <h4>如果有引入外部js</h4>
              <div>
                解析到script标签时，渲染引擎判断这是一段脚本， HTML
                解析器就会暂停 DOM 的解析，JavaScript 引擎介入，并执行 script
                标签中的这段脚本
              </div>
            </div>
            <div>
              <h4>如果有引入外部css</h4>
              <div>
                如果代码里引用了外部的 CSS 文件，那么在执行 JavaScript
                之前，还需要等待外部的 CSS 文件下载完成，并解析生成 CSSOM
                对象之后，才能执行 JavaScript 脚本。
                <br />而 JavaScript 引擎在解析 JavaScript 之前，是不知道
                JavaScript 是否操纵了 CSSOM 的，所以渲染引擎在遇到 JavaScript
                脚本时，不管该脚本是否操纵了 CSSOM，都会执行 CSS
                文件下载，解析操作，再执行 JavaScript 脚本。
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "打开url发生了什么",
        id: "5-7",
        content: (
          <div>
            1.DNS解析
            <br />
            2.TCP连接
            <br />
            3.HTTP请求
            <br />
            4.服务器处理并返回保温
            <br />
            5.浏览器渲染页面
            <br />
            6.断开连接
            <br />
          </div>
        ),
      },
      {
        title: "v8内存",
        id: "5-8",
        content: "",
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
        content: (
          <div>
            <h4>三次握手</h4>
            <div>
              1.客户端发送seq=x <br />
              2.服务器返回ACK=x+1,seq=y
              <br />
              3.客户端确认ACK=y+1,seq=z
              <br />
            </div>
            <h4>四次挥手</h4>
            <div>
              1.客户端发送FIN=1,seq=x
              <br />
              2.服务端发送ACK=x+1,seq=y
              <br />
              3.服务端发送FIN=1,seq=z
              <br />
              4.客户端发送ACK=y+1,seq=x
              <br />
            </div>
          </div>
        ),
        id: "6-3",
      },
      {
        title: "tcp如何保证数据传输的可靠性",
        id: "6-4",
        content: "",
      },
      {
        title: "tcp和udp的区别",
        id: "6-5",
        content: "",
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
