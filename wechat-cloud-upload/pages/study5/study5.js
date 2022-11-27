Page({
    data: {
      text: '' //要赋的值
    },
    // 调用事件方法
    platenumSuccess: function (e) {
      console.log('识别数据的内容', e);
      // 赋值操作
      this.setData({
        text: e.detail.number.text
      })
    },
  })
  