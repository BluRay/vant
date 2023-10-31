<script setup lang="ts">
import videojs from "video.js"
import "video.js/dist/video-js.css"
import { onMounted, onUnmounted, ref } from "vue"
const videoPlayer = ref(null)

const myPlayer = ref(null)

onMounted(() => {
  myPlayer.value = videojs(videoPlayer.value, {
    poster: "./public/1.jpg",
    controls: true,
    fluid: true,
    sources: [
      {
        src: "./public/1.mp4",
        type: 'video/mp4',
      }
    ],
    controlBar: {
      remainingTimeDisplay: {
        displayNegative: false
      }
    },
    playbackRates: [0.5, 1, 1.5, 2]
  }, () => {
    console.log("Video Ready.")
  })
  myPlayer.value.on('play', () => {
  console.log('Video Play...')
})
})

onUnmounted(() => {
  if (myPlayer.value) {
    myPlayer.value.dispose()
  }
})
</script>

<template>
  <p>1.mp4</p>
  <video ref="videoPlayer" class="video-js" style="margin: auto auto"></video>
</template>
