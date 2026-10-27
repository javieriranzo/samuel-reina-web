import { useEffect, useState, type ReactNode } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { gsap, ScrollTrigger } from '@/animations/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { LenisContext } from '@/lib/contexts'

type Props = { children: ReactNode }

/** Scroll suave con Lenis, sincronizado con ScrollTrigger. Nativo si hay movimiento reducido. */
export function SmoothScroll({ children }: Props) {
  const reducedMotion = useReducedMotion()
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    if (reducedMotion) return

    const instance = new Lenis({ lerp: 0.1 })
    instance.on('scroll', ScrollTrigger.update)

    const tick = (time: number) => instance.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    // Lenis es un sistema externo creado aquí: hay que publicarlo tras crearlo.
    // oxlint-disable-next-line react/set-state-in-effect
    setLenis(instance)

    return () => {
      gsap.ticker.remove(tick)
      gsap.ticker.lagSmoothing(500, 33)
      instance.destroy()
      setLenis(null)
    }
  }, [reducedMotion])

  return <LenisContext value={lenis}>{children}</LenisContext>
}
