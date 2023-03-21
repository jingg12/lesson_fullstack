<template>
  <div class="commend">
    <span >严选推荐</span>
  </div>
  <div class="container">
    <div  class="product-list">
      <Product  v-for="item in productList" :key="item.productId" :product="item"/>
      <!-- <img v-lazy="$filters.prefix(productList.item.imgUrl)" alt=""> -->
    </div>
  </div>
</template>

<script setup>
  import { onMounted, computed } from 'vue'
  // import axios from 'axios'
  import {  useHomeStore  } from '@/store/home.js'
  import Product from './Product.vue'

  const homeStore = useHomeStore();
  const productList = computed(() => homeStore.productList)
  onMounted(async () => {
    
    await homeStore.getProductList()
    // console.log(homeStore.categoryList,'111');
    
})
console.log(productList, '///');
</script>

<style lang="stylus" scoped>
.commend
  text-align center
  font-size 20px
  // font-weight 4px
  margin 10px 0 10px 0
.container
  margin 0px 10px 0 10px
  // width 100%
  .product-list
    display: flex
    flex-wrap wrap
    justify-content space-between
    // width 100%
    border-bottom 1px solid #e9e9e9
    // padding .266667rem
    &:nth-child(2n+1)
      border-right 1px solid #e9e9e9
</style>