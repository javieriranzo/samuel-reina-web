export type DubbingCredit = {
  character: string
  production: string
  year: number
  /** Fragmento del demo reel en public/audio/ (p. ej. '/audio/demo-personaje.mp3') */
  clip?: string
  /** Duración del fragmento en segundos (para el timecode) */
  clipSeconds?: number
}

export type Concert = {
  /** ISO 8601 (AAAA-MM-DD) */
  date: string
  city: string
  venue: string
  /** null si aún no hay venta */
  ticketsUrl: string | null
}

export type FeaturedVideo = {
  title: string
  /** ID de YouTube */
  youtubeId: string
}

export type Bio = {
  /** Una o dos frases para cabeceras y metadatos */
  short: string | null
  /** Biografía larga, un elemento por párrafo */
  paragraphs: string[]
}

/** Datos del titular de la web para los textos legales */
export type LegalOwner = {
  name: string | null
  nif: string | null
  address: string | null
  email: string | null
}

/** Almacenamiento que la web usa en el navegador (se lista en /cookies) */
export type BrowserStorageItem = {
  key: string
  type: 'localStorage' | 'sessionStorage'
  purpose: string
  duration: string
}

export type HeroVideo = {
  /** Archivo en public/video/ (p. ej. '/video/hero.mp4'), H.264 */
  mp4: string
  /** Alternativa más ligera para navegadores que la admitan */
  webm?: string
}
