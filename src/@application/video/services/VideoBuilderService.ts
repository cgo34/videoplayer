// video-player-ddd-clean/src/application/video/services/VideoBuilderService.ts
import { VideoDto } from '@application/video/dtos/VideoDto'
import { Video } from '@domain/video/entities/Video'
import { VideoSource } from '@domain/video/valueObjects/VideoSource'

export class VideoBuilderService {
  async fromDto(dto: VideoDto): Promise<Video> {
    const source = new VideoSource({
      url: dto.url,
      mimeType: dto.mimeType,
      duration: dto.duration
    })

    return new Video({
      id: dto.id,
      title: dto.title,
      description: dto.description,
      source,
      posterUrl: dto.posterUrl,
      isPremium: dto.isPremium,
      requiresLogin: dto.requiresLogin,
      technical: dto.technical
    })
  }

  async fromDtos(dtos: VideoDto[]): Promise<Video[]> {
    return Promise.all(dtos.map(dto => this.fromDto(dto)))
  }
}
