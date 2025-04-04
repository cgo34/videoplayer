// @presentation/video/components/VideoPlayer.test.ts
import { fireEvent, render } from '@testing-library/vue'
import { vi } from 'vitest'
import VideoPlayer from './VideoPlayer.vue'

describe('VideoPlayer Component', () => {
  it('should trigger play on toggle', async () => {
    const { getByText } = render(VideoPlayer)

    const toggleButton = getByText('Toggle Play')
    await fireEvent.click(toggleButton)

    // Vérifie que la méthode toggle a bien été appelée
    expect(vi.fn().toggle).toHaveBeenCalled()
  })
})
