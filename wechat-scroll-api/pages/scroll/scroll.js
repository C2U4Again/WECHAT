Page({
    data: {
    //当前离顶部滚动的距离
    top: 0,
    },
    // 监听滚动事件 scrollTop 滚动的距离
    onPageScroll: function (e) { // 获取滚动条当前位置
    // console.log(e)
    this.setData({
    top: e.scrollTop
    })
    if (e.scrollTop > this.data.tabScrollTop) {
    this.setData({
    tabFixed: true
    })
    // console.log("我锁定了")
    } else {
    this.setData({
    tabFixed: false
    })
    }
    },
    //点击跳转到板块一
    toblock1: function () {
    wx.pageScrollTo({
    /*
    *多减50是因为我的导航是悬浮的，会挡住部分内容
    *这里是1等于2rpx
    */
    scrollTop: this.data.block1_ScrollTop - 50
    })
    },
    //点击跳转到板块二
    toblock2: function () {
    wx.pageScrollTo({
    scrollTop: this.data.block2_ScrollTop - 50
    })
    },
    //点击跳转到板块三
    toblock3: function () {
    wx.pageScrollTo({
    scrollTop: this.data.block3_ScrollTop - 50
    })
    },
    onLoad: function (options) {
    let that = this
    // 高度自适应
    wx.getSystemInfo({
    success: function (res) {
    var clientHeight = 
    res.windowHeight,
     clientWidth = res.windowWidth,
     rpxR = 750 / clientWidth;
    var calc = clientHeight * rpxR;
    that.setData({
     winHeight: calc
    });
    }
    });
    var query = wx.createSelectorQuery()
    //获取顶部的距离
    query.select('#tab-con').boundingClientRect(function (res) {
    var top = res.top;
    if (top == null) {
    var top = 0;
    }
    that.setData({
    tabScrollTop: top
    })
    }).exec()
    //获取板块一离顶部的距离
    query.select('#block_1').boundingClientRect(function (res) {
    that.setData({
    block_1ScrollTop: res.top
    })
    }).exec()
    //获取板块二离顶部的距离
    query.select('#block_2').boundingClientRect(function (res) {
    that.setData({
    block2_ScrollTop: res.top
    })
    }).exec()
    //获取板块三离顶部的距离
    query.select('#block_3').boundingClientRect(function (res) {
    that.setData({
    block3_ScrollTop: res.top
    })
    }).exec()
    },
   })