// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    list:"hwllo"
  },
  onLoad: function(){
    var that = this;
    wx.request(
      {
        // url:"https://api.github.com/users",
        //http://jsonplaceholder.typicode.com/
        
        // url:"http://jsonplaceholder.typicode.com/albums",
        //url:"https://www.wanandroid.com/article/list/1/json",
        url:"https://api.github.com/users",
        headers:{
          'content-type':'application/json'
        },
        method:'GET',
        success:res=>{
            // console.log(Object.keys(res.data['0']));
            //console.log(res.data['0']);
            var array = Object.keys(res.data['0']);

            array.forEach(function(element) {
            console.log("<view class='item-container'>{{item./}}</view>".replace("/",element));
            });

            
          that.setData({
            list:res.data
          })

        }
        
      },

    );
    //<view wx:for="{{t}}" wx:key="key">{{item}}</view>
    
  }
})

