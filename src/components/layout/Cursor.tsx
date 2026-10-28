import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/animations/gsap'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import './Cursor.css'

type CursorMode = 'play' | 'rec'

const LABELS: Record<CursorMode, string> = { play: '▶ PLAY', rec: 'REC' }

/**
 * Etiqueta PLAY o REC que sigue al puntero del sistema sobre elementos con
 * `data-cursor="play" | "rec"`. Solo con puntero fino y sin movimiento reducido.
 */
export function Cursor() {
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)')
  const reducedMotion = useReducedMotion()
  const enabled = finePointer && !reducedMotion

  const ref = useRef<HTMLDivElement>(null)
  // Se conserva el último modo para que la etiqueta no cambie mientras se desvanece
  const [mode, setMode] = useState<CursorMode>('play')
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!enabled || !el) return

    const xTo = gsap.quickTo(el, 'x', { duration: 0.2, ease: 'power3' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.2, ease: 'power3' })

    const onMove = (e: PointerEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
      setVisible(true)
    }
    const onOver = (e: PointerEvent) => {
      const target = (e.target as Element).closest<HTMLElement>('[data-cursor]')
      const value = target?.dataset.cursor
      if (value === 'play' || value === 'rec') {
        setMode(value)
        setHovering(true)
      } else {
        setHovering(false)
      }
    }
    const onLeave = () => setVisible(false)

    window.addEventListener('pointermove', onMove)
    document.addEventListener('pointerover', onOver)
    document.documentElement.addEventListener('pointerleave', onLeave)

    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={ref}
      className="cursor"
      data-mode={mode}
      data-active={hovering && visible}
      aria-hidden="true"
    >
      <span className="cursor__label">{LABELS[mode]}</span>
    </div>
  )
}
