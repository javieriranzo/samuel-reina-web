import { Link } from 'react-router'
import { CollaborationList } from '@/components/ui/CollaborationList'
import { ReleaseCard } from '@/components/ui/ReleaseCard'
import { ALBUMS, LATEST_RELEASE, RELEASES, SINGLES } from '@/data/releases'
import { SOCIAL_LINKS } from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { TopTracks } from '@/sections/TopTracks'
import './DiscographyPage.css'

const ARTIST_SPOTIFY = SOCIAL_LINKS.find((link) => link.label === 'Spotify')?.url ?? null
const KIND = { album: 'Disco', single: 'Sencillo' } as const

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-')
  return `${d}.${m}.${y}`
}

export function DiscographyPage() {
  const summary = `${ALBUMS.length} discos y ${SINGLES.length} sencillos`
  usePageMeta('Discografía', `Discografía de Samuel Reina: ${summary}.`)

  const latest = LATEST_RELEASE
  const listenUrl = latest.spotifyUrl ?? ARTIST_SPOTIFY
  const rest = RELEASES.filter((release) => release !== latest)

  return (
    <div className="discography-page">
      {/* La cabecera de esta página es el último lanzamiento: el h1 queda para lectores */}
      <h1 className="visually-hidden">La música · Discografía de Samuel Reina</h1>

      <section className="discography-page__feature" aria-labelledby="latest-title">
        <div className="discography-page__feature-cover">
          <ReleaseCard release={latest} size="hero" />
        </div>
        <div className="discography-page__feature-info">
          <p className="label discography-page__kicker">
            Último lanzamiento ·{' '}
            <time dateTime={latest.releaseDate}>{formatDate(latest.releaseDate)}</time>
          </p>
          <h2 id="latest-title" className="discography-page__feature-title">
            {latest.title}
          </h2>
          <p className="discography-page__feature-meta">{KIND[latest.format]}</p>
          <div className="discography-page__feature-links">
            {listenUrl && (
              <a
                href={listenUrl}
                className="discography-page__button discography-page__button--primary"
                target="_blank"
                rel="noreferrer"
              >
                Escuchar en Spotify
              </a>
            )}
            <Link to={`/discografia/${latest.id}`} className="discography-page__button">
              Ver ficha
            </Link>
          </div>
        </div>
      </section>

      <section className="discography-page__group" aria-labelledby="all-releases">
        <h2 id="all-releases" className="label discography-page__kicker">
          Toda la discografía · {summary}
        </h2>
        <ul className="discography-page__mosaic" role="list">
          {rest.map((release) => (
            <li key={release.id} data-format={release.format}>
              <ReleaseCard release={release} size={release.format === 'album' ? 'big' : 'small'} />
            </li>
          ))}
        </ul>
      </section>

      <section className="discography-page__group" aria-labelledby="colaboraciones">
        <h2 id="colaboraciones" className="label discography-page__title">
          Colaboraciones
        </h2>
        <CollaborationList labelledBy="colaboraciones" />
      </section>

      <TopTracks />
    </div>
  )
}
