var config = [
  /* 
  /image/course/x.jpg
  */

	{"id":1,"thumb":"https://tse1-mm.cn.bing.net/th/id/OIP-C.YeBPgYRNartTBATwYNhmNQHaE8?w=236&h=180&c=7&r=0&o=5&pid=1.7","name":"初中一年级"
	},
	{"id":2,"thumb":"https://tse1-mm.cn.bing.net/th/id/OIP-C.-_HTjT4YdeXKFJaol1oZZwHaE8?w=231&h=180&c=7&r=0&o=5&pid=1.7","name":"初中二年级"
	},
	{"id":3,"thumb":"https://tse2-mm.cn.bing.net/th/id/OIP-C.QzKao7Nnre4ADMEH0IXZjwAAAA?w=299&h=199&c=7&r=0&o=5&pid=1.7","name":"初中三年级"
	},
	{"id":4,"thumb":"https://tse2-mm.cn.bing.net/th/id/OIP-C.eMB4qJwHikffrez0tjCfwAHaFj?w=206&h=180&c=7&r=0&o=5&pid=1.7","name":"高中一年级"
	},
	{"id":5,"thumb":"https://tse2-mm.cn.bing.net/th/id/OIP-C.KwOzOUhRL0IhjuW5aR6uaAHaE8?w=232&h=180&c=7&r=0&o=5&pid=1.7","name":"高中二年级"
	},
	{"id":6,"thumb":"https://tse4-mm.cn.bing.net/th/id/OIP-C.wmFXF-UeN4U4gy7xFTlzjgHaFj?w=248&h=186&c=7&r=0&o=5&pid=1.7","name":"高中三年级"
	},
	{"id":7,"thumb":"https://tse2-mm.cn.bing.net/th/id/OIP-C.NWK09DkjCTbQvmR5da_P5AHaFj?w=222&h=180&c=7&r=0&o=5&pid=1.7","name":"高考冲刺班"
	},
	{"id":8,"thumb":"https://tse2-mm.cn.bing.net/th/id/OIP-C.NWK09DkjCTbQvmR5da_P5AHaFj?w=222&h=180&c=7&r=0&o=5&pid=1.7","name":"高考补习班"
	}
]
Page({
  data: {
    title: '',
	images: [
       '/image/16.jpg',//此处放入上课的教室
       '/image/17.jpg',
       '/image/18.jpg',
      ],
	 indicatorDots: true,
	 vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200
  },

  //事件处理函数
  onLoad: function (options) {
    
	this.setData({courses:config});
  }

})
