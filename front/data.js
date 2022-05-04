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
            <div>
              <h4>基本数据类型存放在栈内存中, 复杂数据类型存在堆内存中</h4>
              <div>
                注意⚠️：闭包中的基本数据类型变量是保存在堆内存里的，当函数执行完弹出调用栈后，返回一个内部函数的一个引用，这时候函数的变量就会转移到堆上，因此内部函数依然能访问到上一层函数的变量。
              </div>
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
        title: "判断数组",
        id: "2-2-1",
        content: (
          <div>
            1.Array.isArray([]) <br />
            2.Object.prototype.toString.call([]), //'[object Array]'
            <br />
            3.[].constructor === Array
          </div>
        ),
      },
      {
        title: "判断对象",
        id: "2-2-2",
        content: <div>1.</div>,
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
        id: "2-10-1",
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
      {
        title: "this",
        id: "2-11",
        content: (
          <div>
            <h4>按照如下优先级判断</h4>
            1.如果函数是作为构造函数,使用new方法生成的对象,
            那么这个构造函数中的this被绑定到了实例对象上
            <br />
            2.如果函数调用时被apply,call, bind方法强绑定了this,
            this就指向强绑定的对象(apply等函数的第一个参数)
            <br />
            3.普通函数的this指向该函数的调用对象
            <br />
            4.箭头函数没有自己的this, 只能从作用域链的上一层获取this;
            所以箭头函数的this是可变的
            <br />
          </div>
        ),
      },
      {
        title: "new原理",
        id: "2-11-1",
        content: (
          <div>
            1. 创建一个新对象;
            <br />
            2.将新对象的__proto__属性链接到构造函数的prototype上
            <br />
            3.让构造函数中的this值指向新对象,并执行构造函数的函数体
            <br />
            4.返回对象
            <br />
          </div>
        ),
      },
      {
        title: "箭头函数和普通函数的区别",
        id: "2-12",
        content: (
          <div>
            箭头函数this的来自上一层作用域的this, 和调用位置无关
            <br />
            箭头函数不能使用apply,call进行强绑定this
            <br />
            箭头函数不能作为构造函数使用
            <br />
            箭头函数没有自己的arguments，可以在箭头函数中使用rest参数代替arguments对象，来访问箭头函数的参数列表
            <br />
            箭头函数没有原型prototype
            <br />
          </div>
        ),
      },
      {
        title: "Map和Set的区别，Map和Object的区别",
        id: "2-13",
        content: (
          <div>
            <h4>Map 和 Objects 的区别</h4>
            <div>
              ①：Object的键只能是字符串或者Symbols，Map的键可以是任何类型。
              <br />
              ②：Map中的键值遵循FIFO原则，即有序的。而Object添加的键则不是。
              <br />
              ③：Map中的键值对可以通过size来计算，Object需要我们手动计算。
              <br />
              ④：Object
              都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。
              <br />
            </div>
            <h4>Set和Map</h4>
            <div>
              Set是集合,Map是字典
              <br />
              Set存储不重复元素,有has,add,delete,clear方法
              <br />
              Map有get,set,has,delete,clear方法
            </div>
            <h4>WeakSet和Set</h4>
            <div>
              WeakSet 只能储存对象引用，不能存放值，而 Set 对象都可以。
              <br />
              WeakSet 对象中储存的对象值都是被弱引用的，即垃圾回收机制不考虑
              WeakSet对该对象的应用，如果没有其他的变量或属性引用这个对象值，则这个对象将会被垃圾回收掉
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
      {
        title: "context的原理",
        id: "3-11",
        content: (
          <div>
            <div>以栈的形式保存所有共享数据</div>
            1.在消费状态时,ContextConsumer节点调用readContext(MyContext)获取最新状态.
            <br />
            2.在更新状态时,
            由ContextProvider节点负责查找所有ContextConsumer节点,
            并设置消费节点的父路径上所有节点的fiber.childLanes,
            保证消费节点可以得到更新.
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
        content: (
          <div>
            <h4>浏览器的渲染过程</h4>
            <div>
              1.解析HTML，生成DOM树，解析CSS，生成CSSOM树
              <br />
              2.将DOM树和CSSOM树结合，生成渲染树(Render Tree)
              <br />
              3.Layout(回流):根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）
              <br />
              4.Painting(重绘):根据渲染树以及回流得到的几何信息，得到节点的绝对像素
              <br />
              5.Display:将像素发送给GPU，展示在页面上。（这一步其实还有很多内容，比如会在GPU将多个合成层合并为同一个层，并展示在页面中。而css3硬件加速的原理则是新建合成层，这里我们不展开，之后有机会会写一篇博客）。
            </div>
            <div>
              注意：回流一定会触发重绘，而重绘不一定会回流
              <br />
              根据改变的范围和程度，渲染树中或大或小的部分需要重新计算，有些改变会触发整个页面的重排，比如，滚动条出现的时候或者修改了根节点。
            </div>
          </div>
        ),
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
        title: "http缓存",
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
              <div>
                Last-Modified是服务器响应请求时，返回该资源文件在服务器最后被修改的时间
                <br />
                If-Modified-Since则是客户端再次发起该请求时，携带上次请求返回的Last-Modified值，通过此字段值告诉服务器该资源上次请求返回的最后被修改时间{" "}
                <br />
                服务器收到该请求，发现请求头含有If-Modified-Since字段，则会根据If-Modified-Since的字段值与该资源在服务器的最后被修改时间做对比，若服务器的资源最后被修改时间大于If-Modified-Since的字段值，则重新返回资源，状态码为200；否则则返回304，代表资源无更新，可继续使用缓存文件
              </div>
              <br />
              Etag / If-None-Match(优先级更高) <br />
              <div>
                Etag是服务器响应请求时，返回当前资源文件的一个唯一标识(由服务器生成)
              </div>
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
            <div>
              1.简单请求:判断是否有ACAO(Access-Control-Allow-Origin)字段
              2.非简单请求:预检请求
            </div>
            3.proxy代理
            <div>
              跨域时,不能获取cookie
              <br />
              resp.setHeader("Access-Control-Allow-Credentials", "true"); //
              允许客户端携带跨域cookie，此时origin值不能为“*”，只能为指定单一域名
            </div>
          </div>
        ),
      },
      {
        title: "XSS攻击",
        id: "5-5-1",
        content: <div></div>,
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
      {
        title: "xss攻击和csrf攻击",
        id: "5-9",
        content: (
          <div>
            XSS：恶意攻击者往 Web 页面里插入恶意 Script
            代码，当用户浏览该页之时，嵌入其中 Web 里面的 Script
            代码会被执行，从而达到恶意攻击用户的目的。
            <br />
            CSRF：CSRF 攻击是攻击者借助受害者的 Cookie
            骗取服务器的信任，可以在受害者毫不知情的情况下以受害者名义伪造请求发送给受攻击服务器，从而在并未授权的情况下执行在权限保护之下的操作。
          </div>
        ),
      },
    ],
  },
  {
    value: "net",
    title: "网络",
    children: [
      {
        title: "https和http",
        id: "6-1",
        content: (
          <div>
            <h4>http1.1 </h4>
            <div>
              持久连接/浏览器为每个域名最多同时维护 6 个 TCP 持久连接；/使用 CDN
              的实现域名分片机制。
              <br />
              HTTP持久连接（也称作HTTP
              keep-alive）是使用同一个TCP连接来发送和接收多个HTTP请求/应答，而不是为每一个新的请求/应答打开新的连接的方法。
            </div>
            <h4>http2 - 多路复用</h4>
            <div>
              所谓请求阻塞意思就是一条TCP的connection在同一时间只能允许一个请求经过，这样假如后续请求想要复用这个链接就必须等到前一个完成才行
              <br />
              HTTP/2 请求可以同时发送,消除队头阻塞问题
            </div>
            <h4>https</h4>

            <div>
              对称加密:使用同一个秘钥进行加密 <br />
              非对称加密:公钥和私钥
              <br />
              对称加密+非对称加密结合:在传输数据阶段依然使用对称加密，但是对称加密的密钥我们采用非对称加密来传输
              <br />
              客户端用公钥对双方通信的对称秘钥进行加密，并发送给服务器端；
              服务器利用自己唯一的私钥对客户端发来的对称秘钥进行解密
            </div>
          </div>
        ),
      },
      {
        title: "https原理",
        id: "6-2",
        content: "",
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
        content: (
          <div>
            1.校验序列号 <br />
            2.确认应答
            <br />
            3.超时重传
            <br />
            4.流量控制
            <br />
            5.拥塞控制
            <br />
          </div>
        ),
      },
      {
        title: "tcp和udp的区别",
        id: "6-5",
        content: (
          <div>
            1.TCP面向连接;可靠连接;三次握手 <br />
            2.UDP无连接;非可靠连接;即时性好
          </div>
        ),
      },
    ],
  },
  {
    value: "webpack",
    title: "webpack",
    children: [
      {
        title: "webpack常见优化",
        id: "7-1",
        content: (
          <div>
            <h4>优化打包速度</h4>
            <div>
              1.HMR
              <br />
              2.使用缓存,cache-loader,将打包编译的产物放进缓存
            </div>
            <h4>减小打包体积</h4>
            <div>
              1.uglifyjs-webpack-plugin (也支持配置缓存)
              <br />
              2.MiniCssExtractPlugin
              <br />
              3.tree shaking
              <br />
            </div>
          </div>
        ),
      },
      {
        title: "webpack打包流程",
        id: "7-2",
        content: (
          <div>
            1.初始化参数
            <br />
            2.初始化Campiler对象,加载所有插件,开始编译
            <br />
            3.找到所有的入口文件,开始编译
            <br />
            4.调用loader,根据entry找到所有的依赖项,并确定所有的依赖项都经过loader处理
            <br />
            5.完成模块编译,获取每个模块之间的依赖关系
            <br />
            6.组装成一个个包含多个模块的chunk,并添加到输出列表
            <br />
            7.根据配置,确定输出的路径和文件名
            <br />
          </div>
        ),
      },
      {
        title: "loader和plugin的区别",
        id: "7-3",
        content: (
          <div>
            loader即为文件转换器，操作的是文件，将文件A通过loader转换成文件B，是一个单纯的文件转化过程。
            <br />
            plugin即为插件，是一个扩展器，丰富webpack本身，增强功能
            ，针对的是在loader结束之后，webpack打包的整个过程，他并不直接操作文件，而是基于事件机制工作，监听webpack打包过程中的某些节点，执行广泛的任务。
            <br />
          </div>
        ),
      },
      {
        title: "热更新原理",
        id: "7-4",
        content: (
          <div>
            1.使用 webpack-dev-server (后面简称 WDS)托管静态资源，同时以 Runtime
            方式注入 HMR 客户端代码
            <br />
            2.浏览器加载页面后，与 WDS 建立 WebSocket 连接
            <br />
            3.Webpack 监听到文件变化后，增量构建发生变更的模块，并通过 WebSocket
            发送 hash 事件
            <br />
            4.浏览器加载发生变更的增量模块
            <br />
            5.Webpack 运行时触发变更模块的 module.hot.accept
            回调，执行代码变更逻辑
            <br />
          </div>
        ),
      },
      {
        title: "tree-shaking",
        id: "7-5",
        content: (
          <div>
            tree shaking 是一个术语，通常用于描述移除 JavaScript
            上下文中的未引用代码(dead-code)。它依赖于 ES2015
            模块系统中的静态结构特性，例如 import 和 export
            <br />
            1.收集模块导出，模块有哪些值被导出
            <br />
            2.标记模块导出，标记哪些被用到哪些没有被用到
            <br />
            3.生成代码
            <br />
            4.删除 Dead
            Code，经过前面几步操作之后，模块导出列表中未被使用的值都不会定义在
            __webpack_exports__ 对象中，形成一段不可能被执行的 Dead Code 效果
          </div>
        ),
      },
    ],
  },
  {
    value: "babel",
    title: "babel",
    children: [
      {
        title: "babel和webpack的区别",
        id: "8-1",
        content: (
          <div>
            Babel
            是编译工具，把高版本语法编译成低版本语法，或者将文件按照自定义规则转换成js语法。
            <br />
            webpack 是打包工具，定义入口文件，将所有模块引入整理后，通过 loader
            和 plugin 处理后，打包输出。
            <br />
            webpack 通过 babel-loader 使用 Babel 。
          </div>
        ),
      },
      {
        title: "babel的工作原理",
        id: "8-2",
        content: (
          <div>
            babel在将高版本的语法编译成低版本语法时, 是先将代码转换成AST,
            再对AST进行处理, 最后再转换为代码.
            <br />
            1.词法分析: 将代码解析为token
            <br />
            2.语法分析: 将token解析为抽象语法树(AST)
            <br />
            3.变换（transforming）: 对AST进行变换处理
            <br />
            4.生成目标代码（generating）: 通过递归处理AST ，打印出目标代码
            <br />
          </div>
        ),
      },
      {
        title: "AST",
        id: "8-3",
        content: (
          <div>
            babel-parser负责将输入代码转换为AST
            <br />
            babel-traverse负责提供深度遍历 ast 节点的能力（traverse
            本身并不负责转换 ast，只是提供遍历 ast
            节点的能力，具体的转换逻辑交给各种 babel
            插件来实现，这也在很大程度上提高了 babel
            的扩展性，日后如果新增了语言特性不用修改或很少修改核心代码，只需要编写相应的插件来转换新的语法就行了
            <br />
          </div>
        ),
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
