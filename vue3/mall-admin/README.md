# vue3 商城管理后台  Admin
    - mall 移动商城 
        用户用的  移动端
        vant + axios + 全家桶
        PDD pv 10亿＋ uv

- mall admin
    同事用(小编，运营)
    上架商品
    上架活动
    swiper 幻灯片的内容
    权限 同事

-  全家桶开发理解
- vite 是如何启动项目的 npm run dev  运行的流程
    1. package.json script 脚本
      dev development 开发阶段  src/
      build 开发完了，打包上线做准备 dist/
    2. vite 最快的工程化
       index.html 作为首页 3000  http-server
       启动起来
    3. src/main.js  作为单点入口文件
        vite 特别之处  script type=“module” js 支持es6的模块化
        实例忆 vue app
        并把App 组件挂载到#app节点上
    4. 基于模块依赖 代码组织起来
- redirect 细节
    1. localhost:3000/
        HTTP 请求响应式
        - index.html 已发送到浏览器并显示
        - App.vue 已挂载
    2. router
        / redirect
        302 /
        
        header + main.content
        导航 nav  App.vue + router-view 页面级别组件 

- 路由守卫
    1. 鉴权
        to + token + login meta
    2. document.tiitle + name 匹配的标题 utils  config.js
    3. layout 布局状态 login 不需要侧边栏
    4. 用户直接从非/进入， 分享点击\
        state.currentPath = to.path

- 表单组件
    el-form
    el-form-item
    el-input
    容器组件
    子组件 受控组件
    - label-position
    - :rules="state.rules" 在el-form 容器组件中统一设置
        数组 每个input的输入规则
    - :model="state.formData" 表单就为收集数据而来
    {
        "usename":,
        "password":
    }
    el-form-item prop="username"
        el-input v-model="state.formData.username"
    - ref="loginForm"
        el-form 组件也是对象 这个对象上的方法