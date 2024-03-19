// pages/Map/Map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mapId: "map",
    scale:7,
    markers: [{
      // 标记点（iconPath图像路径,id应该无所谓 可以用来判断用户点击了哪个marker把,经纬度，还有图像高度、宽度）
      // iconPath: "../../images/icon/定位.png",
      // width: 30,
      // heigth: 30,
      id: 1,
      latitude: "33.727",
      longitude: "112.935",
      height: 2,
      address:"医疗医院",
    },
  ]},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  moveTolocation: function () {
    //mapId 就是你在 map 标签中定义的 id
    let Id = this.data.mapId
    var mapCtx = wx.createMapContext(Id);
    mapCtx.moveToLocation();
  }
})