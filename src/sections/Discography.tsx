import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useReveal } from '@/animations/useReveal'
import { CollaborationList } from '@/components/ui/CollaborationList'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ALBUMS, RELEASES, SINGLES } from '@/data/releases'
import type { Release } from '@/types/music'
import { TopTracks } from './TopTracks'
import './Discography.css'

const years = RELEASES.map((r) => r.year)
const span = `${Math.min(...years)}—${Math.max(...years)}`

const GROUPS = [
  { id: 'discos', title: 'Discos', releases: ALBUMS },
  { id: 'sencillos', title: 'Sencillos', releases: SINGLES },
]

/** Índice de discos y sencillos y, en escritorio, la portada del señalado. */
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
    <section ref={rootRef} id="musica" className="discography" aria-labelledby="discography-title">
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
            {GROUPS.map((group) => (
              <div key={group.id} className={`discography__group discography__group--${group.id}`}>
                <h3 className="label discography__group-title" id={`discography-${group.id}`}>
                  {group.title}
                </h3>
                <ol
                  className="discography__list"
                  role="list"
                  aria-labelledby={`discography-${group.id}`}
                >
                  {group.releases.map(item)}
                </ol>
              </div>
            ))}

            <div className="discography__group">
              <h3 className="label discography__group-title" id="discography-colaboraciones">
                Colaboraciones
              </h3>
              <CollaborationList labelledBy="discography-colaboraciones" />
            </div>
          </div>

          <div className="discography__preview" aria-hidden="true">
            {RELEASES.map((release) => (
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

      <TopTracks />
    </section>
  )
}
