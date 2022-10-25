// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    t:"hwllo"
  },
  onLoad: function(){
    var that = this;
    wx.request({
      
        url:"http://120.77.205.222/t3.php",
       
        headers:{
          'content-type':'application/json'
        },
        method:'GET',
        success:res=>{
            
          that.setData({
            t:res.data
         })

        }
      })
    }
    
})

