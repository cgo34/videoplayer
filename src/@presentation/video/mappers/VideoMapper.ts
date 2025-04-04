// src/@presentation/videos/mappers/VideoMapper.ts
import { Video } from '@domain/video/entities/Video';
import { VideoViewModel } from '../types/VideoViewModel';

export class VideoMapper {
  static toViewModel(video: Video): VideoViewModel {
    return {
      id: video.id,
      title: video.title,
      description: video.description,
      url: video.source.url,
      mimeType: video.source.mimeType,
      duration: video.source.duration || 0,  // Default to 0 if duration is undefined
      isPlaying: false,        // Par défaut, la vidéo ne joue pas
      isSelected: false,       // Par défaut, la vidéo n'est pas sélectionnée
      posterUrl: video.posterUrl,
      isPremium: video.isPremium,
      requiresLogin: video.requiresLogin,
      technical: video.technical
    };
  }

  static toViewModels(videos: Video[]): VideoViewModel[] {
    return videos.map(this.toViewModel);
  }
}
