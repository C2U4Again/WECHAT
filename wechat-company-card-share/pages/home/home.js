// pages/index/card/card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carList: [{
      img: "../../image/zy.jpeg",
      name: "周也",
      wxid: "123467066632"
    }, {
      img: "../../image/zls.jpeg",
      name: "赵露思",
      wxid: "180857545421"
    }, {
      img: "https://img2.baidu.com/it/u=1163064339,2440644742&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1665939600&t=3d271001d6c5286ec0e2b5adab478227",
      name: "宋祖儿",
      wxid: "15186066632"
    }, {
      img: "https://img0.baidu.com/it/u=954334930,2262546935&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1665939600&t=0c935c037cf13e46780f14083d85a183",
      name: "王楚然",
      wxid: "15456782345"
    }]
  },
  // 复制和
  copyTBL: function (e) {
    let phone = e.target.dataset.wxid;
    wx.setClipboardData({
      data: phone,
      success: function (res) {
        wx.showToast({
          title: '内容已复制',
        })
        // self.setData({copyTip:true}),
        // wx.showModal({
        //   title: '提示',
        //   content: '复制成功',
        //   success: function (res) {
        //     if (res.confirm) {
        //       console.log('确定')
        //     } else if (res.cancel) {
        //       console.log('取消')
        //     }
        //   }
        // })
      }
    });
  },
  calling: function(e) {
    // console.log(Number(e.target.dataset.wxid)) 
    let phone =e.target.dataset.wxid;
    wx.makePhoneCall({    
      phoneNumber: phone,
          success: function() {
        wx.showToast({
          title: '拨打电话成功！',
        })        
      },
          fail: function() {
        wx.showToast({
          title: '拨打电话失败！',
          icon: "none"
        })    
      }  
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})