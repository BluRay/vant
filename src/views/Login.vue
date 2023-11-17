<template>
  <van-nav-bar title="VantApp" left-text="注册" @click-left="handleSignIn"/>
	<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
  
	<van-form>
		<van-field
			v-model="loginForm.username"
			name="用户名"
			label="用户名"
			placeholder="用户名"
			:rules="[{ required: true, message: '请填写用户名' }]"
		/>
		<van-field
			v-model="loginForm.password"
			type="password"
			name="密码"
			label="密码"
			placeholder="密码"
			:rules="[{ required: true, message: '请填写密码' }]"
		/>
	</van-form>
  <div style="margin: 16px;">
    <van-button type="success" round block size="normal" @click="handleLogin">Login</van-button><br/>
		<van-button v-if="showReg" type="primary" round block size="normal" @click="handleTest">测试</van-button>
  </div>
</template>

<script setup lang="ts" name="Login">
import mainStore from '../store'
import { userList } from '../api/user'
import { showToast } from 'vant';
import router from '../router'
import { ref } from 'vue';
const store = mainStore()
const showReg = ref<boolean>(false)

interface loginUser {
  username: string
  password: string
}

const loginForm = ref<loginUser>({
  username: "",
  password: ""
});

const handleSignIn = (e:any) => {
  showToast('-->handleSignIn');
}
const handleLogin = () => {
  store.login({
    username: 'admin', password: '123456', code: undefined, uuid: undefined
  }).then(() => {
    showToast('Login Success');
    console.log('store.username: ' + store.username)
    router.push({ path: "/" });
  })
}
const handleTest = () => {
  userList({}).then((res:any) => {
    console.log(res)
    if(res.success) {
      showToast('Test Success')
    } else {
      showToast('Test Failed' + res.error)
    }
  }).catch(error => {
    showToast('Test Failed:' + error)
  })
}
</script>
<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>