// @infrastructure/video/services/VideoPlayerService.test.ts
import { Video } from '@domain/video/entities/Video'
import { IVideoElementProvider } from '@domain/video/interfaces/IVideoElementProvider'
import { VideoSource } from '@domain/video/valueObjects/VideoSource'
import { describe, expect, it, vi } from 'vitest'
import { VideoPlayerService } from './VideoPlayerService'

describe('VideoPlayerService', () => {
  it('should load and play the video', async () => {
    // Mock de l'élément vidéo
    const mockElementProvider = vi.fn<IVideoElementProvider>()
    const mockElement = {
      src: '',
      load: vi.fn(),
      play: vi.fn(),
      paused: true,
    }
    mockElementProvider.mockReturnValue(mockElement)

    const playerService = new VideoPlayerService(mockElementProvider)
    const video = new Video({
      id: '1',
      title: 'Sample Video',
      description: 'Sample Description',
      source: new VideoSource('/sample.mp4', 'video/mp4', 120),
    })

    await playerService.load(video)

    expect(mockElement.src).toBe('/sample.mp4')
    expect(mockElement.load).toHaveBeenCalled()
  })
})
