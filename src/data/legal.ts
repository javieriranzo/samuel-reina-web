import type { BrowserStorageItem, LegalOwner } from '@/types/career'

// Datos del titular: pendientes. Los textos legales son un borrador hasta su revisión.
export const LEGAL_OWNER: LegalOwner = {
  name: null,
  nif: null,
  address: null,
  email: null,
}

/** Fecha de la última revisión de los textos legales (ISO), null mientras sean borrador. */
export const LEGAL_REVIEWED_AT: string | null = null

// Mantener sincronizado con las claves usadas en src/lib/ (storage.ts, intro.ts) y SoundToggle
export const BROWSER_STORAGE: BrowserStorageItem[] = [
  {
    key: 'sr:sound',
    type: 'localStorage',
    purpose: 'Recordar si has activado el sonido de la web.',
    duration: 'Hasta que borres los datos del navegador',
  },
  {
    key: 'sr:intro-seen',
    type: 'sessionStorage',
    purpose: 'No repetir la intro en la misma visita.',
    duration: 'Hasta cerrar la pestaña',
  },
  {
    key: 'sr:greeting-played',
    type: 'sessionStorage',
    purpose: 'No repetir el saludo de audio en la misma visita.',
    duration: 'Hasta cerrar la pestaña',
  },
]
