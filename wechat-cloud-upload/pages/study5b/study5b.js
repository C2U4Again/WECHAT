
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showUploadTip: false,
    haveGetOpenId: false,
    envId: '',
    openId: ''
  },

  onLoad(options) {
    this.setData({
      envId: options.envId
    });
  },

  getOpenId() {
    wx.showLoading({
      title: '',
    });
   wx.cloud.callFunction({
      name: 'fixed_openid',
    }).then((resp) => {
      console.log(resp.result.openid)
      this.setData({
        haveGetOpenId: true,
        openId: resp.result.openid
      });
      
     wx.hideLoading();
   }).catch((e) => {
      this.setData({
        showUploadTip: true
      });
     wx.hideLoading();
    });
  },

  

});