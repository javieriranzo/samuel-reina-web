import type { RefObject } from 'react'
import { gsap, ScrollTrigger, useGSAP } from './gsap'

/**
 * Entrada al hacer scroll para los elementos `[data-reveal]` dentro de `scope`:
 * suben y aparecen en cascada. Sin efecto con movimiento reducido.
 */
export function useReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const items = gsap.utils.toArray<HTMLElement>('[data-reveal]')
        gsap.set(items, { autoAlpha: 0, y: 40 })
        ScrollTrigger.batch(items, {
          start: 'top 88%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              stagger: 0.08,
            }),
        })
      })
      return () => mm.revert()
    },
    { scope },
  )
}
