// 云函数入口文件
const cloud = require('wx-server-sdk')
 
cloud.init({
    env:'cloud1-0g6ikz47c348f678'
})
 
// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event);
  console.log(context);
  try {
    const result = await cloud.openapi.cloudbase.sendSms({
        
            "env":"cloud1-0g6ikz47c348f678",
            "phone_number_list":[
                "+86"+event.name
            ],
            "sms_type": "Marketing",
            "content":"发布了新的能力",
            "path":"/index.html",
            "use_short_name": true,
          
          
            // "content": ":)"
     
    })
    return result
  } catch (err) {
    return err
  }
}