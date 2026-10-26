import type { MouseEvent } from 'react'
import { AudioButton } from '@/components/ui/AudioButton'
import { Waveform } from '@/components/ui/Waveform'
import { usePlayer, usePlayerTime } from '@/hooks/usePlayer'
import { useWaveformPeaks } from '@/hooks/useWaveformPeaks'
import type { PlayerItem } from '@/lib/contexts'
import { formatDuration } from '@/lib/timecode'
import type { Release } from '@/types/music'

const BARS = 72

type Props = { release: Release }

/** Onda y temas de un lanzamiento; los temas con fragmento se pueden reproducir. */
export function ReleasePlayer({ release }: Props) {
  const { current, seek } = usePlayer()
  const { currentTime, duration } = usePlayerTime()

  const items: (PlayerItem | null)[] = release.highlightedTracks.map((track) =>
    track.preview
      ? { id: `${release.id}:${track.title}`, title: track.title, src: track.preview }
      : null,
  )
  const active = items.find((item) => item !== null && item.id === current?.id) ?? null
  const waveSource = active ?? items.find((item) => item !== null) ?? null
  const peaks = useWaveformPeaks(waveSource?.src, BARS)
  const progress = active && duration ? currentTime / duration : 0

  // Pulsar la onda salta a ese punto (el teclado usa play/pausa)
  const onWaveClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!active) return
    const r = e.currentTarget.getBoundingClientRect()
    seek((e.clientX - r.left) / r.width)
  }

  return (
    <div className="release__player" data-reveal>
      <div className="release__wave" data-seekable={active !== null} onClick={onWaveClick}>
        <Waveform seed={release.year} bars={BARS} peaks={peaks} progress={progress} />
      </div>

      {active && (
        <p className="label release__now">
          <span>{active.title}</span>
          <span>
            {formatDuration(currentTime)} / {formatDuration(duration)}
          </span>
        </p>
      )}

      <p className="label">Temas destacados</p>
      <ol className="release__tracks" role="list">
        {release.highlightedTracks.map((track, i) => {
          const item = items[i]
          return (
            <li key={track.title} className="release__track">
              {item ? (
                <AudioButton item={item} size="sm" />
              ) : (
                <span className="label release__track-number">
                  {String(i + 1).padStart(2, '0')}
                </span>
              )}
              <span className="release__track-title">{track.title}</span>
              <span className="label">{track.duration}</span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
