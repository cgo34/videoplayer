import { GetVideoListUseCase } from '@application/video/useCases/GetVideoListUseCase'
import { container } from '@shared/ioc/container'
import { TYPES } from '@shared/ioc/symbols'
import { ref } from 'vue'
import { VideoMapper } from '../mappers/VideoMapper'
import { VideoViewModel } from '../types/VideoViewModel'

const videos = ref<VideoViewModel[]>([])

export function useVideoPlaylistState() {
  const getVideoListUseCase = container.get<GetVideoListUseCase>(TYPES.GetVideoListUseCase)

  async function loadPlaylist() {
    const videoDtos = await getVideoListUseCase.execute();
    videos.value = VideoMapper.toViewModels(videoDtos);
  }

  return {
    videos,
    loadPlaylist
  }
}
