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
