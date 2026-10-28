import { Link } from 'react-router'
import { PageHeader } from '@/components/layout/PageHeader'
import { CollaborationList } from '@/components/ui/CollaborationList'
import { ALBUMS, SINGLES } from '@/data/releases'
import { usePageMeta } from '@/hooks/usePageMeta'
import { TopTracks } from '@/sections/TopTracks'
import type { Release } from '@/types/music'
import './DiscographyPage.css'

const GROUPS = [
  { id: 'discos', title: 'Discos', releases: ALBUMS },
  { id: 'sencillos', title: 'Sencillos', releases: SINGLES },
]

function ReleaseGrid({ releases, labelledBy }: { releases: Release[]; labelledBy: string }) {
  return (
    <ul className="releases-grid" role="list" aria-labelledby={labelledBy}>
      {releases.map((release) => (
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
  )
}

export function DiscographyPage() {
  const summary = `${ALBUMS.length} discos y ${SINGLES.length} sencillos`
  usePageMeta('Discografía', `Discografía de Samuel Reina: ${summary}.`)

  return (
    <>
      <PageHeader kicker={`Discografía · ${summary}`} title="La música" />

      <div className="discography-page">
        {GROUPS.map((group) => (
          <section key={group.id} className="discography-page__group" aria-labelledby={group.id}>
            <h2 id={group.id} className="label discography-page__title">
              {group.title}
            </h2>
            <ReleaseGrid releases={group.releases} labelledBy={group.id} />
          </section>
        ))}

        <section className="discography-page__group" aria-labelledby="colaboraciones">
          <h2 id="colaboraciones" className="label discography-page__title">
            Colaboraciones
          </h2>
          <CollaborationList labelledBy="colaboraciones" />
        </section>
      </div>

      <TopTracks />
    </>
  )
}
