// index.js
Page({
 
    enter() {

        // ========= 可跳转到tabbar页面（底部菜单导航）
        wx.switchTab({
          url: 'url',
        })({
            url: '../show/show',
            
          })
    }
})



