Page({
  data: {
    t:"hwllo"
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://120.78.78.211:8083',
      success: function (res2) {
        console.log("Express：")
        console.log(res2.data)
        that.setData({
          t:res2.data
       })

      }
    })
  },
})

/*
@server.js at node
http://120.78.78.211:8083



var express = require('express')
var app = express()
var comments = [
        {"c":"1","c2":"1.1","c3":"第一回 甄士隐梦幻识通灵 贾雨村风尘怀闺秀"},
        {"c":"2","c2":"1.2","c3":"此开卷第一回也．"}
]
app.listen(8083)
app.get('/',function(req,res) {
    res.json(comments)
})
console.log("http://127.0.0.1:8083")

*/