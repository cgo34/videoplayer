import { VideoSource } from '../valueObjects/VideoSource';
import { AdSlot } from './AdSlot';

export interface VideoTechnicalMetadata {
  resolution?: string
  hasAudioTrack?: boolean
  bitrate?: number
}

export interface VideoProps {
  id: string
  title: string
  description: string
  source: VideoSource
  posterUrl?: string
  isPremium?: boolean
  requiresLogin?: boolean
  technical?: VideoTechnicalMetadata
  adSlots?: AdSlot[];
}

export class Video {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly source: VideoSource
  readonly posterUrl?: string
  readonly isPremium?: boolean
  readonly requiresLogin?: boolean
  readonly technical?: VideoTechnicalMetadata
  readonly adSlots: AdSlot[] = [];

  constructor(props: VideoProps) {
    this.id = props.id
    this.title = props.title
    this.description = props.description
    this.source = props.source
    this.posterUrl = props.posterUrl
    this.isPremium = props.isPremium
    this.requiresLogin = props.requiresLogin
    this.technical = props.technical
    this.adSlots = props.adSlots || [];
  }
}