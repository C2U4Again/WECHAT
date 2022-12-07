const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // realUrl: '',
        openid: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    //options接受别的页面传来的数据
    onLoad: function (options) {
    },
    //登录函数
    doLogin: function(e){
        

      //  wx.cloud.callFunction({
      //     name: 'fixed_openid',
      //   }).then((resp) => {
      //     console.log(resp.result.openid)
      //     this.setData({
            
      //      openid: resp.result.openid
      //     });
          
         
      //  }).catch((e) => {
         
      //   });

        //获取用户输入的用户名和密码
        var me = this;
        var fromType = e.detail.value;
        var username = fromType.username;
        // console.log(username);
        var password = fromType.password;
        //判断密码和账号是否为空
        if (username.length == 0 || password.length == 0){
            wx.showToast({
              title: '账号或密码不能为空',
              icon:'none',
              duration:1500
            })
        }else{
            wx.showToast({
              title: '登录中...',
            })

            if (username === 'showme'){//判断用户名是否存在
                if (password !== 'resume') {  //判断密码是否正确
                  wx.showToast({
                    title: '密码错误！',
                    icon: 'error',
                    duration: 2500
                  })
                } else {
                  console.log('登陆成功！')
                  wx.showToast({
                    title: '登陆成功！！',
                    icon: 'success',
                    duration: 2500
                  })
                  wx.navigateTo({   //跳转首页
                    url: '../resume/resume',  //这里的URL是你登录完成后跳转的界面
                  })
                }
              }else{
                wx.showToast({
                  title: '无此用户名！',
                  icon: 'error',
                  duration: 2500
                })
              }



            
        }
        
    },
    //跳转注册页面函数
    goToRegist: function(e){
        wx.navigateTo({
          url: '../userRegist/userRegist',
        })
    }

})