<script setup lang="ts" name="HomeView">
import TheWelcome from '../../src/components/TheWelcome.vue'
import mainStore from '../store'
import { showToast } from 'vant'
import { ref } from 'vue'
const store = mainStore()
const popupShow = ref(false);
function onClickRight() {
  popupShow.value = true
}
function handleLogout() {
  mainStore().logout({username: mainStore().username}).then(() => {
    showToast('handleLogout');
    location.reload()
  })
}
</script>
<template>
	<van-nav-bar title="首页" left-text="返回" left-arrow @click-right="onClickRight">
    <template #right>
      <van-icon name="setting-o" size="22" />
    </template>
  </van-nav-bar>
  <van-tabbar v-model="active" @change="onChange">
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
    <TheWelcome />
  </main>
</template>
