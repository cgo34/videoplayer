import { VideoDto } from '@application/video/dtos/VideoDto'

export interface IVideoRepository {
  getAll(): Promise<VideoDto[]>
  getById(id: string): Promise<VideoDto | null>
}