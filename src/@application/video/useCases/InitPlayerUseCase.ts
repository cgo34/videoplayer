import { IVideoPlayerService } from '@domain/video/interfaces/IVideoPlayerService'
import { TYPES } from '@shared/ioc/symbols'
import { inject, injectable } from 'inversify'

@injectable()
export class InitPlayerUseCase {
  constructor(
    @inject(TYPES.VideoPlayerService) private playerService: IVideoPlayerService
  ) {}

  async execute(videoElement: HTMLVideoElement): Promise<void> {
    // Initialise l'élément dans le playerService
    this.playerService.setElement(videoElement)
  }
}
