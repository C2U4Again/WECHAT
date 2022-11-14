// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env:'cloud1-0g6ikz47c348f678'
  })

// 云函数入口函数
exports.main = async (event, context) => {
  const res = await cloud.cloudPay.unifiedOrder({
    "body" : event.body,//商品描述
    "outTradeNo" : event.outTradeNo,//订单号
    "spbillCreateIp" : "127.0.0.1",
    "subMchId" : "1632635385",//商户号
    "totalFee" : event.totalFee,//订单金额
    "envId": "cloud1-0g6ikz47c348f678",//云环境名称
    "tradeType":"JSAPI",//交易类型
    "functionName": "buy_pay_success"
  })
  return res
}