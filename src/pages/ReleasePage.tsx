import { Link, useParams } from 'react-router'
import { RELEASES } from '@/data/releases'
import { SOCIAL_LINKS } from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { ReleasePlayer } from '@/sections/ReleasePlayer'
import { NotFoundPage } from './NotFoundPage'
import './ReleasePage.css'

const ARTIST_SPOTIFY = SOCIAL_LINKS.find((link) => link.label === 'Spotify')?.url ?? null

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-')
  return `${d}.${m}.${y}`
}

export function ReleasePage() {
  const { id } = useParams()
  const index = RELEASES.findIndex((r) => r.id === id)
  const release = index >= 0 ? RELEASES[index] : null
  usePageMeta(
    release ? release.title : null,
    release ? `${release.title} (${release.year}), de Samuel Reina.` : undefined,
  )

  if (!release) return <NotFoundPage />

  // RELEASES va del más reciente al más antiguo
  const newer = RELEASES[index - 1]
  const older = RELEASES[index + 1]
  const spotify = release.spotifyUrl ?? ARTIST_SPOTIFY

  return (
    <article className="release-page">
      <div className="release-page__inner">
        <img
          className="release-page__cover"
          src={release.cover}
          alt={`Portada de ${release.title}`}
          width={640}
          height={640}
        />

        <div className="release-page__info">
          <p className="label release-page__kicker">
            <Link to="/discografia">Discografía</Link> ·{' '}
            {release.format === 'single' ? 'Sencillo' : 'Disco'} ·{' '}
            <time dateTime={release.releaseDate}>{formatDate(release.releaseDate)}</time>
          </p>
          <h1 className="release-page__title">{release.title}</h1>
          {release.description && (
            <p className="release-page__description">{release.description}</p>
          )}

          {release.tracklist ? (
            <div className="release-page__tracklist">
              <h2 className="label">Tracklist</h2>
              <ol role="list">
                {release.tracklist.map((track, i) => (
                  <li key={track.title}>
                    <span className="label">{String(i + 1).padStart(2, '0')}</span>
                    <span>{track.title}</span>
                    <span className="label">{track.duration}</span>
                  </li>
                ))}
              </ol>
            </div>
          ) : (
            <ReleasePlayer release={release} />
          )}

          {spotify && (
            <a href={spotify} className="release-page__listen" target="_blank" rel="noreferrer">
              Escuchar en Spotify
            </a>
          )}
        </div>
      </div>

      <nav className="release-page__nav" aria-label="Otros lanzamientos">
        {newer ? (
          <Link to={`/discografia/${newer.id}`} className="release-page__nav-link">
            <span className="label">← Más reciente</span>
            <span>{newer.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {older && (
          <Link
            to={`/discografia/${older.id}`}
            className="release-page__nav-link release-page__nav-link--next"
          >
            <span className="label">Anterior →</span>
            <span>{older.title}</span>
          </Link>
        )}
      </nav>
    </article>
  )
}
