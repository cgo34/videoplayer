// import { Video } from '@domain/video/entities/Video';
// import { IVideoElementProvider } from '@domain/video/interfaces/IVideoElementProvider';
// import { VideoSource } from '@domain/video/valueObjects/VideoSource';
// import { describe, expect, it, vi } from 'vitest';
// import { VideoPlayerService } from './VideoPlayerService';

// describe('VideoPlayerService', () => {
//   it('should load the video and call onloadedmetadata', async () => {
//     // Mock de l'élément vidéo
//     const mockElement: HTMLVideoElement = {
//       src: '',
//       load: vi.fn(),
//       play: vi.fn(),
//       paused: true,
//       onloadedmetadata: vi.fn(),
//       onerror: vi.fn(),
//       addEventListener: vi.fn((event, callback) => {
//         if (event === 'loadedmetadata') {
//           callback();  // Simuler que l'événement est déclenché
//         }
//       }),
//     } as any; // On cast en HTMLVideoElement

//     // Mock de l'élément provider
//     const mockElementProvider: IVideoElementProvider = {
//       get: () => mockElement,
//     };

//     // Création du service
//     const playerService = new VideoPlayerService(mockElementProvider);

//     // Données mockées pour la vidéo
//     const video = new Video({
//       id: '1',
//       title: 'Sample Video',
//       description: 'Sample Description',
//       source: new VideoSource('/sample.mp4', 'video/mp4', 120),
//     });

//     // Initialisation de l'élément dans le service
//     playerService.setElement(mockElement);

//     // Appel de la méthode load
//     await playerService.load(video);

//     // Vérifier que l'élément a été chargé correctement
//     expect(mockElement.src).toBe('/sample.mp4');
//     expect(mockElement.load).toHaveBeenCalled();
//     expect(mockElement.onloadedmetadata).toHaveBeenCalled(); // Vérifie que l'événement onloadedmetadata a bien été appelé
//   });
// });
