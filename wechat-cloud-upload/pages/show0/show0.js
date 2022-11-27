

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
      wx.cloud.database().collection('fixed_reads').where({})
      .get()
      .then(res=>{
        console.log(res.data)
        this.setData({
          goodsList:res.data
        })
        
  
      })
    },
  
    read(event){
      //console.log(event.currentTarget)
      var orderID=event.currentTarget.dataset;
      
      wx.setStorage({  key: "book",  data: orderID})
      console.log(orderID)
      wx.navigateTo({
        url: "../book0/book0" //add db here to map
      });
    }

  

  })
  



