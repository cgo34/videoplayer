import { IVideoPlayerService } from '@domain/video/interfaces/IVideoPlayerService'
import { TYPES } from '@shared/ioc/symbols'
import { inject, injectable } from 'inversify'

@injectable()
export class PauseVideoUseCase {
  constructor(
    @inject(TYPES.IVideoPlayerService) private playerService: IVideoPlayerService
  ) {}

  execute(): void {
    this.playerService.pause()
  }
}
