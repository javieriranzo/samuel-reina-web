import { TOP_TRACKS } from '@/data/releases'
import './TopTracks.css'

export function TopTracks() {
  return (
    <div className="top-tracks">
      <h3 className="label top-tracks__title" data-reveal>
        Lo más escuchado en Spotify
      </h3>
      <ol className="top-tracks__list" role="list">
        {TOP_TRACKS.map((track, i) => (
          <li key={track.title} data-reveal>
            <a
              href={track.spotifyUrl}
              className="top-tracks__item"
              target="_blank"
              rel="noreferrer"
              data-cursor="play"
            >
              <span className="label top-tracks__number">{String(i + 1).padStart(2, '0')}</span>
              <span className="top-tracks__name">
                {track.title}
                {track.featuring && (
                  <span className="top-tracks__feat"> · con {track.featuring}</span>
                )}
              </span>
              <span className="label">{track.duration}</span>
              <span className="visually-hidden">(abre Spotify)</span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}
