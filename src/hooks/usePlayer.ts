import { useContext } from 'react'
import { PlayerContext, PlayerTimeContext, type PlayerState } from '@/lib/contexts'

export function usePlayer(): PlayerState {
  const player = useContext(PlayerContext)
  if (!player) throw new Error('usePlayer debe usarse dentro de <PlayerProvider>')
  return player
}

/** Tiempo del fragmento actual. Re-renderiza en cada fotograma mientras suena: úsalo solo donde se pinte. */
export function usePlayerTime() {
  return useContext(PlayerTimeContext)
}
