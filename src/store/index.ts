import { defineStore } from 'pinia'
import { login } from '../api/user'
export const mainStore = defineStore('main', {
  state: () => ({
    token: '',
    name: '',
    nickname:'',
    avatar: ''
  }),
  actions: {
    login(userInfo: { username: string; password: any; code: any; uuid: any }) {
      console.log('-->mainStore login')
      const username = userInfo.username.trim()
      const password = userInfo.password
      return new Promise((resolve, reject) => {
        login(userInfo).then((res: { data: any }) => {
        
        }).catch((error: any) => {
          reject(error)
        })
      })
    }
  }
})
export default mainStore
