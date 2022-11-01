//index.js
//获取应用实例
var app = getApp();

Page( {
  data: {
    //向模板传入数据
    // 轮播
      images: [
       '/image/4.jpg',
       '/image/5.jpg',
       '/image/6.jpg',
       
      ],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200,
      navs: [
        {
		  url:'/pages/school/index',
          image: '/image/i1.png',
          text: '深圳中学\nSchool'
        }, {
	      url:'/pages/strength/index',
          image: '/image/i2.png',
          text: '师资力量\nTeacher'
        }, {
		  url:'/pages/student/index',
          image: '/image/i3.png',
          text: '学生风采\nStudent'
        }, {
		  url:'/pages/life/index',
          image: '/image/i4.png',
          text: '后勤展示\nLife&nbsp;'
        }
      ],
      images2: [
       '/image/10.jpg',
       '/image/8.jpg',
       '/image/9.jpg',
       ],
  },
  gotopage:function(event){
	 wx.navigateTo({url:event.currentTarget.dataset.hi}); 
  },
  moreurl:function(){
	 wx.reLaunch({url:"/pages/list/index"}); 
  },

  onLoad: function() {
    var that = this;

  },

  onShareAppMessage: function () {
    return {
      title: '深圳中学',
      desc: '教育的希望，深圳的未来',
      path: '/page/index/index'
    }
  }

})
