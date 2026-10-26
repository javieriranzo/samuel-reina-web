import { useEffect, type ReactNode } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { gsap, ScrollTrigger } from '@/animations/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

type Props = { children: ReactNode }

/** Scroll suave con Lenis, sincronizado con ScrollTrigger. Nativo si hay movimiento reducido. */
export function SmoothScroll({ children }: Props) {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const lenis = new Lenis({ lerp: 0.1 })
    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      gsap.ticker.lagSmoothing(500, 33)
      lenis.destroy()
    }
  }, [reducedMotion])

  return children
}
