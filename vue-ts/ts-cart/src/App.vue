<script setup lang="ts">
// import { computed } from 'vue'
// import { useProductsStore } from './store/products'
// const productsStore = useProductsStore()

// const all = computed(() => productsStore.state.all)
// productsStore.loadAllProducts();
// setTimeout(() => {
//   console.log(all, '//////')  
// }, 2000);

import ProductsList from './components/ProductList.vue'
import Cart from './components/Cart.vue'
</script>

<template>
  <h1>购物车</h1>
  <hr>
  <h1>商品列表</h1>
  <ProductsList />
  <hr>
  <Cart />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
