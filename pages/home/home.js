// pages/home/home.js
import api from '../../api/api.js'
var app = getApp();
Page({
   
  /**
   * 页面的初始数据
   */
  data: {
     adfs:'',
     article:'',
     primese:'',
     id:14
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let cityId = this.data.id;
    api.getHomeAdfs({
      success:(res) => {
        // console.log(res.data);
        let adfs = res.data.rows;
        this.setData({ adfs })
        // console.log(this.data);
      }
    })
    api.getHomeArticle({
      success:(res) => {
        // console.log(res.data);
        let article = res.data.rows;
        this.setData({article})
      }
    })
    api.getHomeRec({
      query:{
        id:cityId
      },
      success:(res) => {
        console.log(res.data);
        let primese = res.data.commendPremises;
        this.setData({primese})
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: app.globalData.title
    }) 
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