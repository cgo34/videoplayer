import { IVideoPlayerService } from '@domain/video/interfaces/IVideoPlayerService'
import { TYPES } from '@shared/ioc/symbols'
import { inject, injectable } from 'inversify'

@injectable()
export class PlayVideoUseCase {
  constructor(
    @inject(TYPES.VideoPlayerService) private playerService: IVideoPlayerService
  ) {}

  execute(): void {
    this.playerService.play()
  }
}
