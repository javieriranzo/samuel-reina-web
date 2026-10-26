import { usePlayer } from '@/hooks/usePlayer'
import type { PlayerItem } from '@/lib/contexts'
import './AudioButton.css'

type Props = {
  item: PlayerItem
  variant?: 'music' | 'rec'
  size?: 'sm' | 'md'
}

/** Play/pausa de un fragmento a través del reproductor global. */
export function AudioButton({ item, variant = 'music', size = 'md' }: Props) {
  const { current, playing, toggle } = usePlayer()
  const active = current?.id === item.id && playing

  return (
    <button
      type="button"
      className={`audio-button audio-button--${variant} audio-button--${size}`}
      data-active={active}
      aria-label={`${active ? 'Pausar' : 'Reproducir'} ${item.title}`}
      onClick={() => toggle(item)}
    >
      <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
        {active ? (
          <path d="M3 2h3.5v12H3zM9.5 2H13v12H9.5z" fill="currentColor" />
        ) : (
          <path d="M4 2l10 6-10 6z" fill="currentColor" />
        )}
      </svg>
    </button>
  )
}
