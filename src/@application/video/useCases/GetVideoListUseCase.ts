import { VideoMapper } from '@application/video/mappers/VideoMapper'; // Import du mapper
import { Video } from '@domain/video/entities/Video'
import { IVideoRepository } from '@domain/video/interfaces/IVideoRepository'
import { TYPES } from '@shared/ioc/symbols'
import { inject, injectable } from 'inversify'
import { VideoDto } from '../dtos/VideoDto'

@injectable()
export class GetVideoListUseCase {
  constructor(
    @inject(TYPES.IVideoRepository) private videoRepository: IVideoRepository
  ) {}

  async execute(): Promise<Video[]> {
    const videoDtos: VideoDto[] = await this.videoRepository.getAll()

    // Mapper les DTOs en entités Video
    const videos: Video[] = videoDtos.map(videoDto => VideoMapper.toEntity(videoDto))

    return videos
  }
}
