

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
      wx.cloud.database().collection('fixed_steps').get()
      .then(res=>{
        
        this.setData({
          goodsList:res.data
        })
        //console.log(res.data)
  
      })
    },
  
    
    goDetail: function (event) {
      var orderID=event.currentTarget.dataset.index;
      
      wx.setStorage({  key:"order_title",  data: orderID})
      
      wx.navigateTo({
        url: "../order4/order4"//add db here to map
      });
    },
  

  
  })
  



