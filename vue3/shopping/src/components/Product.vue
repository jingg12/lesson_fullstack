<template>
    <div class="product">
        <img :src="product.imgUrl">
        <div class="product-desc">
            <span  class="title" >{{product.name}}</span>
            <span class="price">￥{{ product.price }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    product: {
        type: Object,
        default: {}
    }
})
</script>

<style lang="stylus" scoped>
.product
    width 45%
    img
    // display block
        width 3.2rem
        margin 0 auto
    .product-desc
        text-align center
        font-size .37333rem
        padding .266667rem 0
        .title
            color #222333
        .price
            color green
</style>