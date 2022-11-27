// pages/show/show.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swv: '3.0.3',
        clockShow: '',
        cateActive: 1,
        goShow: false,
        bg:'',
        bg1:'',
        bg2:'',
        title: '',
        cateArr:[
          
          {
            icon: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/reader-1713700-1453871.png',
            text: 'read'
          },
          {
            icon: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/minus-cart-3948767-3273899.png',
            text: 'shop'
          },
          {
            icon: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/education-1800793-1531481.png',
            text: 'think'
          },
          {
            icon: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/bagua-mirror-6535890-5478580.png',
            text: 'oracle'
          },
          {
            icon: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/order-food-3963618-3285509.png',
            text: 'order'
          },
       {
        icon: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/study-13-116035.png',
        text: 'study'
        },
        //   {
        //     icon: 'https://cdn.iconscout.com/icon/free/png-64/work-man-computer-working-office-workplace-desk-46472.png',
        //     text: 'work'
        //   },
        //   {
        //     icon: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/study-13-116035.png',
        //     text: 'write'
        //   },
        //   {
        //     icon: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/sports-53-98074.png',
        //     text: 'sport'
        //   },

        ],
        isPlay : false, // 控制音乐播放
        nowTime : '00:00', // 当前音乐播放时间
        value : 0, // 对应silder的value
        isPlayText : 'on' // 播放按钮显示文本
        
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

        // 监听背景音频播放进度更新事件
        wx.getBackgroundAudioManager().onTimeUpdate(() => {
            // var time = wx.getBackgroundAudioManager().currentTime;
            // var nowTime = this.ms(time);
            // this.setData({
                // nowTime : nowTime,
                // value : parseInt(time)
            // })
        });
        // 监听背景音频播放结束
        wx.getBackgroundAudioManager().onEnded(() => {
            this.setData({
                isPlay : false,
                isPlayText : 'on'
            })
        })
        if(wx.hideHomeButton){
            wx.hideHomeButton();
            }
    },


    // 控制播放
    /*     
        1、点击按钮时，对按钮进行取反，然后再赋值
        2、当音乐未播放时，按钮应该显示为：播放，当音乐正在播放时，按钮应该显示为：暂停
        3、每次点击按钮，都会调用musicPlay()方法，来让音乐暂停或播放
     */
    isPlay () {
        this.setData({
            isPlay : !this.data.isPlay,
        })
        if(this.data.isPlay){
            this.setData({
                isPlayText : 'off'
            })
        }else {
            this.setData({
                isPlayText : 'on'
            })
        }
        this.musicPlay(this.data.isPlay)
    },
    
    // 控制音乐播放暂停
    // 当被调用时，根据传进来的isPlay的值判断音乐播放或暂停
    musicPlay (isPlay) {
        if(this.data.isPlay){
            // 这里使用的全局数据isPlay，而不是传进来的参数
            // 最开始isPlay为flase，走不进来if，使用歌曲不会播放
            wx.getBackgroundAudioManager().title = '歌名';
            wx.getBackgroundAudioManager().src = 'http://music.163.com/song/media/outer/url?id=1901371645.mp3';
        }
        if(!isPlay) {
            // 音乐的暂停
            // console.log(!isPlay);
            wx.getBackgroundAudioManager().pause();
        }else {
            // 音乐的播放
            // console.log(isPlay);
            wx.getBackgroundAudioManager().play();
        }
    },
    slideChange(e){

        this.isPlay()
        var v = e.detail.value;
        this.setData({
            value : v
        })
        wx.getBackgroundAudioManager().seek(v)
        var app= getApp();
     
        app.globalData.fs=e.detail.value
         
        // // 设置背景透明度
        // var  opacity=(e.detail.value)/99
        // var str = "rgba(	220,20,60,"+ opacity +")"
        // var str1 = "rgba(	255,102,102,"+ opacity +")"
        // var str2 = "rgba(	255,204,153,"+ opacity +")"
        // app.globalData.bg=str
        // app.globalData.bg1=str1
        // app.globalData.bg2=str2
        this.setData({
            fs:app.globalData.fs,
            // bg: app.globalData.bg,
            // bg1:app.globalData.bg1,
            // bg2:app.globalData.bg2
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

    clickCate:function(e){
    
        this.setData({
          cateActive:e.currentTarget.dataset.index
        })
        
      },
      start:function(){
        
        this.setData({
          goShow:true,
          
        })
        if (this.data.goShow) {
            
            wx.navigateTo({
         
        
                url: '../show'+this.data.cateActive+'/show'+this.data.cateActive
                
              
                })
        }
        
      },
    
      onShareAppMessage: function () {
        return {
          title: 'myan.ltd',
          desc: 'design for excellence',
          path: '/pages/index/index'
        }
      },
})