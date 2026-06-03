/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FREE_STORY_LIMIT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
