- MVC
    - Model  数据层
    - View   视图层
    职责分离 MV 不能直接通信 
    Control 来负责  逻辑  参数的校验  中间计算， 用户session。。。
    路由  后端路由，用户从哪条路哪个method进来，交给 controll
- KOA 
    极简的node 开发框架
    - context = req + res
    - 中间件
        函数

## 后端思维
    MVVM -> MVC
    view html 有  完整的html + DOM(原生js jquery)
- 3000
    后端安全的一部分？ 
    配置化

- 洋葱模型
    koa   提供服务和架构的本质， node 服务器编程的简单
    123456
    - 每个函数教给app.use  调用都是中间件  middleware
    - 每个middleware 种都能拿到ctx next 等函数
    - 按照顺序执行  从上到下
    - 如果遇到 ctx.response.body  响应数据
        如果不是最后一个，要给next
        最后一个的话， 它会沿着洋葱模型  执行一遍
        不同的用户， 不同的任务， 不同的中间件需求
        数组  数据库链接中间件  肯定要在路中间前面
    - 如果到了最后的一个中间件， 仍然没有结束的话， 他会沿着洋葱模型回溯执行

- koa 路由
    1. app.js 单点入口  模块化，
    2. routers 目录  定义路由
        使用restful-api  名词 + 动词
        /posts GET POST DELETE PATCH PUT
    3. 路由是作为中间键件 启用
        ctx.req 请求行  http 版本号 url method
        多个路由中间件 
        如果url method 和当前洋葱模型执行顺序里的路由中间件匹配，进入控制器函数执行
        不匹配呢？ next

- koa view 层
    1. 传统的MVC
        经典的额后端架构方案和设计模式
        router -> controller -> views (html)
    2. ctx.render
        ctx 上下文环境  req + res
        省略 response 
        ctx.render = ctx.response.render
    3. views 目录和view层
        配置一下
    4. 使用ejs  模板引擎
        {{}}
        <% = %>
        for 
        模板编译后 完整的输出给浏览器
        前后端分离  只有一个挂载点  vue
        component 动态
        - MVVM 大型项目。 大公司团队协作
            前后端分离  更适合  应用打开更快， 体验好， 不用白一下
        - 前后端分离缺点是啥？
            SEO  及其差  #root 百度  不会解析js  ajax  数据
            对于手机app 里  无所谓SEO的  体验为先Mobile First
            掘金  csdn 搜狐  非常在乎SEO不合适
            难道 掘金要舍弃vue MVVM 回归MVC吗？
            服务器端渲染的VUE Nuxt
        - MVC 有点SEO
        - koa-views views中间件  挂载在app上
            - 配置views 所在
                ctx.render 指定模板的名字
            - 指定模板引擎 ejs pug
                <%=%>
            - 洋葱模型顺序  views  中间件  功能准备型中间件  放置在路由中间件前面
        - ctx.render
            模型在服务器端编译  返回所有的html  对SEO 很友好
                爬虫  也是通过发送请求来建立内容分析  curl
        - PC 端入口在百度
        - 移动端在应用市场  MVVM

- meta viewport
    SEO 要注意 meta 标签的使用
    head 里 meta 通常用来丰富页面的信息和属性
    description
    keywords 掘金,稀土,Vue.js,前端面试题,Kotlin, ReactNative,Python 
    viewport 用于适配PC端不用,
    移动端  init-scale= 1.0 width=device-width user-scaleable=no
    乔布斯iphone开创了移动时代, pc更多, user-scaleable两个手指缩放页面
    1024px pc-> 750 手机 很小? 放大
    现在过时了 Mobile First user-scaleable=no 禁用缩放
    缩放有时候会误操作  触发返回到上一页  下一页  奶茶
    www.taobao.com -> m.taobao.com  301  
    PC 一套  nuxt
    mobile  SPA

- 静态资源koa处理
    -   css js image 静态资源
        - 不归路由(逻辑,数据库,服务器端内存等)管  服务器集群中
        - 前端写的绝大部分都是静态资源  webpack vite 打包  dist/
            未来会单独放在cdn 服务器  前端缓存
    -  单独处理静态资源路由
    - http://localhost:3000/index.css
        静态服务器 + 缓存功能cache  koa-static-cache
        - / 动态服务器路由  ,首页
        - / 静态服务器     静态服务器中间件放在  路由前面
            / -> 配置的 /public
        - 时间内, 客户端不用再请求, http优化的重要理解
            200 第一次
            2.. 304 Not Modified
            maxAge   一定会去服务器再请求  再更新

- 登录的用户体验
    - keyup 时间 enter 提交 手机 Enter 虚拟键盘
    - 做好校验
        前端做了(用户体验,及时提醒), 后端还要做 (js可以禁用,后端不会信任前端传来的任何东西) 为了数据安全
        密码重复  在前端, 后端都要做?  后端对数据安全负第一责任

- 文件对象是html5的重大功能
    - 提供了File对象
        文件上传到服务器之前，就可以访问到本地的文件  类型  大小  等
    - 提供了FileReader 对象
        异步的从硬盘读取内容到内存，以url，base64 blob
        看到图片， 上传
        文件大小  比较大  用户可能要等好久才能上传， 如果没有交互体现在正在上传的话，
        用户会很焦虑

- bodyParser 中间件
    post 请求和GET 请求不一样
    GET 查询参数  在请求行 就已到位
    POST 请求体， （请求头信息有length）分段传输   路由中间件之前要加  请求体数据包收集中间件
    bodyParser  await 收集 == length next()
    1 next() 2

- node 做后端
    优点是 异步  与其他后端语言不一样  性能好， no blocking
    一台服务器， 上限是同时在线5000人，并发nginx/tomcat
    php/Java/Pathon  同步的  blocking 在sql请求（I/O）耗时任务中  占据线程
    node  异步的 有event loop 在sql请求（I/O）耗时任务中  进入event loop
    nginx/tomcat 线程就会被释放   不会阻塞  no blocking
    省掉很多服务器， 支持高并发
    java c++ 多线程
    node  单线程   跟法师一样脆服务器就会崩   所有用户都不响应  try catch
    pm2  进程管理工具 111