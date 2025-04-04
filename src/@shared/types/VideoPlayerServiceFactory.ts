import { IVideoPlayerService } from '@domain/video/interfaces/IVideoPlayerService'

export type VideoPlayerServiceFactory = (element: HTMLVideoElement) => IVideoPlayerService
