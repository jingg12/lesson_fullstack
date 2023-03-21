<script setup>
import { ref, onMounted, nextTick } from 'vue'

let count = ref(0)
// event loop事件  微任务
onMounted(() => {
  count.value++  // 内存里是同步的 -> vdom diff -> dom 更新异步（微任务）  1 异步的
  count.value++
  // promise 封装dom更新任务
  // promise  下一次dom更新完才会触发
  nextTick(() => {
    console.log(document.querySelector('.count').innerText); // ?  1 0
  })
})
</script>

<template>
  <div class="count">{{ count }}</div>
  <router-view v-slot="{Component}">
    <keep-alive>
      <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive"/>
  </router-view>
</template>

<style scoped>

</style>
