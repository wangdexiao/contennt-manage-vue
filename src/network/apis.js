import { request } from './netRequest';

/**
 * sso
 * @param code
 * @returns {AxiosPromise}
 */
export function login (code) {

  return request({
    baseURL : 'http://192.168.1.100:5555',
    url: '/login',
    method : 'post',
    params: {
          code
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
