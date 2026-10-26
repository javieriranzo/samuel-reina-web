import { useRef } from 'react'
import { gsap, useGSAP } from '@/animations/gsap'
import { useReveal } from '@/animations/useReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RELEASES } from '@/data/releases'
import { TopTracks } from './TopTracks'
import './Discography.css'

// Mismo corte que en Discography.css
const PIN_QUERY = '(min-width: 900px) and (prefers-reduced-motion: no-preference)'

const years = RELEASES.map((r) => r.year)
const span = `${Math.min(...years)}—${Math.max(...years)}`

export function Discography() {
  const rootRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const stripRef = useRef<HTMLOListElement>(null)

  // En escritorio la sección se fija y la tira avanza en horizontal con el scroll
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(PIN_QUERY, () => {
        const distance = () => stripRef.current!.scrollWidth - viewportRef.current!.clientWidth
        gsap.to(stripRef.current, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: pinRef.current,
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        })
      })
      return () => mm.revert()
    },
    { scope: rootRef },
  )

  // Después del pin: así ScrollTrigger calcula sus posiciones contando el espacio del pin
  useReveal(rootRef)

  return (
    <section ref={rootRef} id="musica" className="discography" aria-labelledby="discography-title">
      <div ref={pinRef} className="discography__pin">
        <div className="discography__head">
          <SectionHeading id="discography-title" kicker={`Discografía · ${span}`}>
            La <em>música</em>
          </SectionHeading>
          <p className="label discography__hint" aria-hidden="true">
            Rollo 1 · {RELEASES.length} fotogramas →
          </p>
        </div>

        <div ref={viewportRef} className="discography__viewport">
          <ol ref={stripRef} className="discography__strip" role="list">
            {RELEASES.map((release, i) => (
              <li key={release.id} className="discography__frame" data-cursor="play">
                <img
                  className="discography__cover"
                  src={release.cover}
                  alt={`Portada de ${release.title}`}
                  width={640}
                  height={640}
                  loading="lazy"
                />
                <div className="discography__meta label">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <span>{release.year}</span>
                </div>
                <h3 className="discography__title">{release.title}</h3>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <TopTracks />
    </section>
  )
}
