<script setup lang="ts">
import { onMounted } from 'vue'
import { useVideoPlaylistState } from '../composables/useVideoPlaylistState'

const emit = defineEmits<{
  (e: 'select', videoId: string): void
}>()

const { videos, loadPlaylist } = useVideoPlaylistState()

onMounted(loadPlaylist)
</script>

<template>
  <div>
    <h2 class="text-lg font-semibold mb-2">📺 Playlist</h2>
    <ul class="space-y-2">
      <li
        v-for="video in videos"
        :key="video.id"
        class="cursor-pointer hover:bg-gray-100 p-2 rounded"
        @click="emit('select', video.id)"
      >
        <div class="font-medium">{{ video.title }}</div>
        <div class="text-sm text-gray-500">{{ video.duration }} sec</div>
      </li>
    </ul>
  </div>
</template>