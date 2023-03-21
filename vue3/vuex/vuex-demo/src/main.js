import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'

const app = createApp(App)

app
    .use(store)  // install 去扩展vue的this  原型链上加一个$store 指向store
    .mount('#app')
