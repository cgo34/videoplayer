export interface VideoSourceProps {
    url: string
    mimeType: string // e.g. 'video/mp4', 'application/x-mpegURL'
    duration?: number
  }
  
  export class VideoSource {
    readonly url: string
    readonly mimeType: string
    readonly duration?: number
  
    constructor(props: VideoSourceProps) {
      this.url = props.url
      this.mimeType = props.mimeType
      this.duration = props.duration
    }
  
    isHLS(): boolean {
      return this.mimeType === 'application/x-mpegURL'
    }
  }
  