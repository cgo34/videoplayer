import Hls from 'hls.js'

export class HlsJsProvider {
  private hls?: Hls

  attachMedia(url: string, element: HTMLVideoElement): void {
    if (Hls.isSupported()) {
      this.hls = new Hls()
      this.hls.loadSource(url)
      this.hls.attachMedia(element)
    } else if (element.canPlayType('application/x-mpegURL')) {
      element.src = url
    } else {
      throw new Error('HLS is not supported in this browser')
    }
  }

  destroy(): void {
    this.hls?.destroy()
  }
}
