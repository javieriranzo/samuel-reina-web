import { COLLABORATIONS } from '@/data/releases'
import './CollaborationList.css'

type Props = {
  /** id del título que nombra la lista */
  labelledBy: string
}

/** Lanzamientos de otros artistas en los que participa Samuel, enlazados a Spotify. */
export function CollaborationList({ labelledBy }: Props) {
  return (
    <ul className="collaborations" role="list" aria-labelledby={labelledBy}>
      {COLLABORATIONS.map((collab) => {
        // Si el tema da nombre al lanzamiento, no se repite
        const tracks = collab.tracks.filter((t) => t.toLowerCase() !== collab.title.toLowerCase())
        return (
          <li key={collab.id}>
            <a
              href={collab.spotifyUrl}
              className="collaborations__item"
              target="_blank"
              rel="noreferrer"
              data-cursor="play"
            >
              <span className="label collaborations__year">{collab.releaseDate.slice(0, 4)}</span>
              <span className="collaborations__main">
                <span className="collaborations__title">{collab.title}</span>
                <span className="collaborations__meta">
                  {collab.kind} de {collab.artist}
                  {tracks.length > 0 && `. Participa en ${tracks.map((t) => `«${t}»`).join(' y ')}`}
                </span>
              </span>
              <span className="visually-hidden">(abre Spotify)</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
