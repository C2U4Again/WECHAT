

  const app = getApp()

  const util = require('../../utils/util.js')
  
  Page({
    data: {
     goodsList:[],
     bg:'',
     bg1:'',
     bg2:'',
    },
    
    onLoad() {
      //console.log(Date.now())
      //console.log(Math.ceil(Math.random()*10))
      //console.log(Date.now() + '' + Math.ceil(Math.random()*10)+ '' + Math.ceil(Math.random()*10))
    },
    onShow(){
      wx.cloud.database().collection('fixed_goods').where({})
      .get()
      .then(res=>{
        
        this.setData({
          goodsList:res.data
        })
        //console.log(res.data)
  
      })
    },
  
    addOrder(event){
  
      console.log(event.currentTarget.dataset.index)
      let index = event.currentTarget.dataset.index
      let orderId = Date.now() + '' + Math.ceil(Math.random()*10)
      //添加订单（未支付）到订单数据库表
      wx.cloud.database().collection('fixed_orders').add({
        data: {
          orderId: orderId,
          goodMoney: this.data.goodsList[index].price,
          goodName: this.data.goodsList[index].title,
          goodNum: this.data.goodsList[index].num,
          goodId: this.data.goodsList[index]._id,
          status: 0, //0：未支付  。  1：已支付
          time: util.formatTime(new Date())
        }
      }).then(res=>{
  
        //调用统一下单云函数 请求参数
        console.log(res)
        this.setData({
          order_id: res._id
        })
        
        //console.log(this.data.goodsList[index].price)
        //支付操作
        wx.cloud.callFunction({
          name:'fixed_pay',
          data:{
            body: this.data.goodsList[index].title,
            outTradeNo:orderId,
            totalFee: this.data.goodsList[index].price * 100
          }
        }).then(res=>{
  
          console.log(res)
          //拉起支付
          this.pay(res.result.payment)
        })
  
      })
  
  
    },
    pay(payment){
      var that = this;
      wx.requestPayment({
        ...payment,
        success(res){
          console.log(res)
          //回调函数fixed_pay_success 更新订单的状态 将把status变成1
          
          
          wx.showToast({
            title: '支付成功',
          })
        },
        fail(res){
          //console.log(res)
          wx.showToast({
            icon:'none',
            title: '支付失败',
          })
        }
      })
    },

  
    qingxianyuedu(){
      wx.navigateTo({
      url: '/pages/detail/detail'   
      })
    },
  
    dingdanchaxun(){
      wx.navigateTo({
      url: '/pages/dingdan/dingdan'   
      })
    },
  })
  



