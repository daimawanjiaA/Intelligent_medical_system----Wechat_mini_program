// pages/login/login.js
// 导入request工具类
import { requestUtil } from "../../utils/requestUtil";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pno: "",
    pname: "",
    pwd: "",
    haveToken: true
  },
  login(e) {
    // console.log(this.data.pno)
    // console.log(this.data.pwd)
    requestUtil({ url: 'patient/Validate?Pno=' + this.data.pno + "&pwd=" + this.data.pwd, method: "GET" }).then(result => {
      this.setData({
        haveToken: result.data
      })
    }).then(result => {
      if (this.data.haveToken == true) {
        wx: wx.showToast({
          title: '登录成功',
          icon: 'success',
          // image: '../../images/icon/失败.png',
          mask: true,
        })
      }
      else {
        wx: wx.showToast({
          title: '请检查账号和密码',
          // icon: 'error',
          image: '../../images/icon/失败.png',
          mask: true,
        })
      }
      if(this.data.haveToken == true){
        wx.setStorageSync('pno', this.data.pno);
        wx.switchTab({ 
          url: "../index/index",
        })
      }
    })
  },
  register(e){
    wx.navigateTo({
      url: '../register/register',
    })
  },
  T() {

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