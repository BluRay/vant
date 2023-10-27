import request from '@/utils/request'

export function login(data: { username: string; password: any; code: any; uuid: any }) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
export function logout(data: { username: string }) {
  return request({
    url: '/user/logout',
    method: 'post',
    data
  })
}
export function userList(data: any) {
  return request({
    url: '/user/pageList',
    method: 'POST',
    data
  })
}