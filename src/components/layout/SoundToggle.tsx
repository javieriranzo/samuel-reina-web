import { useSound } from '@/hooks/useSound'
import './SoundToggle.css'

export function SoundToggle() {
  const { enabled, toggle } = useSound()

  return (
    <button type="button" className="sound-toggle" aria-pressed={enabled} onClick={toggle}>
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
