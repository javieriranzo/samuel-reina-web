import { RELEASES, TOP_TRACKS } from '@/data/releases'
import './TopTracks.css'

// Portada del lanzamiento al que pertenece cada tema, si está en los datos
const coverOf = (title: string): string | undefined => {
  const name = title.toLowerCase()
  return RELEASES.find(
    (release) =>
      release.title.toLowerCase() === name ||
      (release.tracklist ?? release.highlightedTracks).some(
        (track) => track.title.toLowerCase() === name,
      ),
  )?.cover
}

/** Ranking de lo más escuchado en Spotify; cada tema abre Spotify. */
export function TopTracks() {
  return (
    <section className="top-tracks" aria-labelledby="top-tracks-title">
      <h2 id="top-tracks-title" className="label top-tracks__title">
        Lo más escuchado en Spotify
      </h2>
      <ol className="top-tracks__list" role="list">
        {TOP_TRACKS.map((track, i) => {
          const cover = coverOf(track.title)
          return (
            <li key={track.title}>
              <a
                href={track.spotifyUrl}
                className="top-tracks__item"
                target="_blank"
                rel="noreferrer"
                data-cursor="play"
              >
                <span className="top-tracks__number" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {cover ? (
                  <img className="top-tracks__thumb" src={cover} alt="" loading="lazy" />
                ) : (
                  <span className="top-tracks__thumb" aria-hidden="true" />
                )}
                <span className="top-tracks__name">
                  {track.title}
                  {track.featuring && (
                    <span className="top-tracks__feat"> · con {track.featuring}</span>
                  )}
                </span>
                {/* Sin onda: aquí no se reproduce nada, la fila abre Spotify */}
                <span className="label top-tracks__out" aria-hidden="true">
                  <span className="top-tracks__out-name">Spotify</span> ↗
                </span>
                <span className="label top-tracks__duration">{track.duration}</span>
                <span className="visually-hidden">(abre Spotify)</span>
              </a>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
