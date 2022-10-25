Page({
 
    /**
     * 页面的初始数据
     */
    data: {
      toIndex:'',//跳转的索引,这哥们必须动态更改才可以使滑动生效
      letterArray: [   //默认获取的所有通讯录名片数据
        {
          id:0,
          latter: 'A',
          datas: [
            {
              id: 0,
              img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1570457170,3487092162&fm=26&gp=0.jpg',
              name: '俺不知道',
              time: '2018-05-14',
              note: ['医疗服务1', '信息系统', '新闻资讯1'],
              company: '优派世纪咨询(北京)有限公司',
              catio: '已认证',
              latter: 'A',
            }
          ]
        }, {
          id: 1,
          latter: 'B',
          datas: [
            {
              id: 0,
              img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1570457170,3487092162&fm=26&gp=0.jpg',
              name: '波澜',
              time: '2018-05-14',
              note: ['医疗服务222', '信息系统', '新闻资讯'],
              company: '优派世纪咨询(北京)有限公司',
              catio: '已认证',
              latter: 'B'
            }, {
              id: 1,
              img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1570457170,3487092162&fm=26&gp=0.jpg',
              name: '霸王',
              time: '2018-05-14',
              note: ['医疗服务', '信息系统333', '新闻资讯444'],
              company: '优派世纪咨询(北京)有限公司',
              catio: '已认证',
              latter: 'B'
            }
          ]
        }, {
          id: 2,
          latter: 'C',
          datas: [
            {
              id: 0,
              img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1570457170,3487092162&fm=26&gp=0.jpg',
              name: '茶叶',
              time: '2018-05-14',
              note: ['医疗服务', '信息系统', '新闻资讯'],
              company: '优派世纪咨询(北京)有限公司',
              catio: '已认证',
              latter: 'C'
            }
          ]
        },{
          id: 3,
          latter:'M',
          datas:[
            {
              id: 0,
              img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1570457170,3487092162&fm=26&gp=0.jpg',
              name: '魔鬼',
              time: '2018-05-14',
              note: ['医疗服务2222', '信息系统', '新闻资讯'],
              company: '优派世纪咨询(北京)有限公司',
              catio: '已认证',
              latter: 'M'
            }, {
              id: 1,
              img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1570457170,3487092162&fm=26&gp=0.jpg',
              name: '码云',
              time: '2018-05-14',
              note: ['医疗服务', '信息系统333', '新闻资讯'],
              company: '优派世纪咨询(北京)有限公司',
              catio: '已认证',
              latter: 'M'
            }, {
              id: 2,
              img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1570457170,3487092162&fm=26&gp=0.jpg',
              name: '妈妈',
              time: '2018-05-14',
              note: ['医疗服务', '信息系统', '新闻资讯444'],
              company: '优派世纪咨询(北京)有限公司',
              catio: '已认证',
              latter: 'M'
            },
            {
              id: 3,
              img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1570457170,3487092162&fm=26&gp=0.jpg',
              name: '蘑菇街',
              time: '2018-05-14',
              note: ['医疗服务4444', '信息系统', '新闻资讯'],
              company: '优派世纪咨询(北京)有限公司',
              catio: '已认证',
              latter: 'M'
            }, {
              id: 4,
              img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1570457170,3487092162&fm=26&gp=0.jpg',
              name: '梦梦',
              time: '2018-05-14',
              note: ['医疗服务', '信息系统4444', '新闻资讯'],
              company: '优派世纪咨询(北京)有限公司',
              catio: '已认证',
              latter: 'M'
            }
          ]
        }
      ],
      cardData:[],//展示的名片通讯录数据
      letter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      viewHeg:544
    },
   
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      const that = this;
   
      // 获取默认数据
      that.setData({
        cardData : that.data.letterArray
      })
    },
   
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
   
    },
   
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
   
    },
   
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
   
    },
   
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
   
    },
   
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
   
    },
   
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
   
    },
   
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
   
    },
    // 点击字母
    clickLetter:function(e){
      console.log("打印",e);
      var that=this;
      var letter = e.currentTarget.dataset.letter;
      wx.showToast({
        title: letter,
        icon: 'none',
        duration: 2000
      })
      // 滚动跳转位置
      that.setData({
        toIndex: letter
      })
    }
  })