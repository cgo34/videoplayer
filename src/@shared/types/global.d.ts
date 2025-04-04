// Permet d'étendre des types globaux ou d'ajouter des définitions spécifiques

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  