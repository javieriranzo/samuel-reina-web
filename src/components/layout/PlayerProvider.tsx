import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { PlayerContext, PlayerTimeContext, type PlayerItem } from '@/lib/contexts'

const ARTIST = 'Samuel Reina'

type Props = { children: ReactNode }

/** Un único <audio> para toda la web: nunca suenan dos fragmentos a la vez. */
export function PlayerProvider({ children }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const currentRef = useRef<PlayerItem | null>(null)
  const [current, setCurrent] = useState<PlayerItem | null>(null)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState({ currentTime: 0, duration: 0 })

  // Crear el elemento y escuchar sus eventos
  useEffect(() => {
    const audio = new Audio()
    audio.preload = 'metadata'
    audioRef.current = audio

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onMeta = () => setTime((t) => ({ ...t, duration: audio.duration || 0 }))
    const onEnd = () => {
      currentRef.current = null
      setCurrent(null)
      setTime({ currentTime: 0, duration: 0 })
    }

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('loadedmetadata', onMeta)
    audio.addEventListener('ended', onEnd)
    audio.addEventListener('error', onEnd)

    return () => {
      audio.pause()
      audio.removeAttribute('src')
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('loadedmetadata', onMeta)
      audio.removeEventListener('ended', onEnd)
      audio.removeEventListener('error', onEnd)
      audioRef.current = null
    }
  }, [])

  // Tiempo fluido para ondas y timecodes mientras suena
  useEffect(() => {
    const audio = audioRef.current
    if (!playing || !audio) return
    let frame = 0
    const tick = () => {
      setTime({ currentTime: audio.currentTime, duration: audio.duration || 0 })
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [playing])

  const toggle = useCallback(
    (item: PlayerItem) => {
      const audio = audioRef.current
      if (!audio) return

      if (currentRef.current?.id === item.id) {
        if (audio.paused) void audio.play().catch(() => setPlaying(false))
        else audio.pause()
        return
      }

      currentRef.current = item
      setCurrent(item)
      setTime({ currentTime: 0, duration: 0 })
      audio.src = item.src
      void audio.play().catch(() => setPlaying(false))
    },
    [],
  )

  const pause = useCallback(() => audioRef.current?.pause(), [])

  const seek = useCallback((fraction: number) => {
    const audio = audioRef.current
    if (!audio || !audio.duration) return
    audio.currentTime = Math.min(1, Math.max(0, fraction)) * audio.duration
    setTime({ currentTime: audio.currentTime, duration: audio.duration })
  }, [])

  // Controles del sistema (pantalla de bloqueo, teclas multimedia)
  useEffect(() => {
    if (!('mediaSession' in navigator)) return
    const session = navigator.mediaSession
    session.metadata = current ? new MediaMetadata({ title: current.title, artist: ARTIST }) : null
    session.setActionHandler('play', current ? () => void audioRef.current?.play() : null)
    session.setActionHandler('pause', current ? () => audioRef.current?.pause() : null)
  }, [current])

  const value = useMemo(
    () => ({ current, playing, toggle, pause, seek }),
    [current, playing, toggle, pause, seek],
  )

  return (
    <PlayerContext value={value}>
      <PlayerTimeContext value={time}>{children}</PlayerTimeContext>
    </PlayerContext>
  )
}
