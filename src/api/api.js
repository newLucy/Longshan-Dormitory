import request from '@/utils/request'

export function getUserInfo (data) {
  return request({
    url: '/information/identity',
    method: 'get',
    params: data
  })
}

export function getDepartment (data) {
  return request({
    url: '/base/department',
    method: 'get',
    params: data
  })
}

export function getArea (data) {
  return request({
    url: '/base/area',
    method: 'get',
    params: data
  })
}



export function postUserInfo (data) {
  return request({
    url: '/information/infoEntry',
    method: 'post',
    data
  })
}