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
    num:88,
    arr:['hello','你好','事件'],
    isShow:true,
  },
  toggle(e){
    //点击按钮  修改data里面的变量isShow    控制容器显示隐藏
    //1.获取data对象里的属性        this指向Page()对象
    console.log(this.data);
    //2.修改data对象里的属性
    // this.data.isShow=false;//不能修改data的数据      提供方法
    this.setData({
      isShow:!this.data.isShow,//取反
      aa:'hah 我修改了',
    })

  },
  demo(){
    console.log('点我咋滴')
    // console.log('哈哈哈 我是一个事件');
  },
  child(){
    console.log('点击了子元素')
  },
  parent(){
    console.log('点击了父元素')
  },
  // 获取事件传递参数
  change(e){//e事件对象
    console.log(e);
    console.log(e.currentTarget.dataset);
  },
  canshu(e){
    console.log(e);
    console.log(e.currentTarget.dataset);
  },
  dian(e){
    console.log(e.currentTarget.dataset);
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
