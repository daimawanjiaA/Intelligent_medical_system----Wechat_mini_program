// pages/DC/DC.js
// 导入request工具类
import {
  requestUtil
} from "../../utils/requestUtil";
import Toast from '@vant/weapp/toast/toast';
Page({
  data: {
    officindex:'',
    value: '',
    userName: '',
    userId: '',
    doctorId: '',
    officName: '',
    doctorName: '',
    reg_data: {
      id: '',
      dno: '',
      pno: '',
      submissionData: '',
      regTime: '',
      status: ''
    },
    show_offic: false,
    show_doctor: false,
    reg_date: '',
    show_date: false,

    show_pno:false,
    actions_pno:[],

    actions_offic: [{
        name: '中医内科',
      },
      {
        name: '儿科',
      },
      {
        name: '喉科',
      },
      {
        name: '妇产科',
      },
      {
        name: '微生物科',
      },
      {
        name: '牙科',
      },
      {
        name: '皮肤科',
      },
      {
        name: '眼科',
      },
      {
        name: '耳科',
      },
      {
        name: '药科',
      },
      {
        name: '骨科',
      },
      {
        name: '鼻科',
      },
    ],
    actions_doctor: [{
      Oname: '选项'
    }],
    val: [],
  },
  onLoad(options){
    console.log(options)
    if(options.index){
      this.setData({
        officindex:options.index
      });
      
    }
  },
  // id
  onClick_pno(){
    this.setData({
      show_pno: true
    });
  },
  onClose_pno(){
    this.setData({
      show_pno: false
    });
  },
  onSelect_pno(event){
    this.setData({ 
      userId:event.detail.name,
      'reg_data.pno':event.detail.name
    })
  },
  // 科室
  onClick_offic() {
    this.setData({
      show_offic: true
    });
  },
  onClose_offic() {
    this.setData({
      show_offic: false
    });
  },
  onSelect_offic(event) {
    this.setData({
      officName: event.detail.name
    });
    this.Find_Doctor(this.data.officName)
  },
  // 医生
  onClick_doctor() {
    this.setData({
      show_doctor: true
    });
  },
  onClose_doctor() {
    this.setData({
      show_doctor: false
    });
  },

  onSelect_doctor(event) {
    var dname = event.detail.name
    requestUtil({
      url: 'doctor/selectByname?Dname=' + dname,
      method: "GET"
    }).then(result => {
      this.setData({
        'reg_data.dno': result.data[0].dno
      })
    })
    this.setData({
      doctorName: event.detail.name,
    });
  },
  // 输入框
  onChange1(event) {
    // event.detail 为当前输入的值
    this.setData({
      userName: event.detail.value
    });
    // console.log(this.data.userName)
    if (this.data.userName !== "")
      this.Find_Pno(this.data.userName);
  },
  // 日期
  onClick_date() {
    this.setData({
      show_date: true
    });
  },
  onClose() {
    this.setData({
      show_date: false
    });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getYear() + 1900}-${date.getMonth() + 1}-${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show_date: false,
      reg_date: this.formatDate(event.detail),
      'reg_data.regTime': this.formatDate(event.detail),
    });
  },
  onClick_submit() {
    // console.log(this.data.userName)
    if (this.data.userName === "")
      Toast('请输入姓名');
    else if (this.data.officName === "")
      Toast('请选择预约诊室');
    else if (this.data.doctorName === "")
      Toast('请选择预约医生');
    else if (this.data.reg_date === "")
      Toast('请选择预约日期');
    else {
      var date = new Date().toJSON().substring(0, 10) + ' ' + new Date().toTimeString().substring(0, 8);
      this.setData({
        'reg_data.status': 0,
        'reg_data.submissionData': date
      });

      requestUtil({
        url: 'register/CreateReg',
        data: this.data.reg_data,
        method: "POST"
      }).then(result => {
        wx: wx.showToast({
          title: '提交成功',
          icon: 'success',
          // image: 'image',
          mask: true,
        })
      })


    }

  },
  // 查患者号
  Find_Pno(Pname) {

    requestUtil({
      url: 'patient/findByName?Pname=' + this.data.userName,
      method: "GET"
    }).then(result => {
      var v = []
      for (var i = 0; i < result.data.length; i++) {
        v.push({
          "name": result.data[i].pno,
        })
      }
      this.setData({ 
        actions_pno: v
      })
    })
  },
  // 根据诊室查医生
  Find_Doctor(Oname) {
    requestUtil({
      url: 'doctor/findDnameByOname?Oname=' + this.data.officName,
      method: "GET"
    }).then(result => {
      var v = []
      for (var i = 0; i < result.data.length; i++) {
        v.push({
          "name": result.data[i],
        })
      }
      this.setData({
        actions_doctor: v
      })
    })
  }

})