Page({
  data: {
    title: '',
    floorstatus:'',
    //向模板传入数据
    list_index_items_tmpl: {
      items: [{"mprice":0,"maxpacks":100,"price":12800,"subcate":210,"remains":998,"type":1,"freight":0,"title":"V7702","imgs":["../../image/V7702.jpg"],"unit":"只","id":302,"quantity":"1"},{"mprice":0,"maxpacks":14,"price":1600,"subcate":410,"remains":14,"type":4,"freight":1000,"title":"红糖粉","imgs":["https://81.jpg"],"unit":"g","id":93,"quantity":"400"},{"mprice":0,"maxpacks":100,"price":4800,"subcate":202,"remains":5,"type":1,"freight":1000,"title":"极致Q弹肉丸子","imgs":["https:/fe3.png"],"unit":"g","id":69,"quantity":"300"}]
    }
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
