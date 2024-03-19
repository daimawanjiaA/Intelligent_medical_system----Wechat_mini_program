// pages/emr/emr.js
// mr/selectMr_DByPno
// 导入request工具类
import { requestUtil } from "../../utils/requestUtil";
Page({

  data: {
    // active:0,
    color: "#0077ff",
    reg: [],
    steps: [
      {
        desc: '已发起',
      },
      {
        desc: "已确认",
      },
      {
        desc: '预约完成',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    requestUtil({ url: 'register/selectAllByPno?Pno=' + "0004", method: "GET" }).then(result => {

      var res = result.data
      var act = 0
      for (var i = 0; i < result.data.length; i++) {
        act = result.data[i].status
        var step = [{desc: '已发起',},{desc: "已确认",}, {desc: '预约完成',},]
        var color = "#0077ff"
        if (result.data[i].status === 3) {
          act = 1
          step[1].desc = "被拒绝";
          color = "#ff0e0e"
        }
        // else{
        //   step[1].desc = "拒绝"
        //   color="#0077ff"
        // }
        // console.log(step[1].desc)
        res[i].steps = step
        res[i].active = act
        res[i].color = color
        // res[i].push({ "steps": v, "active": act,})
      }
      this.setData({
        reg: result.data
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