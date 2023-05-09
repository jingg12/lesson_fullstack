import { createStore } from 'vuex' //创建一个中央状态仓库， 单一状态数
import products from './modules/products'
import cart from './modules/cart'

export default createStore({
    modules: { //仓库里的状态比较多的话？模块化的存储
        products,
        cart
    }
})
