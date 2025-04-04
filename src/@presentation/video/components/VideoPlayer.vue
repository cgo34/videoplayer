<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useVideoPlayerState } from '../composables/useVideoPlayerState'
import VideoPlaylist from './VideoPlaylist.vue'

const props = defineProps<{
  showPlaylist?: boolean
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
const { init, loadAndPlay } = useVideoPlayerState()

const playVideo = (id: string) => {
  console.log(`Playing video with ID: ${id}`);
  
  if (videoRef.value) loadAndPlay(id, videoRef.value)
}


onMounted(() => {
  if (videoRef.value) {
    init(videoRef.value)  // Initialiser le player avec l'élément vidéo
    loadAndPlay('1')      // Charger et lire la première vidéo
  }
})
</script>

<template>
  <div class="flex gap-4">
    <!-- 🎞️ Player -->
    <div class="flex-1">
      <video ref="videoRef" controls class="w-full max-w-3xl" />
      <button @click="playVideo">Play Video</button>
    </div>

    <!-- 📜 Playlist (facultative) -->
    <div v-if="props.showPlaylist" class="w-80 border-l pl-4">
      <VideoPlaylist @select="playVideo" />
    </div>
  </div>
</template>