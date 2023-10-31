<script setup lang="ts">
import TheWelcome from '../../../src/components/TheWelcome.vue'
import { ref } from 'vue'
const subComponent = ref(null)
function play() {
  subComponent.value = TheWelcome
}
function close() {
  subComponent.value = null
}
</script>
<template>
  <van-button plain type="success" @click="play">Play</van-button>&nbsp;&nbsp;
  <van-button plain type="success" @click="close">Close</van-button>
  <component :is="subComponent"></component>
</template>
