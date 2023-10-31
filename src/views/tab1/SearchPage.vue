<script setup lang="ts">
import { List, Card, showToast } from 'vant';
import { ref } from 'vue'

import {defineEmits} from 'vue'
const emit = defineEmits(['showDetail:id'])

const subComponent = ref(null)
const keyword = ref('')
//const list = ref(['aaa','bbb','333','444','555','666','777'])
const list = ref([{"id": 8, "title": "Play Snow..."},{"id": 9, "title": "222222"}])
function showDetail(id) {
  emit('showDetail', id)
}
</script>
<template>
  <van-card v-for="item in list" :key="item.id" :title="item.title" 
    @click="showDetail(item.id)"
    num="1"
    price="100.00"
    desc="描述信息"
    thumb="./public/1.jpg">
      <template #tags>
      <van-tag plain type="primary">标签</van-tag>&nbsp;
      <van-tag plain type="primary">标签</van-tag>
    </template>
    <!--template #footer>
      <van-button size="mini">按钮</van-button>
      <van-button size="mini">按钮</van-button>
    </template-->
  </van-card>
</template>