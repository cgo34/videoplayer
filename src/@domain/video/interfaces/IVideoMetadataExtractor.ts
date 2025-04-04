export interface VideoMetadata {
    mimeType: string
    duration: number
  }
  
  export interface IVideoMetadataExtractor {
    extract(url: string): Promise<VideoMetadata>
  }
  