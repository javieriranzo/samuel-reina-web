import { useEffect, useState } from 'react'
import { useLenis } from '@/hooks/useLenis'
import { MAIN_ID } from '@/lib/dom'
import './BackToTop.css'

/** Botón fijo para volver al principio, visible tras bajar más de una pantalla. */
export function BackToTop() {
  const lenis = useLenis()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onClick = () => {
    // Sin Lenis (movimiento reducido), salto directo
    if (lenis) lenis.scrollTo(0, { force: true })
    else window.scrollTo(0, 0)
    document.getElementById(MAIN_ID)?.focus({ preventScroll: true })
  }

  return (
    <button
      type="button"
      className="back-to-top"
      data-visible={visible}
      // Oculto: fuera del orden de tabulación y del árbol de accesibilidad
      inert={!visible}
      onClick={onClick}
    >
      <span className="back-to-top__arrow" aria-hidden="true">
        ↑
      </span>
      <span className="back-to-top__text">Volver arriba</span>
    </button>
  )
}
