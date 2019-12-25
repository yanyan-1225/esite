// pages/bookcase/bookcase.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookcaseList:[],
    // bookcaseList:[
    //   { "imgSrc": "/images/01.jpg", "name": "三体:死神永生", "authorName": "刘慈欣"},
    //   { "imgSrc": "/images/02.jpg", "name": "人类简史", "authorName": "尤瓦尔·赫拉利" },
    //   { "imgSrc": "/images/03.jpg", "name": "徐三观卖血记", "authorName": "余华" }
    // ],
    bookcaseMiddle: [
      { "imageSrc": "/images/home/home_22.jpg", "name": "未来简史","authorName":"尤瓦尔·赫拉利" },
      { "imageSrc": "/images/home/home_24.jpg", "name": "自私的基因","authorName": "理查德·道金斯" },
      { "imageSrc": "/images/home/home_26.jpg", "name": "百年孤独", "authorName": "马尔克斯" },
      { "imageSrc": "/images/home/home_22.jpg", "name": "未来简史", "authorName": "尤瓦尔·赫拉利" },
      { "imageSrc": "/images/home/home_24.jpg", "name": "自私的基因", "authorName": "理查德·道金斯" },
      { "imageSrc": "/images/home/home_26.jpg", "name": "百年孤独", "authorName": "马尔克斯" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://wujunhui.xyz/getbooks',
      success: (res) => {
        this.setData({
          bookcaseList: res.data.splice(0,3),
        })
      }
    })
    // wx.request({
    //   url: 'https://wujunhui.xyz/getbooks',
    //   success: (res) => {
    //     this.setData({
    //       bookcaseList: res.data.splice(0, 6),
    //     })
    //   }
    // })
    
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