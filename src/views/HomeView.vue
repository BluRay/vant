<script setup lang="ts" name="HomeView">
// import TheWelcome from '../../src/components/TheWelcome.vue'
import MainPage from './tab0/MainPage.vue'
import SearchPage from './tab1/SearchPage.vue'
import mainStore from '../store'
import router from '../router'
import { showToast } from 'vant'
import { ref } from 'vue'
const store = mainStore()
const popupShow = ref(false)
const active = ref(0);
const msgCount = ref(1);
const bodyComponent = ref(MainPage)
function onClickRight() {
  popupShow.value = true
}
function onTabChange(index:number) {
  active.value = index
  showToast({
    message: '加载中...',
    forbidClick: true,
    duration: 300
  });
  if (index === 0)  {
    router.push({ path: "/" });
  }
  if (index === 1)  {
    router.push({ path: "/search" });
  }
  if (index === 2) {
    router.push({ path: "/about" });
  }
  if (index === 3) {
    router.push({ path: "/config" });
  }
}
function handleLogout() {
  mainStore().logout({username: mainStore().username}).then(() => {
    showToast('handleLogout');
    location.reload()
  })
}
function showSysMsg() {

}
</script>
<template>
	<van-nav-bar title="首页" left-text="返回" left-arrow @click-right="onClickRight">
    <template #right>
      <van-icon name="setting-o" size="22" />
    </template>
  </van-nav-bar>
  <van-tabbar v-model="active" @change="onTabChange">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search">搜索</van-tabbar-item>
    <van-tabbar-item icon="friends-o">用户</van-tabbar-item>
    <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
  </van-tabbar>
  <van-popup v-model:show="popupShow" position="right" :style="{ height: '100%' }">
    <van-sidebar v-model="active">
      <van-sidebar-item title="个人中心" />
      <van-sidebar-item :badge="msgCount" @click="showSysMsg" title="系统消息" />
      <van-sidebar-item @click="handleLogout" title="退出" />
    </van-sidebar>
  </van-popup>
  <main>
    <!--TheWelcome /-->
    <component :is="bodyComponent"></component>
  </main>
</template>
