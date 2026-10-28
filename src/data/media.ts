import type { FeaturedVideo, HeroVideo } from '@/types/career'

// Pendiente: videoclip o actuación destacada (ver docs/contenido.md).
export const FEATURED_VIDEO: FeaturedVideo | null = null

// Pendiente: fragmento de 10–20 s del videoclip de «Tango Suite Pandiman», sin sonido,
// en public/video/ (p. ej. { mp4: '/video/hero.mp4', webm: '/video/hero.webm' }).
// Mientras sea null, la portada muestra la foto.
export const HERO_VIDEO: HeroVideo | null = null

// Pendiente: saludo grabado por Samuel, en public/audio/ (p. ej. '/audio/saludo.mp3').
// Suena la primera vez que el usuario activa el sonido en cada sesión.
export const GREETING_AUDIO: string | null = null
