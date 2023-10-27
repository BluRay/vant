import { defineStore } from 'pinia'
import { login, logout } from '../api/user'
export const mainStore = defineStore('main', {
  state: () => ({
    token: '',
    userid: '',
    username: '',
    nickname:'',
    avatar: ''
  }),
  actions: {
    login(userInfo: { username: string; password: any; code: any; uuid: any }) {
      return new Promise<void>((resolve, reject) => {
        login(userInfo).then((res: { data: any }) => {
          this.token = res.data.result.token
          this.username = res.data.result.username
          this.nickname = res.data.result.realName
          resolve()
        }).catch((error: any) => {
          reject(error)
        })
      })
    },
    logout(userInfo: { username: string}) {
      return new Promise<void>(resolve => {
				this.token = ''
        this.username = ''
        this.nickname = ''
        resolve()
			})
    }
  }
})
export default mainStore
