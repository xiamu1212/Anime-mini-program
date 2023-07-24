// pages/add/add.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      list:[]
    },
    upload:function(){
      var _this=this;
      wx.chooseImage({
        count: 9,
        sizeType:['original','compressed'],
        sourceType:['album','camera'],
        success (res){
          const tempFilePaths = res.tempFilePaths
          console.log(tempFilePaths)
          for(var i=0;i<tempFilePaths.length;i++){
            wx.cloud.uploadFile({
              cloudPath:Math.random()+'.png',
              filePath:tempFilePaths[i],
              success:res => {
                //返回文件 ID
                console.log(res.fileID)
                var t=_this.data.list;
                t.push(res.fileID)
                _this.setData({
                  list:t
                })
              },
              fail:console.error
            })
          }
        }
      })
    },
    send:function(e){
      //获取当前客户端时间
      var d = new Date()
      console.log(e)
        const db = wx.cloud.database()
        var _this=this;
        db.collection('news').add({
          data:{
            con:e.detail.value.con,
            title:e.detail.value.title,
            urls:this.data.list,
            date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+'...'+d.getHours()+':'+d.getMinutes()+":"+d.getSeconds()
          },
          success:function(res){
            console.log(res)
            if(res){
              wx.switchTab({
                url: '/pages/story/story',
              })
            }
          }
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