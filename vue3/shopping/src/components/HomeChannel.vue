<template>
  <div class="category-list">
    <div  class="Img" v-for="item in categoryList" :key="item.categoryId">
      <img  class="img1" :src="item.imgUrl">
      <span class="img2">{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, computed } from 'vue'
  import axios from 'axios'
  import {  useHomeStore  } from '@/store/home.js'
  const homeStore = useHomeStore();
  const categoryList = computed(() => homeStore.categoryList)
  onMounted(async () => {
    
    await homeStore.getCategoryList()
    // console.log(homeStore.categoryList,'111');
    
})
</script>

<style lang= "stylus" scoped>
.category-list
  display flex
  flex-wrap wrap
  justify-content space-between
  background-color #f6f6f6
  margin 2px 10px 2px 10px
  .Img
    display flex
    flex-direction column
    justify-content center
    align-items center
    .img1
      width 50px /* 40/37.5 */
      height 50px /* 40/37.5 */
      margin 0 10px
      
    .img2
      font-size 14px /* 14/37.5 */
</style>