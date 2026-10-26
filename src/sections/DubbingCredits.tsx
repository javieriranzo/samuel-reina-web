import { useRef } from 'react'
import { useReveal } from '@/animations/useReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Waveform } from '@/components/ui/Waveform'
import { DUBBING_CREDITS } from '@/data/dubbing'
import { CreditClip } from './CreditClip'
import './DubbingCredits.css'

/** Créditos de doblaje con estética de créditos finales. */
export function DubbingCredits() {
  const rootRef = useRef<HTMLElement>(null)
  useReveal(rootRef)

  return (
    <section
      ref={rootRef}
      id="doblaje"
      className="credits"
      aria-labelledby="credits-title"
      data-cursor="rec"
    >
      <SectionHeading
        id="credits-title"
        kicker={
          <>
            <span aria-hidden="true">● </span>REC · Doblaje
          </>
        }
        align="center"
        tone="live"
      >
        Con la voz de
        <br />
        <em>Samuel Reina</em>
      </SectionHeading>

      {DUBBING_CREDITS.length > 0 ? (
        <ul className="credits__list" role="list">
          {DUBBING_CREDITS.map((credit) => (
            <li
              key={`${credit.production}-${credit.character}`}
              className="credits__item"
              data-reveal
            >
              <span className="label">{credit.character}</span>
              <span className="credits__production">{credit.production}</span>
              <span className="label credits__year">{credit.year}</span>
              {credit.clip && <CreditClip credit={credit} clip={credit.clip} />}
            </li>
          ))}
        </ul>
      ) : (
        <div className="credits__empty" data-reveal>
          <Waveform seed={404} bars={48} className="credits__wave" />
          <p className="credits__empty-title">Créditos en postproducción</p>
          <p className="label">Personajes, producciones y demo reel · Próximamente</p>
        </div>
      )}
    </section>
  )
}
