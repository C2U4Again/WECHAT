

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
      wx.cloud.database().collection('fixed_jiyi').get()
      .then(res=>{
        //console.log(res.data)
        this.setData({
          goodsList:res.data
        })
        
  
      })
    },
  
    
    goDetail: function (event) {
      
      wx.navigateTo({
        url: this.data.goodsList[event.currentTarget.dataset.index].url//add db here to map
      });
    },
  

  
  })
  



