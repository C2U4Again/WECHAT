Page({

    data: {
        goodsList: [], //要赋的值
        //shanghu: 'olB8V4wWjTvl6mPD9jLSyDm4pTEg', //default to compare
        shanghu: 'cantsee',
        openid: ''
      },

    onShow() {
        wx.cloud.callFunction({
            name: 'fixed_openid',
          }).then((resp) => {
            this.setData({
              
                openid: resp.result.openid
            });
           wx.hideLoading();
         })
    },


    shujuku() {
     

          if(this.data.openid === this.data.shanghu){
            wx.showToast({
                icon: 'none',
                title: '已获得管理员权限'
               })
               this.calllocal();
          } else {
            wx.showToast({
                icon: 'none',
                title: '不具备管理员权限'
               })

          }
    },
     
    calllocal(){


      wx.cloud.database().collection("fixed_orders").where({}).get({
        success: res => {
            
            this.setData({
                goodsList: res.data//JSON.stringify(res.data, null, 2)
            })
            //console.log(this.data.goodsList);
            //console.log('[数据库] [查询记录] 成功: ', res)
            },
            fail: err => {
                wx.showToast({
                    icon: 'none',
                    title: '本地获取数据失败'
                   })
            //console.error('[数据库] [查询记录] 失败：', err)
            }
      })
      
    },
    callyun(){
      wx.cloud.callFunction({
        name:"buy_fixed_order",
        success(res) {
          console.log("云函数获取数据成功！", res)
        },
        fail(res) {
          console.log("云函数获取数据失败！", res)
        }
      })
    }
  })
  