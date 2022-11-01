//index.js
//获取应用实例
var config = [
	{"id":1,"adthumb":"https://tse4-mm.cn.bing.net/th/id/OIP-C.9cMJAz3DghDlCJZOM6gPWAHaEo?w=237&h=180&c=7&r=0&o=5&pid=1.7","name":"初中一年级","detail":"语文\n数学\n英语","course":[
    {"name":"书本费","price":"210元/年"},{"name":"食杂费","price":"210元/年"},{"name":"教学费","price":"21000元/年"}]
    
	},
	{"id":2,"adthumb":"https://tse4-mm.cn.bing.net/th/id/OIP-C.9cMJAz3DghDlCJZOM6gPWAHaEo?w=237&h=180&c=7&r=0&o=5&pid=1.7","name":"初中二年级","detail":"这里是详情222222","course":[
		{"name":"书本费","price":"210元/年"},{"name":"食杂费","price":"210元/年"},{"name":"教学费","price":"21000元/年"}]
  },
  {"id":3,"adthumb":"https://tse4-mm.cn.bing.net/th/id/OIP-C.9cMJAz3DghDlCJZOM6gPWAHaEo?w=237&h=180&c=7&r=0&o=5&pid=1.7","name":"初中三年级","detail":"语文\n数学\n英语","course":[
    {"name":"书本费","price":"210元/年"},{"name":"食杂费","price":"210元/年"},{"name":"教学费","price":"21000元/年"}]
    
  },
  {"id":4,"adthumb":"https://tse4-mm.cn.bing.net/th/id/OIP-C.9cMJAz3DghDlCJZOM6gPWAHaEo?w=237&h=180&c=7&r=0&o=5&pid=1.7","name":"高中一年级","detail":"语文\n数学\n英语","course":[
    {"name":"书本费","price":"210元/年"},{"name":"食杂费","price":"210元/年"},{"name":"教学费","price":"21000元/年"}]
    
  },
  {"id":5,"adthumb":"https://tse4-mm.cn.bing.net/th/id/OIP-C.9cMJAz3DghDlCJZOM6gPWAHaEo?w=237&h=180&c=7&r=0&o=5&pid=1.7","name":"高中二年级","detail":"语文\n数学\n英语","course":[
    {"name":"书本费","price":"210元/年"},{"name":"食杂费","price":"210元/年"},{"name":"教学费","price":"21000元/年"}]
    
  },
  {"id":6,"adthumb":"https://tse4-mm.cn.bing.net/th/id/OIP-C.9cMJAz3DghDlCJZOM6gPWAHaEo?w=237&h=180&c=7&r=0&o=5&pid=1.7","name":"高中三年级","detail":"语文\n数学\n英语","course":[
    {"name":"书本费","price":"210元/年"},{"name":"食杂费","price":"210元/年"},{"name":"教学费","price":"21000元/年"}]
    
  },
  {"id":7,"adthumb":"https://tse4-mm.cn.bing.net/th/id/OIP-C.9cMJAz3DghDlCJZOM6gPWAHaEo?w=237&h=180&c=7&r=0&o=5&pid=1.7","name":"高考冲刺班","detail":"语文\n数学\n英语","course":[
    {"name":"书本费","price":"210元/年"},{"name":"食杂费","price":"210元/年"},{"name":"教学费","price":"21000元/年"}]
    
  },
  {"id":8,"adthumb":"https://tse4-mm.cn.bing.net/th/id/OIP-C.9cMJAz3DghDlCJZOM6gPWAHaEo?w=237&h=180&c=7&r=0&o=5&pid=1.7","name":"高考补习班","detail":"语文\n数学\n英语","course":[
    {"name":"书本费","price":"210元/年"},{"name":"食杂费","price":"210元/年"},{"name":"教学费","price":"21000元/年"}]
    
	}
]
var app = getApp()
Page( {
 
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },


  onLoad: function(options) {
    var that = this;
	that.setData({course:config[options.id-1]});

}})