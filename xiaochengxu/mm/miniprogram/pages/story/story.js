// pages/story/story.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
     list:[]
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
       var _this=this;
       const db = wx.cloud.database()
       db.collection('news').where({})
       .get({
         success:function(res){
           console.log(res.data)
           _this.setData({
             list:res.data
           })
         }
       })
    },
    del(e){
      console.log(e)
      var _this=this;
      const db =wx.cloud.database()
      db.collection('news').where({
        _id:e.currentTarget.dataset.id
      }).remove({
        success:function(){
          var t=_this.data.list;
          t.splice(e.currentTarget.dataset.index,1)
          _this.setData({
            list:t
          })
        }
      })
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