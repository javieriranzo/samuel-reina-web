import { createContext } from 'react'
import type Lenis from 'lenis'

export const LenisContext = createContext<Lenis | null>(null)

export type SoundState = {
  enabled: boolean
  toggle: () => void
}

export const SoundContext = createContext<SoundState | null>(null)
