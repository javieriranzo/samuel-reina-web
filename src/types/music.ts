export type Track = {
  title: string
  /** Formato m:ss */
  duration: string
  featuring?: string
  spotifyUrl?: string
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
}
