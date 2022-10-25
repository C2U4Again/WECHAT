
Page({
    data : {
        detail: 'detail0', // 锚点id
        height: 0,  // 屏幕的高度
    },
    
    onLoad(options) {
        var that = this;
        console.log(options.detail);
        this.setData({
            height: wx.getSystemInfoSync().windowHeight, // 获取屏幕高度
            detail: options.detail  // 获取跳转过来的锚点id
        })
    },

    onUnload(options) {

    },




    
})
  