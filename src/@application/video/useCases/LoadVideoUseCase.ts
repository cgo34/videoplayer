import { VideoMapper } from '@application/video/mappers/VideoMapper'; // Import du mapper
import { IVideoPlayerService } from '@domain/video/interfaces/IVideoPlayerService';
import { IVideoRepository } from '@domain/video/interfaces/IVideoRepository';
import { TYPES } from '@shared/ioc/symbols';
import { inject, injectable } from 'inversify';

@injectable()
export class LoadVideoUseCase {
  constructor(
    @inject(TYPES.IVideoRepository) private videoRepository: IVideoRepository,
    @inject(TYPES.VideoPlayerService) private playerService: IVideoPlayerService // Injection du service ici
  ) {}

  async execute(videoId: string): Promise<void> {
    // Vérifier si le service est bien initialisé (en théorie il devrait l'être si bien injecté)
    if (!this.playerService)
        throw new Error('PlayerService not initialized')

    // Charger le DTO depuis le repository
    const videoDto = await this.videoRepository.getById(videoId)

    if (!videoDto)
        throw new Error('Video not found')

    // Utiliser le mapper pour convertir le DTO en entité
    const video = VideoMapper.toEntity(videoDto)

    // Charger et jouer la vidéo
    await this.playerService.load(video)

    console.log('Video loaded:', video);
    

    // Lecture immédiate
    this.playerService.play()
  }
}
