import type { RefObject } from 'react'
import { gsap, ScrollTrigger, SplitText, useGSAP } from './gsap'

/**
 * Entradas al hacer scroll dentro de `scope`, una sola vez:
 * - `[data-reveal-title]`: titulares que suben línea a línea desde una máscara.
 * - `[data-reveal]`: resto del contenido, solo opacidad.
 * Sin efecto con movimiento reducido.
 */
export function useReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const items = gsap.utils.toArray<HTMLElement>('[data-reveal]')
        gsap.set(items, { autoAlpha: 0 })
        ScrollTrigger.batch(items, {
          start: 'top 88%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { autoAlpha: 1, duration: 0.9, ease: 'power2.out', stagger: 0.06 }),
        })

        gsap.utils.toArray<HTMLElement>('[data-reveal-title]').forEach((title) => {
          // autoSplit vuelve a partir las líneas al cargar las fuentes o cambiar el ancho
          SplitText.create(title, {
            type: 'lines',
            mask: 'lines',
            autoSplit: true,
            onSplit: (split) =>
              gsap.from(split.lines, {
                yPercent: 110,
                duration: 1.2,
                ease: 'power4.out',
                stagger: 0.1,
                scrollTrigger: { trigger: title, start: 'top 85%', once: true },
              }),
          })
        })
      })
      return () => mm.revert()
    },
    { scope },
  )
}
