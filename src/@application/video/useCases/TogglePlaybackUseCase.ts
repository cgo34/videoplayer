import { IVideoPlayerService } from "@domain/video/interfaces/IVideoPlayerService"
import { injectable } from "inversify"

@injectable()
export class TogglePlaybackUseCase {
  private playerService?: IVideoPlayerService

  setPlayerService(playerService: IVideoPlayerService) {
    this.playerService = playerService
  }

  execute(): void {
    if (!this.playerService) throw new Error('PlayerService not initialized')
    this.playerService.toggle()
  }
}
