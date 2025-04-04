import { VideoDto } from '@application/video/dtos/VideoDto'
import { IVideoRepository } from '@domain/video/interfaces/IVideoRepository'
import { VideoApiModel } from '../apiModels/VideoApiModel'

export class SupabaseVideoRepository implements IVideoRepository {
  constructor(private readonly _client: any) {}

  private readonly mockVideos: VideoApiModel[] = [
    {
      id: '1',
      title: 'Sample #1',
      description: 'Vidéo de démonstration WebM',
      url: '/sample-1.webm',
      mimeType: 'video/webm',
      duration: 12.5,
      posterUrl: '/thumbnails/sample-1.jpg',
      isPremium: false,
      requiresLogin: false,
      technical: {
        resolution: '720p',
        hasAudioTrack: true,
        bitrate: 800
      }
    },
    {
      id: '2',
      title: 'Sample #2',
      description: 'Vidéo de démonstration MP4',
      url: '/sample-2.mp4',
      mimeType: 'video/mp4',
      duration: 18.7,
      posterUrl: '/thumbnails/sample-2.jpg',
      isPremium: true,
      requiresLogin: true,
      technical: {
        resolution: '1080p',
        hasAudioTrack: true,
        bitrate: 1200
      }
    },
    {
      id: '3',
      title: 'Sample #3',
      description: 'Vidéo de démonstration WebM',
      url: '/sample-3.webm',
      mimeType: 'video/webm',
      duration: 9.3,
      posterUrl: '/thumbnails/sample-3.jpg',
      isPremium: false,
      requiresLogin: false,
      technical: {
        resolution: '480p',
        hasAudioTrack: false,
        bitrate: 600
      }
    },
    {
      id: '4',
      title: 'Sample #4',
      description: 'Vidéo de démonstration MP4',
      url: '/sample-4.mp4',
      mimeType: 'video/mp4',
      duration: 22.4,
      posterUrl: '/thumbnails/sample-4.jpg',
      isPremium: true,
      requiresLogin: false,
      technical: {
        resolution: '4K',
        hasAudioTrack: true,
        bitrate: 2500
      }
    }
  ]

  private toDto(api: VideoApiModel): VideoDto {
    return {
      id: api.id,
      title: api.title,
      description: api.description,
      url: api.url,
      mimeType: api.mimeType,
      duration: api.duration,
      posterUrl: api.posterUrl,
      isPremium: api.isPremium,
      requiresLogin: api.requiresLogin,
      technical: api.technical
    }
  }

  async getById(id: string): Promise<VideoDto | null> {
    const found = this.mockVideos.find(v => v.id === id)
    return found ? this.toDto(found) : null
  }

  async getAll(): Promise<VideoDto[]> {
    return this.mockVideos.map(v => this.toDto(v))
  }
}
