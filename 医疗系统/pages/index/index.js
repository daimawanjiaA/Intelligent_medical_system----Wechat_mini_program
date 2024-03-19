// 导入request工具类
import { requestUtil } from "../../utils/requestUtil";
// index.js


// 获取应用实例
const app = getApp()

Page({
  data: {
    swiperList: [],
    baseurl: '',
    bigTypeList_row0: [{ id: 1, name: '我的预约' }, { id: 2, name: '来院路线' }, { id: 3, name: '走进医院' }],
    bigTypeList_row1: [{ id: 1, name: '药科.png' }, { id: 2, name: '儿科.png' }, { id: 3, name: '中医内科.png' }],
    bigTypeList_row2: [{ id: 4, name: '眼科.png' }, { id: 5, name: '骨科.png' }, { id: 6, name: '皮肤科.png' }],
    doctor: [{ id: 1, name: '冯大夫', post: '主任医师' }, { id: 2, name: '王大夫', post: '主任医师' }, { id: 3, name: '吕大夫', post: '知名专家' }]
  },
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    Toast('搜索' + this.data.value);
  },
  onClick() {
    Toast('搜索' + this.data.value);
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    requestUtil({ url: 'test/select', method: "GET" }).then(result => {
      this.setData({
        swiperList: result.data
      })
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  Go(e) {
    let dir = e.target.dataset.index
    if(dir==1)
      wx.navigateTo({
        url: "../MyReg/MyReg",
      })
    else if(dir==2){
      wx.navigateTo({
        url: "../route/route",
      })
    }
    else{
      wx.switchTab({
        url: "../introduce/introduce",
      })
    }
  }
})
