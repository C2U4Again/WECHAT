// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'cloud1-0g6ikz47c348f678'
})

// 云函数入口函数
exports.main = async (event, context) => {
  
  return await cloud.database().collection('fixed_orders').where({
    orderId:event.outTradeNo
  }).update({
    data:{
      status:1
    },
  }).then(res=>{
    return res
  }).catch(res=>{
    return res
  })


}