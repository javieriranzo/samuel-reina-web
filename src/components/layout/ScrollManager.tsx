import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { useLenis } from '@/hooks/useLenis'

const MAX_ATTEMPTS = 20

/**
 * Scroll al navegar: arriba al cambiar de página y a la sección indicada en `#ancla`
 * (también al llegar desde otra página, esperando a que la sección exista).
 */
export function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    if (!hash) {
      if (lenis) {
        lenis.resize()
        lenis.scrollTo(0, { immediate: true, force: true })
      } else window.scrollTo(0, 0)
      return
    }

    const id = decodeURIComponent(hash.slice(1))
    let timer = 0
    const scrollToTarget = (attempt: number) => {
      const target = document.getElementById(id)
      if (!target) {
        if (attempt < MAX_ATTEMPTS) timer = window.setTimeout(() => scrollToTarget(attempt + 1), 50)
        return
      }
      if (lenis) {
        // Lenis guarda la altura de la página anterior: recalcular antes de desplazarse.
        // El hueco de la cabecera lo da `scroll-margin-top` (global.css), que Lenis respeta.
        // force: el menú móvil detiene Lenis mientras se cierra.
        lenis.resize()
        lenis.scrollTo(target, { force: true })
      } else {
        target.scrollIntoView()
      }
    }
    scrollToTarget(0)
    return () => window.clearTimeout(timer)
  }, [pathname, hash, key, lenis])

  return null
}
