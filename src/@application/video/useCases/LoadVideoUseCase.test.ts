import { VideoDto } from '@application/video/dtos/VideoDto'
import { IVideoPlayerService } from '@domain/video/interfaces/IVideoPlayerService'
import { IVideoRepository } from '@domain/video/interfaces/IVideoRepository'
import { container } from '@shared/ioc/container'
import { TYPES } from '@shared/ioc/symbols'
import { describe, expect, it, vi } from 'vitest'
import { LoadVideoUseCase } from './LoadVideoUseCase'

describe('LoadVideoUseCase', () => {
  it('should load and play a video', async () => {
    const videoDto: VideoDto = {
      id: '1',
      title: 'Sample Video',
      description: 'Sample Description',
      url: '/sample.mp4',
      mimeType: 'video/mp4',
      duration: 120,
    }

    const mockRepository = {
      getById: vi.fn().mockResolvedValue(videoDto)
    } as unknown as IVideoRepository

    // Mocker un service de lecture vidéo
    const mockPlayerService = {
      load: vi.fn(),
      play: vi.fn(),
      setElement: vi.fn(),
    } as unknown as IVideoPlayerService

    // Ajoute les mocks au container
    container.rebind(TYPES.IVideoRepository).toConstantValue(mockRepository)
    container.rebind(TYPES.VideoPlayerService).toConstantValue(mockPlayerService)

    // Récupère l'instance du UseCase via Inversify
    const loadVideoUseCase = container.get<LoadVideoUseCase>(TYPES.LoadVideoUseCase)

    // Appel à la méthode exécutée du UseCase
    await loadVideoUseCase.execute('1')

    // Inspecte l'objet passé pour vérifier la comparaison
    expect(mockPlayerService.load).toHaveBeenCalledWith(expect.objectContaining({
      id: '1',
      title: 'Sample Video',
      description: 'Sample Description',
      source: expect.objectContaining({
        url: '/sample.mp4',
        mimeType: 'video/mp4',
        duration: 120,
      }),
    }))

    // Vérifie que la méthode play a bien été appelée après le chargement
    expect(mockPlayerService.play).toHaveBeenCalled()
  })
})
