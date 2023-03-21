<template>
    <div :style="fontstyle">
        <div class="rate" @mouseout="mouseOut">
            <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
let props = defineProps({
    value: Number,
    theme: {
        type: String,
        default: 'orange'
    }
})
const mouseOut = () => {}
const themeObj = {
    'black': '#000',
    'white': '#fff',
    'red': '#f5222d',
    'orange': '#fa541c',
    'yellow': '#fadb14',
    'green': '#73d13d',
    'blue': '#40a9ff'
}
const fontstyle = computed(() => {
    return `color:${themeObj[props.theme]}`
})
</script>

<style scoped>
.rate {
    position:relative;
    display:inline-block;
}

</style>