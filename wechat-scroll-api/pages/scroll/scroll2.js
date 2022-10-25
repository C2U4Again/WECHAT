// pages/scroll/scroll2.js
Page({

    /**
   * 页面的初始数据
   */
  data: {
    list: ['张三丰', '李四', '王五', '赵六'],
    scrollTop: 0
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    var index=0;
    setInterval(() => {
      index++;
      var list = _this.data.list;
      list.push('ceshi1');
      list.push('ceshi2');
      list.push('ceshi3');
      list.push('**********'+index);
      var top = _this.data.scrollTop + list.length * 60;
      //console.info(top);
      _this.setData({
        list: list,
        scrollTop: top
      });
    }, 2000);
  }
})