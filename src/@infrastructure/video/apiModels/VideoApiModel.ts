export interface VideoApiModel {
    id: string
    title: string
    description: string
    url: string
    mimeType: string
    duration: number
    posterUrl?: string
    isPremium?: boolean
    requiresLogin?: boolean
    technical?: {
      resolution?: string
      hasAudioTrack?: boolean
      bitrate?: number
    }
  }