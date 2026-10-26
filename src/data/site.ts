import type { ContactInfo, NavItem, SocialLink } from '@/types/site'

// Solo datos confirmados. Lo pendiente va a null y se anota en docs/contenido.md.

export const NAV_ITEMS: NavItem[] = [
  { id: 'musica', label: 'Música' },
  { id: 'doblaje', label: 'Doblaje' },
  { id: 'directo', label: 'Directo' },
  { id: 'bio', label: 'Bio' },
  { id: 'contacto', label: 'Contacto' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Spotify', url: 'https://open.spotify.com/intl-es/artist/6iN98G1hjbVKib9xHNvjCQ' },
  { label: 'Instagram', url: null },
  { label: 'YouTube', url: null },
  { label: 'TikTok', url: null },
  { label: 'Apple Music', url: null },
]

export const CONTACT: ContactInfo = {
  email: null,
}
