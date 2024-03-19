// index.js
// 获取应用实例
const app = getApp()//固定的方法
// console.log('首页获取的全局app，',app.globalData.info);
// app.http();

// 每个小程序页面都有Page()方法：指定页面的初始数据、生命周期回调、事件处理函数 自定义函数
Page({
  /**
   * 页面的初始数据
   */
  data: {
    flag:false,//显示为真
    msg:'hello 小程序',
    str:'hahaha',
    arr:[10,20,30],
    obj:{
      uname:'花花',
      age:20,
      sex:'男'
    },
    aa:'bg',
    num:3,
    books:[
      {
        id:1,
        bookName:'三国演义',
        desc:'三国战乱时期'
      },
      {
        id:2,
        bookName:'红楼梦',
        desc:'学习学习'
      },
      {
        id:3,
        bookName:'西游记',
        desc:'西天取经'
      },
    ]
  },
  demo(){
    // console.log('哈哈哈 我是一个事件');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log('监听页面初次渲染完成');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
      // console.log('页面显示');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    // console.log('页面隐藏');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // console.log('下拉');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
