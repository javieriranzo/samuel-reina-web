import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useReveal } from '@/animations/useReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ALBUMS, RELEASES } from '@/data/releases'
import type { Release } from '@/types/music'
import { DiscographyBackdrop } from './DiscographyBackdrop'
import './Discography.css'

const years = RELEASES.map((r) => r.year)
const span = `${Math.min(...years)}—${Math.max(...years)}`

/** Índice de discos y, en escritorio, la portada del señalado. Sencillos y colaboraciones, en /discografia. */
export function Discography() {
  const rootRef = useRef<HTMLElement>(null)
  // Lanzamiento señalado con el puntero o el foco; por defecto, el disco más reciente
  const [active, setActive] = useState(ALBUMS[0].id)
  useReveal(rootRef)

  const item = (release: Release) => (
    <li key={release.id} data-reveal>
      <Link
        to={`/discografia/${release.id}`}
        className="discography__item"
        data-cursor="play"
        onPointerEnter={() => setActive(release.id)}
        onFocus={() => setActive(release.id)}
      >
        <img
          className="discography__thumb"
          src={release.cover}
          alt=""
          width={640}
          height={640}
          loading="lazy"
        />
        <span className="label discography__year">{release.year}</span>
        <span className="discography__title">{release.title}</span>
      </Link>
    </li>
  )

  return (
    <section
      ref={rootRef}
      id="musica"
      className="discography screen-section"
      aria-labelledby="discography-title"
    >
      <DiscographyBackdrop />
      <div className="discography__inner">
        <div className="discography__head">
          <SectionHeading id="discography-title" kicker={`Discografía · ${span}`}>
            La música
          </SectionHeading>
          <Link to="/discografia" className="more-link">
            Discografía completa <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="discography__body">
          <div className="discography__groups">
            <div className="discography__group">
              <h3 className="label discography__group-title" id="discography-discos">
                Discos
              </h3>
              <ol className="discography__list" role="list" aria-labelledby="discography-discos">
                {ALBUMS.map(item)}
              </ol>
            </div>
          </div>

          <div className="discography__preview" aria-hidden="true">
            {ALBUMS.map((release) => (
              <img
                key={release.id}
                className="discography__cover"
                data-active={release.id === active}
                src={release.cover}
                alt=""
                width={640}
                height={640}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
