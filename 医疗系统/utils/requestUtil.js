// 定义请求根路径baseUrl
const baseUrl="http://127.0.0.1:80/"
/**
 * 返回请求的根路径baseUrl
 */
export const getBaseUrl=()=>{
  return baseUrl;
}

/**
 * 后端请求工具类
 * @param {*} Params 
 */
export const requestUtil=(Params)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      ...Params,
      url:baseUrl+Params.url,
      success:(result)=>{
        resolve(result)
      },
      fail:(err)=>{
        reject(result)
      }
    })
  });
}