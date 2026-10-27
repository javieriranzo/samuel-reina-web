import { useEffect } from 'react'

const SITE = 'Samuel Reina'
const DEFAULT_TITLE = 'Samuel Reina — Cantante y actor de doblaje'
const DEFAULT_DESCRIPTION =
  'Web oficial de Samuel Reina, cantante y actor de doblaje. Música, doblaje, conciertos y contacto.'

/** Título y descripción del documento para la página actual (null: los de la home). */
export function usePageMeta(title: string | null, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE}` : DEFAULT_TITLE
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description ?? DEFAULT_DESCRIPTION)
  }, [title, description])
}
