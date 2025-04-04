// src/@presentation/videos/types/VideoViewModel.ts
export type VideoViewModel = {
    id: string
    title: string
    description: string
    url: string
    mimeType: string
    duration: number
    isPlaying: boolean
    isSelected: boolean
    posterUrl?: string
    isPremium?: boolean
    requiresLogin?: boolean
    technical?: {
      resolution?: string
      hasAudioTrack?: boolean
      bitrate?: number
    }
  }
  