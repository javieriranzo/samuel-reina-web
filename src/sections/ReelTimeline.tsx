import { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from '@/animations/gsap'
import { HOME_SCENES } from '@/data/site'
import { FPS, formatTimecode } from '@/lib/timecode'
import './ReelTimeline.css'

type Props = {
  /** false mientras se reproduce la intro */
  enabled: boolean
}

/**
 * Línea de montaje: la home como una película en la mesa de edición. Marca el
 * inicio de cada escena, avanza con el scroll (1 px = 1 fotograma) y nombra la
 * escena actual. Decorativa: la navegación real está en la cabecera.
 */
export function ReelTimeline({ enabled }: Props) {
  const progressRef = useRef<HTMLSpanElement>(null)
  const timecodeRef = useRef<HTMLSpanElement>(null)
  // Una marca por escena presente en la página, con su posición (0–1) en la pista
  const [marks, setMarks] = useState<{ index: number; position: number }[]>([])
  const [scene, setScene] = useState(-1)
  // El pie («Fin») ya está en pantalla: la película ha terminado
  const [ended, setEnded] = useState(false)

  useEffect(() => {
    if (!enabled) return
    let starts: number[] = []
    let range = 1
    let end = Infinity

    const update = () => {
      const y = window.scrollY
      const progress = Math.min(1, y / range)
      progressRef.current?.style.setProperty('translate', `${(progress - 1) * 100}% 0`)
      if (timecodeRef.current) timecodeRef.current.textContent = formatTimecode(y / FPS)
      // Escena actual: la última cuyo inicio ha pasado la mitad de la pantalla
      const probe = y + window.innerHeight / 2
      setScene(starts.findLastIndex((start) => start <= probe))
      setEnded(y + window.innerHeight > end)
    }

    // Las secciones cambian de altura al cargar fuentes e imágenes: medir también tras cada recálculo de ScrollTrigger
    const measure = () => {
      range = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      starts = HOME_SCENES.map((s) => {
        const el = document.getElementById(s.id)
        return el ? el.getBoundingClientRect().top + window.scrollY : Infinity
      })
      setMarks(
        starts.flatMap((start, index) =>
          Number.isFinite(start) ? [{ index, position: Math.min(1, start / range) }] : [],
        ),
      )
      const footer = document.querySelector('footer')
      end = footer ? footer.getBoundingClientRect().top + window.scrollY : Infinity
      update()
    }

    measure()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', measure)
    ScrollTrigger.addEventListener('refresh', measure)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', measure)
      ScrollTrigger.removeEventListener('refresh', measure)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div className="reel" data-visible={scene >= 0 && !ended} aria-hidden="true">
      <div className="reel__readout">
        <span ref={timecodeRef} className="reel__timecode" />
        <span className="reel__scene">
          {/* La clave remonta el nombre para animar el cambio de escena */}
          <span key={scene} className="reel__scene-name">
            {HOME_SCENES[scene]?.label}
          </span>
        </span>
      </div>
      <div className="reel__track">
        {marks.map(({ index, position }) => (
          <span
            key={HOME_SCENES[index].id}
            className="reel__mark"
            data-passed={index <= scene}
            style={{ left: `${position * 100}%` }}
          />
        ))}
        <span ref={progressRef} className="reel__progress" />
      </div>
    </div>
  )
}
