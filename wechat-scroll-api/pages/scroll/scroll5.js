Page({
  /**
   * 处理单选框点击事件
   */
  data: {
    cartList:[
    {id:1,bookName:"《论语》",NameNo:"孔子",thumb:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage31.bookschina.com%2FBig%2F45%2F44%2F2081445.jpg&refer=http%3A%2F%2Fimage31.bookschina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668582550&t=4ff5e7d0ee6b2cb76d0f3604bb81ec6a",
        price:"200元/节" },
    
    {id:2,bookName:"《三体》",NameNo:"刘慈欣",thumb:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-6fbbd6e5b3ba24c424f39ee9b4bd0fde_qhd.jpg%3Fsource%3D57bbeac9&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668582994&t=5c5be69413e8773c96e7778666c0c487", price:"800元/节"},
    {id:3,bookName:"《心理学与灵魂》",NameNo:"兰克",thumb:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Fb151f8198618367adab4a440283a9cd4b31c87014f5e&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668586546&t=8b05e8a17beafc039a378d53b3e4cd20",
    price:"600元/节" },
    {id:4,bookName:"《小说》",NameNo:"冰心",thumb:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbnmppic.bookuu.com%2Fgoods%2F07%2F32%2F26%2F3451041-fm.jpg&refer=http%3A%2F%2Fbnmppic.bookuu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668587288&t=8a78576e370c78958baf535387a5d1ad",
    price:"300元/节" },
    {id:5,bookName:"《论语》",NameNo:"孔子",thumb:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage31.bookschina.com%2FBig%2F45%2F44%2F2081445.jpg&refer=http%3A%2F%2Fimage31.bookschina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668582550&t=4ff5e7d0ee6b2cb76d0f3604bb81ec6a",
    price:"200元/节" },

     {id:6,bookName:"《三体》",NameNo:"刘慈欣",thumb:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-6fbbd6e5b3ba24c424f39ee9b4bd0fde_qhd.jpg%3Fsource%3D57bbeac9&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668582994&t=5c5be69413e8773c96e7778666c0c487", price:"800元/节"},
     {id:7,bookName:"《心理学与灵魂》",NameNo:"兰克",thumb:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Fb151f8198618367adab4a440283a9cd4b31c87014f5e&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668586546&t=8b05e8a17beafc039a378d53b3e4cd20",
     price:"600元/节" },
     {id:8,bookName:"《小说》",NameNo:"冰心",thumb:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbnmppic.bookuu.com%2Fgoods%2F07%2F32%2F26%2F3451041-fm.jpg&refer=http%3A%2F%2Fbnmppic.bookuu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668587288&t=8a78576e370c78958baf535387a5d1ad",
       price:"300元/节" },
       
  ],
  },

  handleCheckbox(e) {
      console.log(e.currentTarget.dataset);
      // e.currentTarget.dataset.id
  }
})
