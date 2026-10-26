import { useMemo } from 'react'
import './Waveform.css'

type Props = {
  /** Misma semilla, misma onda */
  seed: number
  bars?: number
  /** 0–1: barras reproducidas en ámbar */
  progress?: number
  className?: string
}

// PRNG determinista (mulberry32): la onda no cambia entre renders ni cargas
function random(seed: number) {
  let t = seed >>> 0
  return () => {
    t += 0x6d2b79f5
    let r = Math.imul(t ^ (t >>> 15), 1 | t)
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r)
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

function buildHeights(seed: number, bars: number): number[] {
  const rand = random(seed)
  return Array.from({ length: bars }, (_, i) => {
    const envelope = 0.55 + 0.45 * Math.sin((i / bars) * Math.PI)
    return Math.max(0.08, Math.min(1, envelope * (0.35 + rand() * 0.65)))
  })
}

/** Onda de audio decorativa hecha de barras. */
export function Waveform({ seed, bars = 64, progress = 0, className = '' }: Props) {
  const heights = useMemo(() => buildHeights(seed, bars), [seed, bars])
  const played = Math.round(progress * bars)

  return (
    <div className={`waveform ${className}`} aria-hidden="true">
      {heights.map((h, i) => (
        <span
          key={i}
          className="waveform__bar"
          data-played={i < played}
          style={{ height: `${h * 100}%` }}
        />
      ))}
    </div>
  )
}
