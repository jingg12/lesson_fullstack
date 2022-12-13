// index.js
// 获取应用实例
const app = getApp()

Page({
    tab:0,
    data: {
    commendData:[]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  selectTab(e) { 
    let tab = e.currentTarget.dataset.tab;
    this.setData({
      tab: tab
    })
  },
  onLoad(options) {
    wx.showLoading({
        title: '加载中...',
    });
    this.loadData();
  },
  loadData() {
    wx.request({
        url: 'https://www.fastmock.site/mock/905d399068edba20b937b05ede4aedc9/beers/api/huya',
        success: (res) => {
            if (res.statusCode === 200) {
                let {data} = res.data
                this.setData({
                    commendData: data
                })
                wx.hideLoading();
            }
        }
    })
  },
})
