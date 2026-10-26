import { useContext } from 'react'
import { SoundContext, type SoundState } from '@/lib/contexts'

export function useSound(): SoundState {
  const sound = useContext(SoundContext)
  if (!sound) throw new Error('useSound debe usarse dentro de <SoundProvider>')
  return sound
}
