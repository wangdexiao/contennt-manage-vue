import { request } from './netRequest';
import ssoconfig from '../configs/sso'

/**
 * 获取授权码
 * @returns {AxiosPromise}
 */
export function authorizeCode () {

  let state = ssoconfig.getState();
  sessionStorage.setItem('state',state);
  return request({
    baseURL : 'http://192.168.1.100:5555/sso-server/',
    url: 'oauth/authorize',
    method : 'get',
    headers :{
      // Accept : 'ext/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
    },
    params: {
      'client_id' : ssoconfig.clientId,
      'redirect_uri' : ssoconfig.redirectUri,
      'response_type' : ssoconfig.responseType,
      'state' : state,
    },
  });
}

/**
 * sso
 * @param code 授权码
 * @returns {AxiosPromise}
 */
export function login (code,redirectUri) {

  return request({
    baseURL : 'http://192.168.1.100:5555',
    url: '/login',
    method : 'post',
    params: {
      code,
      redirectUri
    },
  });
}

//查询发布的内容
export function queryContentNet () {
  return request({
    url: '/content/query',
    method : 'post',
  });
}

export function delContentNet (id) {
  return request({
    url: '/content/del',
    method: 'post',
    data: {
      'id': id,
    },
  });
}

export function addContent (data) {
  return request({
    url: '/content/add',
    method : 'post',
    data : data,
  });
}


// export function userLogout () {
//
//   return request({
//     url: '/logout',
//     method : 'post',
//     data:''
//   });
// }

//通过后端获取资源服务器的资源
export function getRes1 () {

  return request({
    url: '/getres1',
    method : 'post',
    data:''
  });
}
