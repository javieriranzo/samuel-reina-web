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

// Mantener sincronizado con las claves usadas en src/lib/ (storage.ts, intro.ts)
export const BROWSER_STORAGE: BrowserStorageItem[] = [
  {
    key: 'sr:intro-seen',
    type: 'sessionStorage',
    purpose: 'No repetir la intro en la misma visita.',
    duration: 'Hasta cerrar la pestaña',
  },
]
