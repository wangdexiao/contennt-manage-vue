import { request } from './netRequest';



export function getUserInfo(){
  return request({
    url: '/getUserInfo',
    method : 'post',

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


export function userLogout () {

  return request({
    url: '/logout',
    method : 'post',
    data:'',
    headers :{
      // 'X-Requested-With' : 'XMLHttpRequest',
      // 'Content-Type': 'application/x-www-form-urlencoded'
      // 'Accept':  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
    },
  });
}

//通过后端获取资源服务器的资源
export function getRes1 () {

  return request({
    url: '/getres1',
    method : 'post',
    data:''
  });
}
