
 // pages/show0/show0.js
 Page({

  /**
   * 页面的初始数据
   */
  data: {
      infoList: [],
      fs:0,
      origList:[],
      load:'加载中',
      bg:'',
      bg1:''
      

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
      this.setData({
          fs:fs,
          bg:bg,
          bg1:bg1
     })
      //调用数据结束
      wx.request({
    
        url: app.globalData.yun+'/json/book.json',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {

          
          
          that.data.origList = res.data;
          //console.log("success", res.data)
          that.setData({
          infoList: res.data,
          origList:  that.data.origList,
          load:"未找到，请重新输入"
          })
        },
        fail:function(err)
        {
            console.log(err)
        }
      })
  },

  aodi_click(event){
    
    
    // 获取wxml标签的data-current值，为了传本页面跳转id
    var bookID=event.currentTarget.dataset.current;
    var dataurl=event.currentTarget.dataset.durl;
    var total=event.currentTarget.dataset.total;
    //console.log(dataurl)
    // 调用函数，获取筛选后的数据，传入currentID
   
    // 给数据转为字符串格式，方便传输
    
    wx.navigateTo({
   
  
    url: '/pages/book0/book0?id=' + bookID + '&dataurl=' + dataurl+'&total=' + total 
  
    })

   

     
  },

  search:function (e) {

      var that = this;
   var Items = [];
  
  Items =  that.data.origList.filter((item)=>{

     
      if((item.bookName.indexOf(e.detail.value) != -1) || (item.NameNo.indexOf(e.detail.value) != -1)){
      
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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
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