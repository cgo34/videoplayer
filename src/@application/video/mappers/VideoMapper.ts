import { VideoDto } from '@application/video/dtos/VideoDto'
import { Video } from '@domain/video/entities/Video'
import { VideoSource } from '@domain/video/valueObjects/VideoSource'

export class VideoMapper {
  static toEntity(dto: VideoDto): Video {
    return new Video({
      id: dto.id,
      title: dto.title,
      description: dto.description,
      source: new VideoSource({
        url: dto.url,
        mimeType: dto.mimeType,
        duration: dto.duration
      }),  // Créer une instance VideoSource
      posterUrl: dto.posterUrl,
      isPremium: dto.isPremium,
      requiresLogin: dto.requiresLogin,
      technical: dto.technical
    })
  }
}
