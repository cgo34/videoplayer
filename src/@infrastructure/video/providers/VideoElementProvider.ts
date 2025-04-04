// src/infrastructure/video/providers/VideoElementProvider.ts
import { IVideoElementProvider } from '@domain/video/interfaces/IVideoElementProvider'
import { injectable } from 'inversify'

@injectable()
export class VideoElementProvider implements IVideoElementProvider {
  constructor(private element: HTMLVideoElement) {}

  get(): HTMLVideoElement {
    return this.element
  }
}
