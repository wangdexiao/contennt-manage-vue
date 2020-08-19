import axios from 'axios'
import Router from '../router/index'
import {Message} from 'element-ui'
import Vuex from '../store/index'
import qs from 'qs'
import store from '../store'
import da from 'element-ui/src/locale/lang/da'
import ssoconfig from '../configs/sso'
// import ssoconfig from '../configs/sso'
import XEUtils from 'xe-utils'


export function request (config) {

  const instance = axios.create({
    baseURL : 'http://192.168.1.100:5555/content-manage/',
    timeout : 500000000000,
    headers :{
      // 'X-Requested-With' : 'XMLHttpRequest',
      // 'Content-Type': 'application/x-www-form-urlencoded'
      // 'Accept':  '*/*'
    },
    // withCredentials: true,
    //转换请求数据，// 有qs 就不需要这个了,会自动添加 headers: { 'content-type': 'application/x-www-form-urlencoded' },
    transformRequest: data => {
      // console.log('请求参数' + JSON.stringify(data))
      return qs.stringify(data)
    }
  });

  //axios 的拦截器
  //请求拦截器
  instance.interceptors.request.use(
    config =>{

      //某些网络请求（比如登录（token）），必须携带一些特殊的信息
      // 在此设置请求头统一携带token

      if(config.url !== '/login'){
        const tokenString = sessionStorage.getItem('access_token')
        if(!XEUtils.isEmpty(tokenString)){
          config.headers.Authorization = "Bearer " + tokenString;
        }

      }

      return config;
    },
    error => {
      return error;
    }
  )

  //响应拦截器
  instance.interceptors.response.use(
    res => {
      let result = res.data
      if (result.code === 401) {
        let currentHref = window.location.href;
        console.log("当前路径:" + currentHref)
        window.location.href = result.data + '?redirectUrl=' + ssoconfig.getAuthorizeCodeUrl()
        // window.location.href = result.data + '?redirectUrl=' + currentHref
        // Router.replace("/login")
        return result
      }

      return result;
    },
    error => {
      return error
    }
  )

  return instance(config);
}
