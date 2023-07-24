// pages/zc/zc.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      //小图标
     li:[
         {
        aaa:[
            {
              src:'cloud://cloud1-1gxqkutx5934db79.636c-cloud1-1gxqkutx5934db79-1309747512/zy/q4.jpg'
            },
            {
              src:'cloud://cloud1-1gxqkutx5934db79.636c-cloud1-1gxqkutx5934db79-1309747512/zy/q4.jpg'
            },
            {
              src:'cloud://cloud1-1gxqkutx5934db79.636c-cloud1-1gxqkutx5934db79-1309747512/zy/q4.jpg'
            },
            {
              src:'cloud://cloud1-1gxqkutx5934db79.636c-cloud1-1gxqkutx5934db79-1309747512/zy/q4.jpg'
            },
      ],
    }
 ]
},
change:function(e){
  this.setData({
      num:e.target.dataset.id
  })
},

// 输入框
zc:function(e){
  var flag=true;
  console.log(e)
//e.detail.Value.表单元素的name值
//用户名的判断
if(e.detail.value.user==''){
// 修改user的值
 this.setData({
          user:'用户名不能为空'
      })
       flag=false;
  }else{
    const db = wx.cloud.database()
    var _this=this;
    db.collection('QQ').where({
        user:e.detail.value.user
    })
    .get({
        success: function(res){
            
            if(res.data.length==0){
              console.log(res.data)
                _this.setData({
                    user:'go!go!'
                })
                if(flag){
                 const db = wx.cloud.database()
                 db.collection('QQ').add({
                     data: {
                         user:e.detail.value.user,
                         pass:e.detail.value.pass
                     },
                     success: function(res) {
                         console.log(res)
                     wx.navigateTo({
                       url: '/pages/dl/dl',
                     })
                     }
                 })
             }
            }else{
                _this.setData({
                    user:'哒咩'
                })
                flag=false
            }
        }
    })
  }
  //密码的判断
  if(e.detail.value.pass==''){
      //修改pass的值
     this.setData({
         pass:'密码不能为空'
     })
     flag=false
 }else{
     this.setData({
         pass:''
     })
 }
 
},


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      if(wx.getStorageSync('user')){
          wx.navigateTo({
            url: '/pages/zy/zy',
          })
      }
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