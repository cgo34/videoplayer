# 🛠️ Améliorations futures — Video Player DDD Clean

--- 

## 🔧 Technique / Architecture

- [ ] Refactorer `useVideoPlayerState` pour injecter les services sans passer par `.constructor()` (ex: factory propre ou injection via setup)
- [ ] Ajouter des tests unitaires sur les UseCases et services
- [ ] Ajouter une interface `IVideoStorageProvider` pour rendre le backend interchangeable (Firebase, API .NET, etc.)
- [ ] Ajouter une factory pour créer dynamiquement un `VideoPlayerService` avec le bon `VideoElementProvider`
- [ ] Extraire le provider HLS dans une interface (`IVideoStreamProvider`)


## 🎥 Fonctionnalités

- [ ] Ajouter un système de playlist
- [ ] Ajouter le support du "picture-in-picture"
- [ ] Intégrer un système d’analytics (temps de lecture, abandon, etc.)
- [ ] Ajouter un contrôle de volume, seek bar personnalisée, fullscreen
- [ ] Supporter le ABR complet (Adaptive Bitrate Switching)


## 🌍 UI/UX

- [ ] Ajouter un thème sombre
- [ ] Ajouter une UI minimaliste type Netflix (voir projet HipHopedia)
- [ ] Intégrer le lecteur dans une application type dashboard (backoffice vidéo, CMS, etc.)
