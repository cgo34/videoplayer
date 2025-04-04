import { Container } from 'inversify'
import 'reflect-metadata'
import { TYPES } from './symbols'

import { GetVideoListUseCase } from '@application/video/useCases/GetVideoListUseCase'
import { LoadVideoUseCase } from '@application/video/useCases/LoadVideoUseCase'
import { PauseVideoUseCase } from '@application/video/useCases/PauseVideoUseCase'
import { PlayVideoUseCase } from '@application/video/useCases/PlayVideoUseCase'
import { TogglePlaybackUseCase } from '@application/video/useCases/TogglePlaybackUseCase'

import { IVideoRepository } from '@domain/video/interfaces/IVideoRepository'
import { SupabaseVideoRepository } from '@infrastructure/video/repositories/SupabaseVideoRepository'

import { IVideoPlayerService } from '@domain/video/interfaces/IVideoPlayerService'
import { VideoPlayerService } from '@infrastructure/video/services/VideoPlayerService'

import { InitPlayerUseCase } from '@application/video/useCases/InitPlayerUseCase'
import { IVideoElementProvider } from '@domain/video/interfaces/IVideoElementProvider'
import { VideoElementProvider } from '@infrastructure/video/providers/VideoElementProvider'

const container = new Container()

// 🧪 Supabase mock temporaire
const mockSupabase = {}

container.bind<IVideoRepository>(TYPES.IVideoRepository).toDynamicValue(() => {
  return new SupabaseVideoRepository(mockSupabase)
})

container.bind<IVideoElementProvider>(TYPES.VideoElementProvider).to(VideoElementProvider).inSingletonScope()


// 🛠️ Bind générique par défaut (ne sera pas utilisé directement mais sert pour les autres useCases si besoin)
// container.bind<IVideoPlayerService>(TYPES.IVideoPlayerService).toDynamicValue(() => {
//   const dummy = document.createElement('video')
//   return new VideoPlayerService(dummy)
// })
container.bind<IVideoPlayerService>(TYPES.VideoPlayerService).to(VideoPlayerService).inSingletonScope() // Vous n'avez pas besoin de créer un élément vidéo par défaut ici


// ✅ Bind UseCases avec leurs TYPES respectifs
container.bind<GetVideoListUseCase>(TYPES.GetVideoListUseCase).to(GetVideoListUseCase)
container.bind<InitPlayerUseCase>(TYPES.InitPlayerUseCase).to(InitPlayerUseCase)
container.bind<LoadVideoUseCase>(TYPES.LoadVideoUseCase).to(LoadVideoUseCase)
container.bind<TogglePlaybackUseCase>(TYPES.TogglePlaybackUseCase).to(TogglePlaybackUseCase)
container.bind<PlayVideoUseCase>(TYPES.PlayVideoUseCase).to(PlayVideoUseCase)
container.bind<PauseVideoUseCase>(TYPES.PauseVideoUseCase).to(PauseVideoUseCase)

// 🏭 Factory dynamique pour instancier un player à partir du DOM
// container
//   .bind<VideoPlayerServiceFactory>(TYPES.VideoPlayerServiceFactory)
//   .toFactory<VideoPlayerServiceFactory>(() => {
//     return (element: HTMLVideoElement) => {
//       const provider = new VideoElementProvider(element)
//       return new VideoPlayerService(provider)
//     }
//   })

export { container }

