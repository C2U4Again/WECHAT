

  const app = getApp()
  

  Page({
    data: {
     goodsList:[],
     bg:'',
     bg1:'',
     bg2:'',
     text: '',
     scrollTop: false,
    },
    //回到顶部
  
  goTop: function (e) {
    // 一键回到顶部
    if (wx.pageScrollTo) {
    
    wx.pageScrollTo({ scrollTop: 0 })
    
    } else {
    
    wx.showModal({
    
    title: '提示', content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    
    })
    } 
  },
    // 获取滚动条当前位置
    onPageScroll: function (e) {
    
      if (e.scrollTop > 200) {
      
        this.setData({
          scrollTop: true
        });
        
      } else {
      
        this.setData({
          scrollTop: false
        });
        
      }
    },

    clickMe:function(e){
        var nid = e.currentTarget.dataset.nid;
        console.log(nid);

        // 1:返回一个查询对象的实例
   const query=wx.createSelectorQuery();
   // 【point1】指的是要跳转的id选择器的元素
   // 2：在当前页面下查询指定id选择器的节点，获取节点信息
      query.select('#'+nid).boundingClientRect();
   // 3：可用于获取显示区域的尺寸，滚动位置等信息，然后添加节点的滚动位置查询请求
      query.selectViewport().scrollOffset();
   // 4：开始执行
      query.exec((res)=>{
        //res[0]是步骤2中的数据，res[1]是步骤3中的数据
         if(res[0] && res[1]){
        //5：将页面滚动到目标位置
           wx.pageScrollTo({
          //计算滚动到目标的位置
             scrollTop: res[0].top + res[1].scrollTop - 50,
             duration:300
           })
         }
      });
   
        },
        
    onLoad(options) {
        var json = JSON.parse(options.json)
 
        console.log(json)
      wx.cloud.database().collection(json.last).where({}).get({
        success: res => {
            
            this.setData({
                goodsList: res.data,
                text: json.name
            })
            console.log(this.data.goodsList);
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
      
    

  

  
  })
  



