<script setup lang="ts" name="AboutView">
import SearchPage from './tab1/SearchPage.vue'
import TheWelcome from '../components/TheWelcome.vue'
import mainStore from '../store'
import router from '../router'
import { showToast } from 'vant'
import { ref, shallowRef } from 'vue'
const store = mainStore()
const popupShow = ref(false)
const active = ref(1)
const bodyComponent = shallowRef(SearchPage)
function onClickLeft() {
  bodyComponent.value = SearchPage
}
function onClickRight() {
  popupShow.value = true
}
function onTabChange(index) {
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
    router.push({ path: "/" })
  })
}
function showDetail(id) {
  console.log('-->showDetail id:' + id)
  bodyComponent.value = TheWelcome
}
</script>
<template>
	<van-nav-bar title="首页" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
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
  <van-search v-model="keyword" placeholder="请输入搜索关键词" />
  <component @showDetail="showDetail" :is="bodyComponent"></component>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
