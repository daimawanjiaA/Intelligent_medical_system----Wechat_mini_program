// pages/register/register.js
// 导入request工具类
import {
  requestUtil
} from "../../utils/requestUtil";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pno:"",
    pwd:"",
    pname:"",
    pphone:"",
    patient:{pno:"",pname:"",oname:"诊室",time:"",pwd:"",pphone:"",beiZhu:"无"},
  },
  register(){
    var patient = this.data.patient
    patient.time=new Date().toISOString().substring(0, 10);
    patient.pno=this.data.pno
    patient.pname=this.data.pname
    patient.pphone=this.data.pphone
    patient.pwd=this.data.pwd
    console.log(patient)
    // patient/insert
    requestUtil({
      url: 'patient/insert',
      data: patient,
      method: "POST"
    }).then(result => {
      wx: wx.showToast({
        title: '注册成功',
        icon: 'success',
        // image: 'image',
        mask: true,
      })
    })
  },
  T(){

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