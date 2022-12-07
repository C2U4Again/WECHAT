

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
  
    read(e){

  var json = e.currentTarget.dataset;
  console.log(json)
      wx.navigateTo({
      url: '../book0/book0?json=' + JSON.stringify(json)//传递参数

      })
     
    }

  

  })
  



