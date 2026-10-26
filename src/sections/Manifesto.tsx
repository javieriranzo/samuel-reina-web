import { useRef } from 'react'
import { gsap, useGSAP } from '@/animations/gsap'
import './Manifesto.css'

// Frase del concepto «La voz en escena». Sustituir por una frase de Samuel cuando la envíe
// (y entonces sí presentarla como cita).
const TEXT = 'Una voz que se ve, sobre el escenario. Una voz que no se ve, detrás del personaje.'

const WORDS = TEXT.split(' ')

/** Frase que se ilumina palabra a palabra con el scroll. */
export function Manifesto() {
  const rootRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.manifesto__word',
          { opacity: 0.15 },
          {
            opacity: 1,
            ease: 'none',
            stagger: 0.1,
            scrollTrigger: {
              trigger: '.manifesto__text',
              start: 'top 80%',
              end: 'bottom 45%',
              scrub: true,
            },
          },
        )
      })
      return () => mm.revert()
    },
    { scope: rootRef },
  )

  return (
    <section ref={rootRef} id="bio" className="manifesto" aria-labelledby="manifesto-title">
      <h2 id="manifesto-title" className="label manifesto__kicker">
        Manifiesto
      </h2>
      <p className="manifesto__text">
        {WORDS.map((word, i) => (
          <span key={i} className="manifesto__word">
            {word}{' '}
          </span>
        ))}
      </p>
      <p className="label">— La voz en escena</p>
    </section>
  )
}
