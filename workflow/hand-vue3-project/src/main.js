// console.log('hello world');
// import App from './App.vue'; // 引入App.vue   但是 .vue文件无法识别
import { createApp } from 'vue' //依赖关系打理
import App from './App.vue'
import './assets/a.png' // 一切静态资源都能打包
const app = createApp(App)
app.mount('#root')
// const root = document.getElementById('root');
// root.textContent = '你是哪个？'