import type { ReactNode } from 'react'
import { Waveform } from './Waveform'
import './EmptyState.css'

type Props = {
  title: string
  children?: ReactNode
  seed?: number
}

/** Contenido pendiente: aviso diseñado en lugar de datos inventados. */
export function EmptyState({ title, children, seed = 404 }: Props) {
  return (
    <div className="empty-state">
      <Waveform seed={seed} bars={48} className="empty-state__wave" />
      <p className="empty-state__title">{title}</p>
      {children && <div className="empty-state__body">{children}</div>}
    </div>
  )
}
