<script setup lang="ts">
import VideoPlayer from '../components/VideoPlayer.vue'
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">🎬 Lecteur Vidéo</h1>
    <VideoPlayer :showPlaylist="true" />
  </div>
</template>
