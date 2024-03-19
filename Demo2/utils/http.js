// 模块文件 http.js
// 模块功能：网络请求封装方法

// 定义一个模块变量
var obj={
  uname:'hauhau',
  age:20,
  desc:'哈哈 我是数据obj对象'
}
var str="你好 世界";
//定义函数
function http(){
  console.log("网络请求方法");
}



// 导出  或者是暴露出去
// module.exports.obj=obj;//{obj:obj}

// 只能导出一个内容
// module.exports=obj;

// 导出对象
module.exports={
  aa:obj,
  bb:str,
  http:http
}