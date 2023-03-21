<template>
    <div>
        clicked: {{ count }} times, count is   {{ eventOrOdd }}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">Increment if odd</button>
        <button @click="incrementAsynd">Increment async</button>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store  = useStore()
const count = computed(() => store.state.count)
const evenOrOdd = computed(() => store.getters.evenOrOdd)
const increment = () => store.dispatch('increment')
const decrement = () => store.dispatch('decrement')
const incrementIfOdd = () => store.dispatch('incrementIfOdd')
const incrementAsynd = () => store.dispatch('incrementAsynd')
</script>

<style lang="scss" scoped>

</style>