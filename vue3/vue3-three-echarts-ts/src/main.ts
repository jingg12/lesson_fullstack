import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import './assets/styles/index.css'

createApp(App).mount('#app');

//适配  动态设置rem
//响应宽度的变化
// rem vw 实现等比列
// devicePixelRatio
(function(doc, win){
  const fn = () => {
    const docEl = doc.documentElement,
      clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
  };
  if (!doc.addEventListener) return;
  win.addEventListener('resize', fn);
  doc.addEventListener('DOMContentLoaded', fn);
})(document, window);