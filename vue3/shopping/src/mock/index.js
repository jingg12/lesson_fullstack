import Mock from 'mockjs'
import swiperList from './data/swiperList'
import categoryList from './data/categoryList'
import productList from './data/productList'

// - 假接口满足什么? 数据 url
Mock.setup({
    timeout: '50-1000' // 随机的延迟时间, 模式请求耗时
})
// 轮播图 url /swiperList
Mock.mock(/\/swiperList/, 'get', () => {
    return {
      code: 0,
      result: swiperList
    }
})

Mock.mock(/\/categoryList/, 'get', () => {
    return {
      code: 0,
      result: categoryList
    }
})
// 假冒的是服务器
Mock.mock(/\/productList/, 'get', () => {
    return {
      code: 0,  // 没有错误发生
      // code: 1,
      // msg: '服务器出错了' 
      result: productList
    }
})
