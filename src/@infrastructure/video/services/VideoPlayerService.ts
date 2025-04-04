import { AdSlot } from '@domain/video/entities/AdSlot';
import { Video } from '@domain/video/entities/Video';
import { IVideoElementProvider } from '@domain/video/interfaces/IVideoElementProvider';
import { IVideoPlayerService } from '@domain/video/interfaces/IVideoPlayerService';
import { injectable } from 'inversify';

@injectable()
export class VideoPlayerService implements IVideoPlayerService {
  private currentVideo?: Video;
  private element?: HTMLVideoElement;
  private adSlots: AdSlot[] = [];
  private currentAdIndex: number = -1;

  constructor(private elementProvider: IVideoElementProvider) {}

  setElement(element: HTMLVideoElement) {
    this.element = element
  }

  async load(video: Video): Promise<void> {
    this.currentVideo = video
    return new Promise((resolve, reject) => {
      if (this.element) {
        this.element.src = video.source.url
        this.element.load()

        this.element.onloadedmetadata = () => {
          resolve()  // La vidéo est prête
        }

        this.element.onerror = () => {
          reject(new Error('Failed to load video'))
        }
      } else {
        reject(new Error('Element is not set'))
      }
    })
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

  // Vérifier s'il faut afficher une publicité
  checkForAds() {
    const currentTime = this.element?.currentTime || 0;
    
    const nextAdSlot = this.adSlots.find((slot, index) => {
      if (index <= this.currentAdIndex) return false;  // Sauter les pubs déjà passées
      return currentTime >= slot.startTime && currentTime <= slot.endTime;
    });

    if (nextAdSlot) {
      this.showAd(nextAdSlot);
    }
  }

  // Afficher la publicité
  showAd(adSlot: AdSlot) {
    this.pause();  // Suspendre la vidéo

    // Afficher le contenu de la publicité
    console.log(`Showing ad: ${adSlot.content}`);

    // Simuler la durée de la publicité (ici 5 secondes)
    setTimeout(() => {
      this.currentAdIndex++;  // Passer au slot suivant
      this.play();  // Reprendre la vidéo
    }, 5000);  // Durée de la publicité
  }
}
