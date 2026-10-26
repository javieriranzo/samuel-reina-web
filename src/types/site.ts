export type NavItem = {
  /** id de la sección de destino (sin #) */
  id: string
  label: string
}

export type SocialLink = {
  label: string
  /** null mientras no esté confirmada: no se muestra */
  url: string | null
}

export type ContactInfo = {
  /** null mientras no esté confirmado */
  email: string | null
}
