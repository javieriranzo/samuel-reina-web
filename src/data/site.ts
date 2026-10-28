import type { ContactInfo, NavItem, Scene, SocialLink } from '@/types/site'

// Solo datos confirmados. Lo pendiente va a null y se anota en docs/contenido.md.

export const NAV_ITEMS: NavItem[] = [
  { id: 'musica', label: 'Música' },
  { id: 'doblaje', label: 'Doblaje' },
  { id: 'directo', label: 'Directo' },
  { id: 'bio', label: 'Bio' },
  { id: 'contacto', label: 'Contacto' },
]

// Escenas de la línea de montaje de la home, en orden de aparición (id de cada sección)
export const HOME_SCENES: Scene[] = [
  { id: 'lanzamiento', label: 'Último lanzamiento' },
  { id: 'musica', label: 'Música' },
  { id: 'doblaje', label: 'Doblaje' },
  { id: 'directo', label: 'En directo' },
  { id: 'bio', label: 'Manifiesto' },
  { id: 'contacto', label: 'Contacto' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Spotify',
    url: 'https://open.spotify.com/intl-es/artist/6iN98G1hjbVKib9xHNvjCQ',
    streaming: true,
  },
  { label: 'Instagram', url: null, streaming: false },
  { label: 'YouTube', url: null, streaming: true },
  { label: 'TikTok', url: null, streaming: false },
  { label: 'Apple Music', url: null, streaming: true },
]

export const CONTACT: ContactInfo = {
  email: null,
}
