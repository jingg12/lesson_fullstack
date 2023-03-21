<template>
  <div class="search">
    <van-search  value="{{ value }}" placeholder="请输入搜索关键词" shape="round" @click="gotosearch"/>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import router from "../router"
// const routes = useRouter();
const gotosearch = () => {
  router.push({
    path: "/search"
  })
}
</script>

<style lang="stylus" scoped>
.search
  position fixed
</style>