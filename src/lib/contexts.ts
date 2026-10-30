import { createContext } from 'react'
import type Lenis from 'lenis'

export const LenisContext = createContext<Lenis | null>(null)

export type PlayerItem = {
  /** Único en toda la web: identifica qué botón está sonando */
  id: string
  title: string
  /** Ruta en public/audio/ */
  src: string
}

export type PlayerState = {
  current: PlayerItem | null
  playing: boolean
  /** Reproduce `item`; si ya es el actual, alterna play/pausa */
  toggle: (item: PlayerItem) => void
  pause: () => void
  /** 0–1 sobre la duración del actual */
  seek: (fraction: number) => void
}

export const PlayerContext = createContext<PlayerState | null>(null)

// Separado del anterior: cambia ~60 veces por segundo mientras suena
export type PlayerTime = { currentTime: number; duration: number }

export const PlayerTimeContext = createContext<PlayerTime>({ currentTime: 0, duration: 0 })
