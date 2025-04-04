import { Video } from '../entities/Video'

export interface IVideoPlayerService {
  setElement(element: HTMLVideoElement): void
  load(video: Video): Promise<void>
  play(): void
  pause(): void
  toggle(): void
  isPlaying(): boolean
}
