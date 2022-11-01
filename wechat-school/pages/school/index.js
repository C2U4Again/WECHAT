//index.js
//获取应用实例
var app = getApp()

Page( {
 

  calling: function () {
    wx.makePhoneCall({
      phoneNumber: 19124020414,
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },

  onLoad: function() {
    var that = this;
	

  }
})