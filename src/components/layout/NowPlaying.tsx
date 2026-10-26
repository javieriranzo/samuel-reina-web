import { AudioButton } from '@/components/ui/AudioButton'
import { usePlayer, usePlayerTime } from '@/hooks/usePlayer'
import { formatDuration } from '@/lib/timecode'
import './NowPlaying.css'

/** Aviso fijo mientras hay un fragmento cargado, con pausa y tiempo. */
export function NowPlaying() {
  const { current, playing } = usePlayer()
  const state = playing ? 'Sonando' : 'En pausa'

  return (
    <div className="now-playing" data-visible={current !== null}>
      <p className="visually-hidden" role="status">
        {current ? `${state}: ${current.title}` : ''}
      </p>
      {current && (
        <>
          <AudioButton item={current} size="sm" />
          <div className="now-playing__text">
            <span className="label now-playing__kicker">{state}</span>
            <span className="now-playing__title">{current.title}</span>
          </div>
          <NowPlayingTime />
        </>
      )}
    </div>
  )
}

function NowPlayingTime() {
  const { currentTime, duration } = usePlayerTime()
  return (
    <span className="label now-playing__time">
      {formatDuration(currentTime)}
      {duration > 0 && ` / ${formatDuration(duration)}`}
    </span>
  )
}
