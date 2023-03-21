import { createApp } from 'vue'
// import './style.css'
import router from './router'
import './mock/index.js'
import App from './App.vue'

createApp(App)
    .use(router)
    .mount('#app')
