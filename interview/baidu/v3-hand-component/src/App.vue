<script setup>
import { ref } from 'vue'
import Input from './components/Input.vue'
const tel = ref('')
// 组件通信的角度  如何？
// tel 跟 input 组件双向绑定 而不是标签
// 父子组件之间的props 单向的  props ->
// 子组件  emit input 标签的传回来  修改tel
setTimeout(() => {
  tel.value = '138888888'
})
</script>

<template>
  {{ tel }}
  <!-- <Input :modelValue="tel" @update:modelValue="tel=$event"/> -->
  <Input v-model="tel" :disabled="true" placeholder="请输入手机号"/>
</template>

<style scoped>

</style>
