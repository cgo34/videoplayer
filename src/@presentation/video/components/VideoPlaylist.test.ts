// @presentation/video/components/VideoPlaylist.test.ts
import { fireEvent, render } from '@testing-library/vue'
import { describe, expect, it, vi } from 'vitest'
import VideoPlayer from './VideoPlayer.vue'; // Si ce n'est pas le même fichier, adapte le nom
import VideoPlaylist from './VideoPlaylist.vue'

describe('VideoPlaylist Component', () => {
  it('should trigger playVideo method when a video is selected from the playlist', async () => {
    // Mock des données de vidéos de la playlist
    const mockVideos = [
      { id: '1', title: 'Sample Video 1', duration: 120 },
      { id: '2', title: 'Sample Video 2', duration: 90 },
    ]

    // Mock du composable useVideoPlaylistState pour fournir les vidéos
    const mockLoadPlaylist = vi.fn()
    const mockEmit = vi.fn()

    // Render du composant VideoPlayer avec la playlist
    const { getByText } = render(VideoPlayer, {
      global: {
        components: {
          VideoPlaylist
        },
        mocks: {
          // Injection des vidéos mockées
          useVideoPlaylistState: () => ({
            videos: mockVideos,
            loadPlaylist: mockLoadPlaylist
          })
        }
      }
    })

    // Simule un clic sur une vidéo de la playlist
    const videoItem = getByText('Sample Video 1')
    await fireEvent.click(videoItem)

    // Vérifie que la méthode playVideo a bien été appelée
    expect(mockEmit).toHaveBeenCalledWith('select', '1')

    // Vérifie que le service de vidéo reçoit bien l'ID de la vidéo sélectionnée
    // Cela implique que tu devras tester le comportement du composant VideoPlayer qui se charge et joue la vidéo
  })
})
