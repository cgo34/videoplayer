import { Video } from '@domain/video/entities/Video';
import { IVideoElementProvider } from '@domain/video/interfaces/IVideoElementProvider';
import { IVideoPlayerService } from '@domain/video/interfaces/IVideoPlayerService';
import { injectable } from 'inversify';

@injectable()
export class VideoPlayerService implements IVideoPlayerService {
  private currentVideo?: Video;
  private element?: HTMLVideoElement;

  constructor(private elementProvider: IVideoElementProvider) {}

  setElement(element: HTMLVideoElement) {
    this.element = element;
  }

  async load(video: Video): Promise<void> {
    this.currentVideo = video;
    return new Promise((resolve, reject) => {
      if (this.element) {
        this.element.src = video.source.url;
        this.element.load();

        this.element.onloadedmetadata = () => {
          resolve();  // La vidéo est prête
        };

        this.element.onerror = () => {
          reject(new Error('Failed to load video'));
        };
      } else {
        reject(new Error('Element is not set'));
      }
    });
  }

  play(): void {
    if (this.element) this.element.play();
  }

  pause(): void {
    if (this.element) this.element.pause();
  }

  toggle(): void {
    if (this.element) {
      this.element.paused ? this.element.play() : this.element.pause();
    }
  }

  isPlaying(): boolean {
    return this.element ? !this.element.paused : false;
  }
}
