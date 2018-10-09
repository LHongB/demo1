import api from "../../api/api.js"
// 关联app.js
var app = getApp();
// pages/new/new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     premise:'',
    //  swiper
    swiperCurrent:0,
    // 是否显示面板指示点
    indicatorDots:false,
    // 是否自动切换
    autoplay:false,
    // 自动切换时间间隔
    interval:5000,
    // 滑动动画时长
    duration:1000,
    detailData:{},
    sid:null,
    location:{},
    markers:[{}],
    sameCommunitySourceData: [],
    recommendSourceArray: [],
    isLogin: false
  },
  //  自定义转发内容
  // onShareAppMessage:function(){
  //    return{
  //      title:111111111,
  //      path:'/pages/new/new?id={{item.id}}'
  //    }
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data);
    console.log(options);
    console.log(app);
    api.getNewDetails({
      query: {
        id: options.id,
      },
      success: (res) => {
        console.log(res.data);
        let premise = res.data;
        this.setData({premise});   
        wx.setNavigationBarTitle({
          title: premise.name
        }) 
      }
    })  
  },
  swiperChange:function(e){
    console.log(e);
    console.log(this);
    this.setData({
      swiperCurrent: e.detail.current,
    })
  },
  more:function(e){
    // console.log(this);
    wx.navigateTo({
      url:'../more/more?' + '&source=' + JSON.stringify(this.data.premise)
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
    return{
       title:app.globalData.title,
       path:'/pages/new/new?id={{item.id}}'
    }
  }
})