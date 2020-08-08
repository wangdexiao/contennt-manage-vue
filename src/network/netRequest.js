import axios from 'axios'
import Router from '../router/index'
import {Message} from 'element-ui'
import Vuex from '../store/index'
import qs from 'qs'
import da from 'element-ui/src/locale/lang/da'

export function ssoRequest (config) {

  const ssoInstance = axios.create({
    baseURL : 'http://192.168.1.100:8000',
    timeout : 5000,
    withCredentials:true,
    //转换请求数据，// 有qs 就不需要这个了,会自动添加 headers: { 'content-type': 'application/x-www-form-urlencoded' },
    transformRequest: data => {
      console.log('请求参数' + JSON.stringify(data))
      return qs.stringify(data)
    }
  });

  //axios 的拦截器
  //请求拦截器
  ssoInstance.interceptors.request.use(
    config =>{


    //某些网络请求（比如登录（token）），必须携带一些特殊的信息
    return config;
    },
    error => {
      return error;
    }
  )

  //响应拦截器

  ssoInstance.interceptors.response.use(
    res => {
      let result = res.data
      if (result.code === 208) {
        Message({
          message: result.msg,
          type: 'success',
          duration: 5 * 1000
        })
        Vuex.commit('setUserValue',result.data)
        // Vuex.commit('setUserValue',result.data)
        Router.replace('/')
        localStorage.setItem('userInfo', JSON.stringify(result.data))
      }
      if (result.code === 209) {
        Message({
          message: result.data,
          type: 'fail',
          duration: 5 * 1000
        })

      }
      return result
    },
    error => {
      return error
    }
  )

  return ssoInstance(config);
}

export function request (config) {

  const instance = axios.create({
    baseURL : 'http://192.168.1.100:10001/',
    timeout : 500000000000,
    headers :{
      'X-Requested-With' : 'XMLHttpRequest'
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
        console.log(result.data)
        // window.location.href = result.data
        Router.replace("/login")
        return
      }

      return result;
    },
    error => {
      return error
    }
  )

  return instance(config);
}
