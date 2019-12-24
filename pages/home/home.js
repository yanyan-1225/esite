// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    inputValue: '',
    btns: [{
      message: '2018排行榜',
      color:"#f54d82",


    }, {
        message: '职场热门',
        color:"#4c906d",
    },{
        message: '都市言情',
        color:"#ec575e",
    },
    {
      message:'哈弗经济管理类',
      color:"#9060e8",

    },
    {
      message: '领导才能',
      color: "#ded658",
    }
    ],
    introduceList:[
      { "title": "科幻", "imageSrc": "/images/home/home_03.jpg", "navTo": "/pages/science/science"},
      { "title": "生活", "imageSrc": "/images/home/home_05.jpg", "navTo": "/image/home/home_05.jpg" },
      { "title": "露营", "imageSrc": "/images/home/home_07.jpg", "navTo": "/image/home/home_07.jpg" },
      { "title": "职场", "imageSrc": "/images/home/home_09.jpg", "navTo": "/image/home/home_09.jpg" },
    ],
    introduceList_middle: [
      { "title": "刘慈欣", "imageSrc": "/images/home/home_15.jpg", "navTo": "/image/home/home_15.jpg" },
      { "title": "田小花", "imageSrc": "/images/home/home_16.jpg", "navTo": "/image/home/home_16.jpg" },
      { "title": "马尔克斯", "imageSrc": "/images/home/home_14.jpg", "navTo": "/image/home/home_14.jpg" },
      { "title": "余秋雨", "imageSrc": "/images/home/home_17.jpg", "navTo": "/image/home/home_17.jpg" },
    ],
    bookList: [
      { "imgUrl": "/images/01.jpg", "name": "三体：死神永生", "authorName": "刘慈欣", "introduce": "刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品..." },
      { "imgUrl": "/images/home/home_22.jpg", "name": "未来简史", "authorName": "尤瓦尔·赫拉利", "introduce": "讲述一段有关未来50年令人难以置信的故事,他剖析了各国..." }
    ]
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

  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  }
})