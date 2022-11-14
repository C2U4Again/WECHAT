// pages/book0/book0.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        infoList:[],
        fs:0,
       chap: 1, //显示隐藏,
       current_index:0,
       dataurl:'',
       origList:[],
       content:1,
       showView: true,
       showView1:true,
       bookID:[],
       abc:[],
       sum:'',//查询条数,
       total1:0,
       bg:'',
       bg1:'',
       bg2:'',
       uhide: 0
      
     
       
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that = this;
        var dataurl=options.dataurl
        var total1=options.total
        var bookID=20
        var num1=1;//wx.getStorageSync(key)，获取本地缓存
    
        var app= getApp();
     
        var fs=app.globalData.fs
        var bg=app.globalData.bg
         var bg1=app.globalData.bg1
        that.setData({
            current_index:1,
            dataurl:dataurl,
            bookID:bookID,
            total1:total1,
            fs:fs,
            bg:bg,
            bg1:bg1
  
        })
        //调用数据结束
        wx.request({
      
          url: dataurl,
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            that.data.origList = res.data;
            //console.log(that.data.origList);
            that.setData({
            infoList: res.data,
            origList:that.data.origList,
            lead2_id: wx.getStorageSync('lead2_id')
            
            })

            var co=that.data.lead2_id
            wx.pageScrollTo({
              duration: 0,
              selector:'#'+co
             
            })
         
          },
  
          fail:function(err)
          {
              console.log(err)
          }
      
            
        })
    },

    search:function (e) {

      var that = this;
      var Items = [];
  
  Items =  that.data.origList.filter((item)=>{

     
      if((item.join.indexOf(e.detail.value) != -1) || (item.name.indexOf(e.detail.value) != -1)){
      
       return item
          
      }
      else{
          return
      }
  })
   
   that.setData({
    infoList:Items
   })
   
},
ni(e){
  var co=e.currentTarget.dataset.letter
  
  this.setData({
    content: co,
    
  })
   
  wx.pageScrollTo({
    duration: 0,
    selector:'#'+co
   
  })
  wx.setStorage({//存储到本地
    key:"lead2_id",
    data:this.data.content
  })
  
    
    
 },
  
 // 显示隐藏目录
change: function (e) {
  var that = this;
  that.setData({
  showView: (!that.data.showView)
  })
 
  var l2=that.data.total1
  var abc1 = that.getchat(l2)
  that.setData({
  abc:abc1
  })
  
  },

  

  getchat(chat){
    var chatlist=[]
    for(var r=1;chat!=r-1;r++){
      chatlist.push(r)
       
    }
    return chatlist;
},

//点击切换隐藏和显示
toggleBtn: function (event) { 
  var that = this;
  that.setData({
    showView1: (!that.data.showView1)
    })
   
  var toggleBtnVal = that.data.uhide;
  var itemId = event.currentTarget.dataset.did; 
  if (toggleBtnVal == itemId) {
   that.setData({
   uhide: 0
   })
  } else {
   that.setData({
   uhide: itemId
   })
  } 
  
},



  
   
  
  
  
  
  
  
  
  
  
  
  
  
  
    onUnload() {
  
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
  
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
  
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
  
    }
  })
  
  