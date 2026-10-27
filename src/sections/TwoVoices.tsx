import { useRef } from 'react'
import { Link } from 'react-router'
import { useReveal } from '@/animations/useReveal'
import './TwoVoices.css'

/** Pantalla dividida: la voz que se ve (música) y la que no se ve (doblaje). */
export function TwoVoices() {
  const rootRef = useRef<HTMLElement>(null)
  useReveal(rootRef)

  return (
    <section ref={rootRef} className="voices" aria-label="Dos voces">
      <Link to="/#musica" className="voices__side voices__side--music" data-cursor="play">
        <span className="label voices__kicker" data-reveal>
          <span aria-hidden="true">▶ </span>La voz que se ve
        </span>
        <span className="voices__title" data-reveal>
          La música
        </span>
        <span className="voices__desc" data-reveal>
          Escenario · discos · directo <span aria-hidden="true">→</span>
        </span>
      </Link>

      <Link to="/#doblaje" className="voices__side voices__side--dubbing" data-cursor="rec">
        <span className="label voices__kicker" data-reveal>
          <span aria-hidden="true">● </span>La voz que no se ve
        </span>
        <span className="voices__title" data-reveal>
          <em>El doblaje</em>
        </span>
        <span className="voices__desc" data-reveal>
          Estudio · personajes · demo reel <span aria-hidden="true">→</span>
        </span>
      </Link>
    </section>
  )
}
