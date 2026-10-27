import { Link } from 'react-router'
import { PageHeader } from '@/components/layout/PageHeader'
import { RELEASES } from '@/data/releases'
import { usePageMeta } from '@/hooks/usePageMeta'
import { TopTracks } from '@/sections/TopTracks'
import './DiscographyPage.css'

export function DiscographyPage() {
  usePageMeta('Discografía', `Discografía de Samuel Reina: ${RELEASES.length} lanzamientos.`)

  return (
    <>
      <PageHeader
        kicker={`Discografía · ${RELEASES.length} lanzamientos`}
        title={
          <>
            La <em>música</em>
          </>
        }
      />

      <ul className="releases-grid" role="list">
        {RELEASES.map((release) => (
          <li key={release.id}>
            <Link
              to={`/discografia/${release.id}`}
              className="releases-grid__item"
              data-cursor="play"
            >
              <img
                src={release.cover}
                alt=""
                width={640}
                height={640}
                loading="lazy"
                className="releases-grid__cover"
              />
              <span className="label">{release.year}</span>
              <span className="releases-grid__title">{release.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      <TopTracks />
    </>
  )
}
