import { useRef } from 'react'
import { useReveal } from '@/animations/useReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Waveform } from '@/components/ui/Waveform'
import { ANIMAL_PERSONA } from '@/data/animalPersona'
import './AnimalPersona.css'

/** Proyecto musical paralelo de Samuel. */
export function AnimalPersona() {
  const rootRef = useRef<HTMLElement>(null)
  const { name, description, listenUrl } = ANIMAL_PERSONA
  useReveal(rootRef)

  return (
    <section
      ref={rootRef}
      id="animal-persona"
      className="animal-persona screen-section"
      aria-labelledby="animal-persona-title"
      data-cursor="play"
    >
      <div className="animal-persona__inner">
        <SectionHeading id="animal-persona-title" kicker="Proyecto musical">
          {name}
        </SectionHeading>

        {description ? (
          <p className="animal-persona__text" data-reveal>
            {description}
          </p>
        ) : (
          <div className="animal-persona__empty" data-reveal>
            <Waveform seed={7} bars={48} className="animal-persona__wave" />
            <p className="animal-persona__empty-title">Proyecto en preparación</p>
            <p className="label">Más información · Próximamente</p>
          </div>
        )}

        {listenUrl && (
          <a href={listenUrl} className="more-link" target="_blank" rel="noreferrer" data-reveal>
            Escuchar {name} <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </section>
  )
}
