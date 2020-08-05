import axios from 'axios'
import qs from 'qs'
import da from 'element-ui/src/locale/lang/da'

// export function ssoRequest (config) {
//
//   const ssoInstance = axios.create({
//     baseURL : 'http://192.168.1.100:8000/',
//     timeout : 5000,
//     //转换请求数据，// 有qs 就不需要这个了,会自动添加 headers: { 'content-type': 'application/x-www-form-urlencoded' },
//     transformRequest: data => {
//       // 注释方法是不使用插件
//       // for (let it in data) {
//       //   // ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
//       //   ret += it + '=' + data[it] + '&';
//       // }
//       qs.stringify(data)
//     }
//   });
//
//   //axios 的拦截器
//   //请求拦截器
//   ssoInstance.interceptors.request.use(
//     config =>{
//
//
//     //某些网络请求（比如登录（token）），必须携带一些特殊的信息
//     return config;
//     },
//     error => {
//       return error;
//     }
//   )
//
//   //响应拦截器
//
//   ssoInstance.interceptors.response.use(
//     res => {
//       return res.data
//     },
//     error => {
//       return error
//     }
//   )
//
//   return ssoInstance(config);
// }

export function request (config) {

  const instance = axios.create({
    // baseURL : 'http://192.168.1.100:5555/',
    timeout : 5000,
    //转换请求数据，// 有qs 就不需要这个了,会自动添加 headers: { 'content-type': 'application/x-www-form-urlencoded' },
    transformRequest: data => {
      qs.stringify(data)
    }
  });

  //axios 的拦截器
  //请求拦截器
  instance.interceptors.request.use(
    config =>{

      //某些网络请求（比如登录（token）），必须携带一些特殊的信息
      return config;
    },
    error => {
      return error;
    }
  )

  //响应拦截器

  instance.interceptors.response.use(
    res => {
        console.log("响应正常：" + res)
        return res.data;
    },
    error => {
      console.log("响应错误：" + error)
      console.log("响应错误code：" + error.response.status)
      var code = error.response.status
      if (code === 401) {
        // Cookies.remove(TOKEN_KEY)
        window.location.href = '/login.html'
        // Message.error('未登录，或登录失效，请登录')
      }
      return error
    }
  )

  return instance(config);
}
