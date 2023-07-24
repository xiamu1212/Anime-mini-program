// pages/zy/zy.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:['发现','精选','回归','端午福利','日更','免费','男生','西行纪','正青春','数字藏品'],
        menus:['回归限时福利','精品','综艺'],
        num:0,
        banners:[
          {
            src:'https://i0.hdslb.com/bfs/manga-static/1d1fda7a9d53115ebf266770ce716cbeb20b18ea.jpg@568w_319h.jpg',
            title:'我独自盗墓'
          },
          {
            src:'https://i0.hdslb.com/bfs/manga-static/f9a753f385b8ec1a4b1f87c2c4c8f018be0a6d14.jpg@568w_319h.jpg',
            title:'【天赐3】双胞胎兄妹的父皇是宠娃狂魔'
          },
          {
            src:'cloud://cloud1-1gxqkutx5934db79.636c-cloud1-1gxqkutx5934db79-1309747512/tx/01.jpg',
            title:'【完美世界】一战断怨，生死不悔'
          },
          {
            src:'https://i0.hdslb.com/bfs/manga-static/a8b8c16c9c4148623420fa529fd2d676b9693722.jpg@568w_319h.jpg',
            title:'【斗罗大陆·更新】为了复活我的爱人，出发'
          },
  
        ],
        bon:[
            {
                src:'cloud://cloud1-1gxqkutx5934db79.636c-cloud1-1gxqkutx5934db79-1309747512/zy/q1.jpg',
                title:'间谍过家家'
              },
              {
                src:'https://i0.hdslb.com/bfs/manga-static/965cdb5c83e0b2066b4b60973ba7f4242f592967.jpg@204w_272h.jpg',
                title:'夏日重现'
              },
              {
                src:'https://i0.hdslb.com/bfs/manga-static/32b6c26805e27403f11d563cada5f73b55fcbb91.jpg@204w_272h.jpg',
                title:'名侦探柯南'
              },
              {
                src:'https://i0.hdslb.com/bfs/manga-static/ac575cdf576bd5eb7775a5371d44e0809235bf20.jpg@204w_272h.jpg',
                title:'海贼王'
              }

        ],
          hots:[
            {
              src:'https://i0.hdslb.com/bfs/manga-static/2f9c71b3037506a293396f9fa14a8f3123a3be28.jpg@720w_360h.jpg',
              top:'镇魂街',
              des:'奇幻'
            },
          
            {
              src:'https://i0.hdslb.com/bfs/manga-static/abce6d068a4113dc6d084ea946891ca3afb02f92.jpg@720w_360h.jpg',
              top:'摇曳露营△',
              des:'都市'
            },
            {
              src:'https://i0.hdslb.com/bfs/manga-static/dec848f33de659de1393af899560fd4998706226.jpg@720w_360h.jpg',
              top:'五等分的新娘',
              des:'都市'
            },
            {
              src:'https://i0.hdslb.com/bfs/manga-static/c58607a6f102777fe34b5bfc448926c4d0389af0.jpg@720w_360h.jpg',
              top:'女神、异世界和变成砖头虫的我',
              des:'奇幻'
            },
          ]
          
    },
    change:function(e){
        this.setData({
            num:e.target.dataset.id
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
   
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})