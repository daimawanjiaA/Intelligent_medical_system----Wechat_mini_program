// pages/emr/emr.js
// mr/selectMr_DByPno
// 导入request工具类
import { requestUtil } from "../../utils/requestUtil";
Page({

  data: {
    pno:"",
    emr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var pno = wx.getStorageSync('pno');

    console.log(pno) 
    this.setData({
      pno:pno
    })
    requestUtil({url:'mr/selectMr_DByPno?Pno='+this.data.pno,method:"GET"}).then(result=>{
      // console.log(result.data)
      this.setData({
        emr:result.data
      })
    })
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