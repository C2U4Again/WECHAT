

  const app = getApp()

  const util = require('../../utils/util.js')
  
  Page({
    data: {
     goodsList:[],
     bg:'',
     bg1:'',
     bg2:'',
     completed: false,  // 弹窗控制
     user: '',
     deposit: '0',  // 存储用户输入的内容
     index: 0
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
  


    modalinput(event) {
      let index = event.currentTarget.dataset.index
      //console.log(this.data.goodsList[index])
      this.setData({
        index: index,
        completed: !this.data.completed
      })
    },  

 
  // 获取用户输入的内容
  getUserPhone(event) {
    const money = event.detail.value || event.detail.text
    console.log(money)
    this.setData({deposit: money})
  },

  getUserName(event) {
    const name = event.detail.value || event.detail.text
    this.setData({user: name})
    console.log(name)
  },
 
  // 取消按钮触发事件
  cancelSelected(event) {
    this.setData({completed: false})
    
  },
 
  // 确定按钮触发事件
  successSelected(event) {
    if (!(/(^[0-9]*$)/.test(this.data.deposit))) {
      wx.showToast({
        title: '只能输入纯数字',
        icon: 'none',
        duration: 2000
      })
    } else {
      this.setData({completed: false});
      this.addOrder(this.data.index);
    }
  },


     addOrder(index){
  
      
      
       //console.log(this.data.goodsList[index])
      let orderId = Date.now() + '' + Math.ceil(Math.random()*10)
      //添加订单（未支付）到订单数据库表
      wx.cloud.database().collection('fixed_orders').add({
        data: {
          orderId: orderId,
          goodMoney: this.data.goodsList[index].price,
          goodName: this.data.goodsList[index].title,
          goodNum: this.data.goodsList[index].num,
          goodId: this.data.goodsList[index]._id,
          phone: this.data.deposit,
          name: this.data.user,
          //deviceInfo: this.data.goodsList[index].deviceInfo,
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

    
    huifanginput(event) {
      let index = event.currentTarget.dataset.index
      //console.log(this.data.goodsList[index])
      this.setData({
        index: index,
        completed: !this.data.completed
      })
    },  

    gethuifangPhone(event) {
      const money = event.detail.value || event.detail.text
      
      this.setData({deposit: money})
      console.log(money)
    },
  
    gethuifangName(event) {
      const name = event.detail.value || event.detail.text
      this.setData({user: name})
      console.log(name)
    },

    cancelhuifang(event) {
      this.setData({completed: false})
      
    },
   
    // 确定按钮触发事件
    successhuifang(event) {
      if (!(/(^[0-9]*$)/.test(this.data.deposit))) {
        wx.showToast({
          title: '只能输入纯数字',
          icon: 'none',
          duration: 2000
        })
      } else {
        this.setData({completed: false});
        console.log(this.data.deposit)
        let phone = this.data.deposit
        //let phone=['19124020414','13834591886']
        //for(let i=0;i<phone.length;i++){
          wx.cloud.callFunction({
            name:"sendSms",    //这个名字要跟上传并部署的那个文件名一样
            data:{
              name:phone
              //name:phone[i]
              //cost => 50 == 1000条
            }
          }).then(res=>{
                console.log("发送成功",res);
          }).catch(err=>{
              console.log("发送失败",err);
          })
    

        //}  
      }
    },

    
  
  })
  



