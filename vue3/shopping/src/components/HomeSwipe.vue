<template>
  <!-- 不要写的和原来产品一模一样  直接使用组件  简化 -->
  <van-swipe class="my-swiper" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in swiperList" :key="item.imgSrc" v-lazy="item" >
      <img :src="item.imgSrc" alt="" />
    </van-swipe-item>
  </van-swipe>

</template>

<script setup>
  import { onMounted, computed } from 'vue'
  import axios from 'axios'
  import {  useHomeStore  } from '@/store/home.js'
  const homeStore = useHomeStore();
  const swiperList = computed(() => homeStore.swiperList)
  onMounted(async () => {
    await homeStore.getSwiperList()
    // console.log(homeStore.swiperList,'111');
})
</script>

<style lang="stylus" scoped>
.my-swiper
  margin  2px 10px 2px 10px
  img
    width 100%
</style>