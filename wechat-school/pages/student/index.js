Page({
  data: {
    title: '',
    floorstatus:''
    //向模板传入数据
    
  },
  
	
  //事件处理函数
  onLoad: function (options) {
    this.title = options.type || '师资力量'
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.title
    })
  },
    // 获取滚动条当前位置
    onPageScroll: function (e) {
      console.log(e)
      if (e.scrollTop > 100) {
        this.setData({
          floorstatus: true
        });
      } else {
        this.setData({
          floorstatus: false
        });
      }
    },
  
    //回到顶部
    goTop: function (e) {  // 一键回到顶部
      if (wx.pageScrollTo) {
        wx.pageScrollTo({
          scrollTop: 0
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
        })
      }
    }
  
})
