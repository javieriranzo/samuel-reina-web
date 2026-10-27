export type Track = {
  title: string
  /** Formato m:ss */
  duration: string
  featuring?: string
  spotifyUrl?: string
  /** Fragmento en public/audio/ (p. ej. '/audio/bodypump-cofrade.mp3') */
  preview?: string
}

export type Release = {
  id: string
  title: string
  /** false mientras el título no esté confirmado por el artista (ver docs/contenido.md) */
  titleConfirmed: boolean
  year: number
  /** ISO 8601 (AAAA-MM-DD) */
  releaseDate: string
  cover: string
  /** Temas conocidos; no necesariamente el listado completo */
  highlightedTracks: Track[]
  /** Listado completo, cuando se reciba */
  tracklist?: Track[]
  /** Enlace al disco en Spotify (si no, se usa el perfil del artista) */
  spotifyUrl?: string
  /** Texto sobre el disco (créditos, contexto) */
  description?: string
}
