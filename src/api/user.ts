import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
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