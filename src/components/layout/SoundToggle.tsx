import { GREETING_AUDIO } from '@/data/media'
import { usePlayer } from '@/hooks/usePlayer'
import { useSound } from '@/hooks/useSound'
import { readSession, writeSession } from '@/lib/storage'
import './SoundToggle.css'

const GREETING_KEY = 'sr:greeting-played'

export function SoundToggle() {
  const { enabled, toggle } = useSound()
  const player = usePlayer()

  const onClick = () => {
    toggle()
    // Primera activación de la sesión: saludo de Samuel, si existe
    if (!enabled && GREETING_AUDIO && readSession(GREETING_KEY) === null) {
      writeSession(GREETING_KEY, '1')
      player.toggle({ id: 'greeting', title: 'Saludo de Samuel Reina', src: GREETING_AUDIO })
    }
  }

  return (
    <button type="button" className="sound-toggle" aria-pressed={enabled} onClick={onClick}>
      <span className="sound-toggle__bars" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
      <span className="sound-toggle__text">{enabled ? 'Sonido activado' : 'Activar sonido'}</span>
    </button>
  )
}
