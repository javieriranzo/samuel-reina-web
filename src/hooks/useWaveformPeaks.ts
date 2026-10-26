import { useEffect, useState } from 'react'

const cache = new Map<string, number[]>()

async function computePeaks(src: string, bars: number): Promise<number[]> {
  const data = await fetch(src).then((r) => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`)
    return r.arrayBuffer()
  })
  // OfflineAudioContext decodifica sin necesitar un gesto del usuario
  const ctx = new OfflineAudioContext(1, 1, 44100)
  const buffer = await ctx.decodeAudioData(data)
  const channel = buffer.getChannelData(0)
  const size = Math.floor(channel.length / bars)

  const peaks = Array.from({ length: bars }, (_, i) => {
    let max = 0
    for (let j = i * size; j < (i + 1) * size; j++) max = Math.max(max, Math.abs(channel[j]))
    return max
  })
  const top = Math.max(...peaks) || 1
  return peaks.map((p) => Math.max(0.08, p / top))
}

/** Picos reales del audio para dibujar su onda; null mientras carga, sin src o si falla. */
export function useWaveformPeaks(src: string | undefined, bars: number): number[] | null {
  const key = src ? `${src}#${bars}` : null
  const [result, setResult] = useState<{ key: string; peaks: number[] } | null>(null)

  useEffect(() => {
    if (!key || !src || cache.has(key)) return
    let cancelled = false
    computePeaks(src, bars)
      .then((peaks) => {
        cache.set(key, peaks)
        if (!cancelled) setResult({ key, peaks })
      })
      .catch(() => {
        // Sin picos reales: se usa la onda determinista
      })
    return () => {
      cancelled = true
    }
  }, [key, src, bars])

  if (!key) return null
  return cache.get(key) ?? (result?.key === key ? result.peaks : null)
}
