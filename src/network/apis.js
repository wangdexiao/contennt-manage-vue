import { request ,ssoRequest} from './netRequest';

export function login (username,passwd) {

  return ssoRequest({
    url: '/login',
    method : 'post',
    data: {
          username: username,
          passwd: passwd
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