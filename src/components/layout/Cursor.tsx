import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/animations/gsap'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import './Cursor.css'

type CursorMode = 'default' | 'play' | 'rec'

const LABELS: Record<CursorMode, string> = { default: '', play: '▶ PLAY', rec: 'REC' }

/**
 * Cursor personalizado: punto ámbar que se convierte en PLAY o REC sobre
 * elementos con `data-cursor="play" | "rec"`. Solo con puntero fino y sin movimiento reducido.
 */
export function Cursor() {
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)')
  const reducedMotion = useReducedMotion()
  const enabled = finePointer && !reducedMotion

  const ref = useRef<HTMLDivElement>(null)
  const [mode, setMode] = useState<CursorMode>('default')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!enabled || !el) return

    document.documentElement.classList.add('has-custom-cursor')
    const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3' })

    const onMove = (e: PointerEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
      setVisible(true)
    }
    const onOver = (e: PointerEvent) => {
      const target = (e.target as Element).closest<HTMLElement>('[data-cursor]')
      const value = target?.dataset.cursor
      setMode(value === 'play' || value === 'rec' ? value : 'default')
    }
    const onLeave = () => setVisible(false)

    window.addEventListener('pointermove', onMove)
    document.addEventListener('pointerover', onOver)
    document.documentElement.addEventListener('pointerleave', onLeave)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div ref={ref} className="cursor" data-mode={mode} data-visible={visible} aria-hidden="true">
      <span className="cursor__label">{LABELS[mode]}</span>
    </div>
  )
}
