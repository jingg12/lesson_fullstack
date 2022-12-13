// app.js
// require 关键字
const WXAPI = require('apifm-wxapi'); // 第三方
console.log(WXAPI);
const { subDomain,merchantId } = require('config.js'); // 自建模块
console.log(subDomain);
App({
  onLaunch() {
    // 刚启动时
    // 初始化一下WXAPI
    // 文档
    WXAPI.init(subDomain);
    WXAPI.setMerchantId(merchantId)
    // 测试一下请求
    // 商品分类接口  异步的
    
  },
  globalData: {
    userInfo: null
  }
})
