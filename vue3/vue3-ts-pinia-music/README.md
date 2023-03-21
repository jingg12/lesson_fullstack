#  五星网易云音乐
后端api

- mockjs 方便管理维护 丰富的api特性
- fastmock 易用
- json-sever 初学
- 第三方开源接口 比如netseacloudmusic
- node + mysql 全栈


- 大前端 vue3/react js, node js
    一门js打天下  学习成本低
    在前端项目中加入了backend
    后端项目中npm init vite 后端为主的全栈
    前后端分离
- 全栈
    node/Go

- 后端音乐接口在 http://localhost:3000

- 前端vue 单页应用SPA http://localhost:8888 
    domain -> ip -> 定位服务器
    端口 对应一个应用 -> 进程

- npm i @next/node
    node的类型声明文件
    - tsconfig.json 配置文件 alias
依赖 npm i @types/node 安装node的path模块

- 多级路由配置 children
    在vite.config.ts中配置： resolve:{ alias:{ '@':resolve(__dirname,'src') } }


- css准备工作

    1. stylus 
        cssc超集  变量  嵌套 混合等
        .style 先编译 css 再运行
        vite 会自动编译  比webpack 牛逼
    2. reset
    3. variable mixin 的全局引入
    4. iconfont