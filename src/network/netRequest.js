import axios from 'axios'
import Router from '../router/index'
import {Message} from 'element-ui'
import Vuex from '../store/index'
import qs from 'qs'
import store from '../store'
import da from 'element-ui/src/locale/lang/da'
// import ssoconfig from '../configs/sso'
import XEUtils from 'xe-utils'


export function request (config) {

  const instance = axios.create({
    baseURL : 'http://192.168.1.100:10001/',
    timeout : 500000000000,
    headers :{
      // 'X-Requested-With' : 'XMLHttpRequest',
      // 'Content-Type': 'application/x-www-form-urlencoded'
      // 'Accept':  '*/*'
    },
    withCredentials: true,
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
        Message.warning("未认证,去登录")
        window.location.href = result.data + '?redirectUrl=' + window.location.href
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
