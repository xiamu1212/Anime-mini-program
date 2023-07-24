// pages/z2/z2.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      lists:[ {
        src:'cloud://cloud1-1gxqkutx5934db79.636c-cloud1-1gxqkutx5934db79-1309747512/tx/POMLPDCClx07Us66qbWg01041200Fp0c0E010.mp4'},
        {
          src:'cloud://cloud1-1gxqkutx5934db79.636c-cloud1-1gxqkutx5934db79-1309747512/tx/8uJVzN3ilx07UlyrKzIA01041200ZUzc0E010 - 副本.mp4'
        },
       
      ],
        
        list:['关注','推荐'],
        banners:[
            {
              src:'https://i0.hdslb.com/bfs/manga-static/5efbaa69b49a9422e937c43feef8104d2f3a106d.jpg@760w.jpg',
            
            },
            {
              src:'https://i0.hdslb.com/bfs/manga-static/8bd57f429bb03e2ba7554a8f0e46dc5d75d66e6c.png@760w.png',
            
            },
            {
              src:'https://i0.hdslb.com/bfs/manga-static/561a1fe360a9c0f2259ddb20b2c6222a535c3d3c.jpg@760w.jpg',
             
            },
            {
              src:'https://i0.hdslb.com/bfs/manga-static/2ac06f2d99aa9257dbf7254d392ba5273fdf4b63.jpg@760w.jpg',
             
            },
    
          ],
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
 //onload接受页面传递参数
 console.log(options)
 const db  = wx.cloud.database()
 var _this=this;
 //where查询条件
 db.collection('QQ').where({})
.get({
 success: function(res) {
   console.log(res.data)
   _this.setData({
     coms:res.data
   })
 }
})  
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