# 🎬 Video Player — DDD & Clean Architecture (Vue 3 + TS)

Un projet de démonstration d'un lecteur vidéo modulaire, typé et maintenable basé sur la Clean Architecture et DDD.

---

## ✅ Tech Stack
- Vue 3 + Composition API
- TypeScript + Vite
- Clean Architecture + Domain Driven Design
- InversifyJS pour l'IoC
- HLS.js pour le streaming adaptatif
- Supabase (ou toute autre backend interchangeable)

## 📂 Architecture
```
@domain → Entités métier, interfaces, services purs
@application → UseCases, Services, DTOs
@infrastructure → Implémentations concrètes (Supabase, HLS.js)
@presentation → UI Vue + composables
@shared → Typage global, IoC container, design system
```

## 🚀 Lancer le projet
```bash
npm install
npm run dev
```

## 🧱 Arborescence complète du projet

```tree
video-player-ddd-clean/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
├── IMPROVEMENTS.md
├── public/
│   └── sample-video.mp4
└── src/
    ├── main.ts
    ├── App.vue
    ├── @domain/
    │   └── video/
    │       ├── entities/
    │       │   └── Video.ts
    │       ├── valueObjects/
    │       │   └── VideoSource.ts
    │       └── interfaces/
    │           ├── IVideoRepository.ts
    │           ├── IVideoPlayerService.ts
    │           └── IVideoElementProvider.ts
    ├── @application/
    │   └── video/
    │       ├── dtos/
    │       │   └── VideoDto.ts
    │       └── useCases/
    │           ├── LoadVideoUseCase.ts
    │           ├── PlayVideoUseCase.ts
    │           ├── PauseVideoUseCase.ts
    │           ├── TogglePlaybackUseCase.ts
    │           └── GetVideoListUseCase.ts
    ├── @infrastructure/
    │   └── video/
    │       ├── repositories/
    │       │   └── SupabaseVideoRepository.ts
    │       ├── providers/
    │       │   ├── HtmlVideoElementProvider.ts
    │       │   └── HlsJsProvider.ts
    │       └── apiModels/
    │           └── VideoApiModel.ts
    ├── @presentation/
    │   └── video/
    │       ├── components/
    │       │   └── VideoPlayer.vue
    │       ├── composables/
    │       │   └── useVideoPlayerState.ts
    │       └── pages/
    │           └── VideoPlayerPage.vue
    └── @shared/
        ├── types/
        │   └── global.d.ts
        ├── design-system/
        │   └── Button.vue
        └── ioc/
            ├── container.ts
            └── symbols.ts
```

---

## Auteur
Made with ❤️ by [CGO34]

