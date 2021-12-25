import uni from "@dcloudio/vite-plugin-uni";

const commoneUrl = 'http://192.168...' //公共路径
const userId = uni.getStorageSync('userinfo_Data').id //用户id

//post请求封装
function postRequest(url, data, type) {
  var promise = new Promise((resolve, reject) => {
    var postData = data
    uni.request({
      url: commoneUrl + url,
      data: postData,
      method: 'POST',
      // dataType:"jsonp",
      // jsonp:"callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名
      // jsonpCallback:"success_jsonpCallback",
      header: {
        'content-type': type || 'application/json;charset=UTF-8',
        token: uni.getStorageSync('token'),
      }, //token可以不要，看后端
      success: function (res) {
        resolve(res.data)
      },
      fail: function (e) {
        reject('网络出错')
      },
    })
  })
  return promise
}

//get请求封装
function getRequest(url, data) {
  var promise = new Promise((resolve, reject) => {
    var postData = data
    uni.request({
      url: commoneUrl + url,
      data: postData,
      method: 'GET',
      dataType: 'json',
      header: {
        'content-type': 'application/json',
        token: uni.getStorageSync('token'),
      },
      success: function (res) {
        resolve(res.data)
      },
      fail: function (e) {
        reject('网络出错')
      },
    })
  })
  return promise
}

//put请求封装
function putRequest(url, data, heads) {
  var promise = new Promise((resolve, reject) => {
    var postData = data
    uni.request({
      url: commoneUrl + url,
      data: postData,
      method: 'PUT',
      dataType: 'json',
      header: {
        'content-type': 'application/json',
        token: uni.getStorageSync('token'),
      },
      success: function (res) {
        resolve(res.data)
      },
      fail: function (e) {
        reject('网络出错')
      },
    })
  })
  return promise
}

//del请求封装
function delRequest(url, data) {
  var promise = new Promise((resolve, reject) => {
    var postData = data
    uni.request({
      url: commoneUrl + url,
      data: postData,
      method: 'DELETE',
      dataType: 'json',
      header: {
        'content-type': 'application/json',
        token: uni.getStorageSync('token'),
      },
      success: function (res) {
        resolve(res.data)
      },
      fail: function (e) {
        reject('网络出错')
      },
    })
  })
  return promise
}

module.exports = {
  post: postRequest,
  get: getRequest,
  put: putRequest,
  del: delRequest,
  ip: commoneUrl,
  userId: userId,
}

/*
main.js引入

import api from './api.js'
Vue.prototype.api = api
页面使用

//传参方式
//data={
    //name:this.name
//}或
// thia.api.get('HomePage/Controller',{name:this.name},请求头类型非必传)
// thia.api.get('HomePage/Controller',data,请求头类型非必传).then(res=>{
    //     console.log(4444444,res);    
    //     this.goods = []
    //     if(res.data.code == 200){
    //           this.goods = that.data.data
    //       }
// })
*/
