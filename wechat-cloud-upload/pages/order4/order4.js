

  const app = getApp()
  
  Page({
    data: {
     goodsList:[],
     bg:'',
     bg1:'',
     bg2:'',
    },
    
    onLoad() {

    },
    onShow(){
      var value = wx.getStorageSync('order_title')
      console.log(value)
      wx.cloud.database().collection('fixed_substeps').where({
        tag: value
      })
      .get()
      .then(res=>{
        
        this.setData({
          goodsList:res.data
        })
        console.log(res.data)
  
      })
    },
  
    

  

  
  })
  



