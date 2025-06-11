import { InitPlayerUseCase } from '@application/video/useCases/InitPlayerUseCase'
import { LoadVideoUseCase } from '@application/video/useCases/LoadVideoUseCase'
import { PlayVideoUseCase } from '@application/video/useCases/PlayVideoUseCase'
import { TogglePlaybackUseCase } from '@application/video/useCases/TogglePlaybackUseCase'
import { container } from '@shared/ioc/container'
import { TYPES } from '@shared/ioc/symbols'
import { ref } from 'vue'

export function useVideoPlayerState() {
  const initPlayerUseCase = container.get<InitPlayerUseCase>(TYPES.InitPlayerUseCase)
  const loadVideoUseCase = container.get<LoadVideoUseCase>(TYPES.LoadVideoUseCase)
  const playVideoUseCase = container.get<PlayVideoUseCase>(TYPES.PlayVideoUseCase)
  const togglePlaybackUseCase = container.get<TogglePlaybackUseCase>(TYPES.TogglePlaybackUseCase)

  const _currentVideo = ref<string | null>(null)

//   const playerService = container.get<IVideoPlayerService>(TYPES.VideoPlayerService)

  async function init(videoElement: HTMLVideoElement) {
    // Initialiser le player avec l'élément vidéo
    await initPlayerUseCase.execute(videoElement)
  }

  async function loadAndPlay(videoId: string) {
    // Charger la vidéo et la lire
    await loadVideoUseCase.execute(videoId)
    _currentVideo.value = videoId
    playVideoUseCase.execute()
    // togglePlaybackUseCase.execute()
  }

  return {
    init,
    loadAndPlay
  }
}
