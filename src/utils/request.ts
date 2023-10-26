import axios from 'axios'
import store from '@/store'

// create an axios instance
const service = axios.create({
  baseURL: 'appapi/think',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  (  config: { headers: { [x: string]: string | null } }) => {
    // do something before request is sent
    // send logtail
    config.headers['authorization'] = sessionStorage.getItem('TOKEN')
    return config
  },
  (  error: any) => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (  response: { data: any; headers: { refreshtoken: string } }) => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000 && !res.success) {
      if (res.code === -10) {
        alert(res.msg)
        store.dispatch('logout').then(() => {
          location.reload()
        })
      }
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === -1 || res.code === 50008 || res.code === 50012 || res.code === 50014) {
        alert('登录超时!')
        store.dispatch('logout').then(() => {
          location.reload()
        })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      const refreshtoken = response.headers.refreshtoken || ''
      if (refreshtoken !== '') {
        console.log('-->refreshtoken : ' + refreshtoken)
        sessionStorage.setItem("TOKEN",refreshtoken);
      }
      return res
    }
  },
  (  error: string) => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service