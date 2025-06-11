// @presentation/video/components/VideoPlayer.test.ts
import { fireEvent, render } from '@testing-library/vue'
import { describe, expect, it, vi } from 'vitest'
import VideoPlayer from './VideoPlayer.vue'

describe('VideoPlayer Component', () => {
  it('should trigger playVideo method on button click', async () => {
    // Créer une fonction mock pour playVideo
    const playVideoMock = vi.fn()

    // Rendre le composant et injecter la fonction mock
    const { getByText } = render(VideoPlayer, {
      props: {
        showPlaylist: false // Optionnel, si tu veux masquer la playlist dans le test
      },
      global: {
        mocks: {
          playVideo: playVideoMock
        }
      }
    })

    // Cibler le bouton de lecture vidéo
    const playButton = getByText('Play Video')

    // Simuler un clic sur le bouton
    await fireEvent.click(playButton)

    // Vérifier si playVideo a bien été appelé
    expect(playVideoMock).toHaveBeenCalled()
  })
})
