import { useEffect, useRef, useState } from 'react'
import { ALBUMS } from '@/data/releases'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import './DiscographyBackdrop.css'

// Tiempo que se queda cada portada antes de fundirse con la siguiente
const INTERVAL = 6000

/** Portadas de los discos en bucle, como marca de agua detrás del índice. Decorativo. */
export function DiscographyBackdrop() {
  const rootRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  // Avanzar solo con la sección en pantalla
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (reducedMotion || !visible) return
    const timer = window.setInterval(() => {
      // Con la pestaña oculta, no avanzar
      if (!document.hidden) setIndex((i) => (i + 1) % ALBUMS.length)
    }, INTERVAL)
    return () => window.clearInterval(timer)
  }, [reducedMotion, visible])

  const current = reducedMotion ? 0 : index

  return (
    <div ref={rootRef} className="discography-backdrop" aria-hidden="true">
      {ALBUMS.map((album, i) => (
        <img
          key={album.id}
          className="discography-backdrop__cover"
          data-active={i === current}
          src={album.cover}
          alt=""
          width={640}
          height={640}
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  )
}
