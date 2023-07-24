// pages/z4/z4.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:['动漫','动画','小说',' ',' ',' ',' ',' ',' ','','','','编辑'],
        list1:['最近收藏','最近更新','最近在追'],
        num:0,
        lists:[
         
        
             {
              //  title:'三分屏',
               hots:[
                 {
                   src:'https://i0.hdslb.com/bfs/manga-static/a89fd50845db680951846c2bcae13d6a10198fa2.jpg@360w_480h.jpg',
                   top:'我独自盗墓',
                   des:'都市'
                 },
               
                 {
                   src:'https://i0.hdslb.com/bfs/manga-static/7e5630da3495c1a80d8072d4e2950df6871154a4.jpg@360w_480h.jpg',
                   top:'双胞胎兄妹的父皇是宠娃狂魔',
                   des:'西幻'
                 },
                 {
                   src:'https://i0.hdslb.com/bfs/manga-static/41dfc4b453e8c4cdffe0fb3e3ccb77e1fc8c301f.jpg@360w_480h.jpg',
                   top:'爷就是开挂少女',
                   des:'古风'
                 },
                
               ]
             },
             {
              //  title:'三分屏',
               hots:[
                 {
                   src:'https://i0.hdslb.com/bfs/manga-static/719df41d160e67dfc2e46feff56bbfb107ccebc0.jpg@360w_480h.jpg',
                   top:'从1级开始的异世界骑士',
                   des:'热血'
                 },
               
                 {
                   src:'https://i0.hdslb.com/bfs/manga-static/d1cdc8b52e8e0cafb1e301ec0549200be5c3bded.jpg@360w_480h.jpg',
                   top:'骷髅奶爸',
                   des:'西幻'
                 },
                 {
                   src:'https://i0.hdslb.com/bfs/manga-static/7772f5cb1373f95c5a04e576b72ba64c3b7d2dba.jpg@360w_480h.jpg',
                   top:'修罗武神',
                   des:'玄幻'
                 },
                
               ]
             },
             {
              //  title:'三分屏',
               hots:[
                 {
                   src:'https://i0.hdslb.com/bfs/manga-static/6258f9cfa480955558122d68347db1606441109a.jpg@360w_480h.jpg',
                   top:'垃圾堆里的皇女',
                   des:'西幻'
                 },
               
                 {
                   src:'https://i0.hdslb.com/bfs/manga-static/feaf1f6e433cffcb0edc6d3d8e9c21d3714d045c.jpg@360w_480h.jpg',
                   top:'无法升级的玩家',
                   des:'都市'
                 },
                 {
                   src:'https://i0.hdslb.com/bfs/manga-static/5a54b54eefd58e61f092d850c42f189539b16835.jpg@360w_480h.jpg',
                   top:'AISHA',
                   des:'悬疑'
                 },
                
               ]
             },
             {
              //  title:'三分屏',
               hots:[
                 {
                   src:'https://i0.hdslb.com/bfs/manga-static/f29aba32b65f6c640809af525330b694cdd692b9.jpg@360w_480h.jpg',
                   top:'最强王者',
                   des:'游戏竞技'
                 },
               
                 {
                   src:'https://i0.hdslb.com/bfs/manga-static/3764177cda484b09624326d9e45f7a7f360ed1d7.jpg@360w_480h.jpg',
                   top:'桃花照玉案',
                   des:'古风'
                 },
                 {
                   src:'https://i0.hdslb.com/bfs/manga-static/6f0784f98a50e302d75776b58382bfb445c13326.jpg@360w_480h.jpg',
                   top:'关于我写的同人被正主发现了这件事',
                   des:'西幻'
                 },
                
               ]
             },
             {
              //  title:'三分屏',
               hots:[
                 {
                   src:'https://i0.hdslb.com/bfs/manga-static/f6319decf0a312d0e348b8d8a3ba3b1b31621168.jpg@360w_480h.jpg',
                   top:'归还者的魔法要特别',
                   des:'奇幻'
                 },
               
                 {
                   src:'https://i0.hdslb.com/bfs/manga-static/4661cf7db31f93bef0bf57445faa1617af25049d.jpg@360w_480h.jpg',
                   top:'放开那个女巫',
                   des:'奇幻'
                 },
                 {
                   src:'https://i0.hdslb.com/bfs/manga-static/0527585e03073ccae121c30662a356bd90031815.jpg@360w_480h.jpg',
                   top:'这个姐姐不太正常',
                   des:'现代'
                 },
                
               ]
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