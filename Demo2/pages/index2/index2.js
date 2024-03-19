// pages/index2/index2.js

// 访问app.js文件 语法：vaer app=getApp()
// 访问模块.js文件
// 语法：导入
var shuju=require('../../utils/http.js')
console.log(shuju);
shuju.http();


// 获取日期格式
var data=require('../../utils/util.js');
console.log(data);
var times=data.formatTime(new Date());
console.log(times);


Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 模拟静态的数据
    books:[
      {
        id:1001,
        bookName:'三国演义',
        price:34,
        desc:'三国演义时期的战国时期'
      },
      {
        id:1002,
        bookName:'三国演义',
        price:34,
        desc:'三国演义时期的战国时期'
      },
      {
        id:1003,
        bookName:'三国演义',
        price:34,
        desc:'三国演义时期的战国时期'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

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