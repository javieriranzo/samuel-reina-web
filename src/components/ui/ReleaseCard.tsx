import { Link } from 'react-router'
import type { Release } from '@/types/music'
import './ReleaseCard.css'

type Props = {
  release: Release
  /** big: disco en el mosaico · small: sencillo · hero: portada destacada, sin pie */
  size: 'big' | 'small' | 'hero'
}

const KIND = { album: 'Disco', single: 'Sencillo' } as const

/** Portada enlazada a la ficha; al señalarla asoma un vinilo y aparece «Escuchar». */
export function ReleaseCard({ release, size }: Props) {
  // Solo con el listado completo: los temas destacados no dicen cuántos tiene
  const total = release.tracklist?.length
  const meta = total
    ? `${KIND[release.format]} · ${total} ${total === 1 ? 'tema' : 'temas'}`
    : KIND[release.format]

  return (
    <Link
      to={`/discografia/${release.id}`}
      className={`release-card release-card--${size}`}
      data-cursor="play"
      aria-label={size === 'hero' ? `${release.title}, ${meta}` : undefined}
    >
      <span className="release-card__sleeve">
        <span className="release-card__vinyl" aria-hidden="true">
          <span
            className="release-card__label"
            style={{ backgroundImage: `url(${release.cover})` }}
          />
        </span>
        <img
          className="release-card__cover"
          src={release.cover}
          alt=""
          width={640}
          height={640}
          loading={size === 'hero' ? 'eager' : 'lazy'}
        />
        <span className="release-card__hover" aria-hidden="true">
          <span className="label release-card__play">▶ Escuchar</span>
          <span className="release-card__meta">{meta}</span>
        </span>
      </span>
      {size !== 'hero' && (
        <span className="release-card__info">
          <span className="label release-card__year">{release.year}</span>
          <span className="release-card__title">{release.title}</span>
          <span className="visually-hidden">, {meta}</span>
        </span>
      )}
    </Link>
  )
}
