<template>
  <van-nav-bar title="VantApp" left-text="注册" @click-left="handleSignIn"/>
	<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
  <div style="margin: 16px;">
    <van-button type="success" @click="handleLogin">主要按钮</van-button>
  </div>
</template>

<script setup lang="ts" name="Login">
import mainStore from '../store'
import { showToast } from 'vant';

const store = mainStore()
const handleSignIn = () => {
  showToast('-->handleSignIn');
}
const handleLogin = () => {
  showToast('-->handleLogin');
  store.login({
    username: 'admin', password: '123456', code: undefined, uuid: undefined
  }).then(() => {

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