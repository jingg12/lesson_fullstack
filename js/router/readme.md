#  网站的核心？
  1. 内容
    a

- 传统的网站开发
    - 使用MVVM  代替 DOM编程
       数据驱动的开发
    - 多个页面+ a  Multiple Page Application
       1. 每个页面都是重复的完整的html结构
       2. 用户体验不太好，需要优化
          每个页面请求的过程都是一次的请求响应过程
          完整的html 没有必要
          请求响应需要一个事件 页面需要白一下，页面加载慢
          有什么技术方案 去优化
          SPA Single Page Application
          单页应用开发思维
          ajax 不跳转页面 vue data
          -  SPA
          -  ajax  js动态的更新内容，后台去向服务器端通信，获取新的内容
               不用单纯的借助url 的切换， http 向服务器重新请求整个页面
