// @application/video/useCases/LoadVideoUseCase.test.ts
import { VideoDto } from '@application/video/dtos/VideoDto'
import { IVideoPlayerService } from '@domain/video/interfaces/IVideoPlayerService'
import { IVideoRepository } from '@domain/video/interfaces/IVideoRepository'
import { describe, expect, it, vi } from 'vitest'
import { LoadVideoUseCase } from './LoadVideoUseCase'

// Mock des dépendances
const mockRepository = vi.fn<IVideoRepository>()
const mockPlayerService = vi.fn<IVideoPlayerService>()

describe('LoadVideoUseCase', () => {
  it('should load and play a video', async () => {
    // Crée un mock pour le DTO
    const videoDto: VideoDto = {
      id: '1',
      title: 'Sample Video',
      description: 'Sample Description',
      url: '/sample.mp4',
      mimeType: 'video/mp4',
      duration: 120,
    }

    // Simule le comportement du repository pour retourner un VideoDto
    mockRepository.getById = vi.fn().mockResolvedValue(videoDto)
    
    const useCase = new LoadVideoUseCase(mockRepository, mockPlayerService)
    useCase.setPlayerService(mockPlayerService)

    await useCase.execute('1')

    // Vérifie que la méthode de lecture a été appelée avec la bonne vidéo
    expect(mockPlayerService.load).toHaveBeenCalledWith({
      id: '1',
      title: 'Sample Video',
      description: 'Sample Description',
      source: {
        url: '/sample.mp4',
        mimeType: 'video/mp4',
        duration: 120,
      },
    })
  })
})
