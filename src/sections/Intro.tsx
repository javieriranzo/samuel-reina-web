import { useCallback, useEffect, useRef } from 'react'
import { gsap, useGSAP } from '@/animations/gsap'
import { Waveform } from '@/components/ui/Waveform'
import { useLenis } from '@/hooks/useLenis'
import { markIntroSeen } from '@/lib/intro'
import { formatTimecode } from '@/lib/timecode'
import './Intro.css'

type Props = {
  /** El telón empieza a subir: la portada puede animar su entrada */
  onReveal: () => void
  /** La intro ha terminado y puede desmontarse */
  onComplete: () => void
}

const DURATION = 2.6

/** Intro de ~2,5 s: timecode en marcha, onda que respira y telón que sube. */
export function Intro({ onReveal, onComplete }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const timecodeRef = useRef<HTMLSpanElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const revealedRef = useRef(false)
  const lenis = useLenis()

  const reveal = useCallback(() => {
    if (revealedRef.current) return
    revealedRef.current = true
    markIntroSeen()
    onReveal()
  }, [onReveal])

  const skip = useCallback(() => {
    timelineRef.current?.kill()
    reveal()
    onComplete()
  }, [reveal, onComplete])

  useGSAP(
    () => {
      const clock = { t: 0 }
      const tl = gsap.timeline({ onComplete })
      timelineRef.current = tl

      tl.to(
        clock,
        {
          t: DURATION,
          duration: DURATION,
          ease: 'none',
          onUpdate: () => {
            if (timecodeRef.current) timecodeRef.current.textContent = formatTimecode(clock.t)
          },
        },
        0,
      )
        .from(
          '.waveform__bar',
          {
            scaleY: 0.04,
            duration: 1.1,
            ease: 'power3.out',
            stagger: { each: 0.012, from: 'center' },
          },
          0.15,
        )
        .from('.intro__name', { autoAlpha: 0, y: 16, duration: 0.8, ease: 'power3.out' }, 0.7)
        .to('.intro__wave', { scaleY: 0.08, duration: 0.5, ease: 'power2.in' }, 1.6)
        .call(reveal, [], 1.9)
        .to(
          rootRef.current,
          { clipPath: 'inset(0% 0% 100% 0%)', duration: 1, ease: 'power4.inOut' },
          1.9,
        )
    },
    { scope: rootRef },
  )

  // Bloquear el scroll mientras dura y permitir saltarla con cualquier tecla
  useEffect(() => {
    lenis?.stop()
    document.documentElement.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') return
      skip()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      lenis?.start()
      document.documentElement.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [lenis, skip])

  return (
    <div ref={rootRef} className="intro" onPointerDown={skip}>
      <div className="intro__top label">
        <span>
          <span className="intro__rec" aria-hidden="true" /> Toma 01 · Grabando
        </span>
        <span>Samuel Reina</span>
      </div>

      <div className="intro__center" aria-hidden="true">
        <Waveform seed={7} bars={56} className="intro__wave" />
        <p className="intro__name">
          Samuel <em>Reina</em>
        </p>
      </div>

      <div className="intro__bottom">
        <span className="label">
          TC <span ref={timecodeRef}>{formatTimecode(0)}</span>
        </span>
        <button type="button" className="intro__skip label" onClick={skip}>
          Saltar intro
        </button>
      </div>
    </div>
  )
}
