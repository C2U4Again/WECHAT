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
     bookID:0,
     abc:[],
     sum:'',//查询条数,
     total1:0,
     bg:'',
     bg1:'',
     bg2:'',
     num1:1,
     current1:0


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

   
      var that = this;

  
      var app= getApp();
     
      var fs=app.globalData.fs
      var bg=app.globalData.bg
       var bg1=app.globalData.bg1
      var dataurl=options.dataurl
      var total1=options.total
      var bookID=options.id
      
      // that.setData({

      //   current1: wx.getStorageSync('current')
      // })
        

      //     if(that.data.current1!==0){
                 
      //             that.setData({

      //               num1:that.data.current1
      //             })
      //     }else{
               
      //       that.setData({

      //         num1:1
      //       })
      //     }
      
      
      that.setData({
          current_index:that.data.num1,
          dataurl:dataurl,
          bookID:bookID,
          total1:total1,
          fs:fs,
          bg:bg,
          bg1:bg1

      })
      //调用数据结束
      wx.request({
    
        url: dataurl+that.data.current_index+'.json',
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          that.data.origList = res.data;
          var l=res.data.length
          var l2=Math.floor(res.data[l-1]["c2"])
             //var c1=20
             // console.log(c1)   
              var abc1 = that.getchat(l2)
              
         
          that.setData({
          infoList: res.data,
          origList:that.data.origList,
          abc:abc1
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


if((item.c2.indexOf(e.detail.value) != -1) || (item.c3.indexOf(e.detail.value) != -1)){

 return item

}

})
var chatsum=Items.length
that.setData({
infoList:Items,
sum:chatsum
})

},

// 跳转到每一章
ni(e){
  var that=this
  
  var co=e.currentTarget.dataset.letter
 
  that.setData({
    content: co,
    
  });
  wx.request({
      url: that.data.dataurl+that.data.content+'.json',
      success:function(res){
       that.data.origList = res.data;
        that.setData({

         infoList:res.data,
         origList:that.data.origList
        })

        wx.pageScrollTo({
          scrollTop: 0
        });
             
        // wx.setStorage({//存储到本地
        //   key:"current",
        //   data:that.data.content
        // })
      },
      fail:function(err)
      {
          console.log(err)
      }
    })
     
 },


// 每一章列表
getchat(chat){
  var chatlist=[]
  for(var r=1;chat!=r-1;r++){
    chatlist.push(r)
     
  }
  return chatlist;
},


// 显示隐藏目录
change: function (e) {
var that = this;
that.setData({
showView: (!that.data.showView)
})
// showView: (e.showView == "true" ? true : false)
var l2=that.data.total1
var abc1 = that.getchat(l2)
that.setData({
abc:abc1
})

},







  onUnload() {
//update json in backend
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

