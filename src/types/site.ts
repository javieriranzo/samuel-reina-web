export type NavItem = {
  /** id de la sección de destino (sin #) */
  id: string
  label: string
}

export type SocialLink = {
  label: string
  /** null mientras no esté confirmada: no se muestra */
  url: string | null
  /** Plataforma para escuchar música (se muestra en los lanzamientos) */
  streaming: boolean
}

export type ContactInfo = {
  /** null mientras no esté confirmado */
  email: string | null
}
