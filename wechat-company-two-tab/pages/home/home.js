// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHide: true,
    loadingText: "加载中"
  },
  callmeTap: function () {
    wx.makePhoneCall({
      phoneNumber: '19124020414'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
  }
})