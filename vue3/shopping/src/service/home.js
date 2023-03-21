import axios from "./config.js"

const getSwiperList = () => {
  return axios.get('/swiperList')
}

const getCategoryList = () => {
  return axios.get('/categoryList')
}
const getProductList= () => {
  return axios.get('/productList')
}

export { getSwiperList , getCategoryList, getProductList}//, getCategoryList