import type { ReactNode } from 'react'
import './PageHeader.css'

type Props = {
  kicker: ReactNode
  title: ReactNode
  tone?: 'accent' | 'live'
  children?: ReactNode
}

/** Cabecera de las páginas secundarias: rótulo en mono y título gigante (único h1). */
export function PageHeader({ kicker, title, tone = 'accent', children }: Props) {
  return (
    <header className="page-header">
      <p className={`label page-header__kicker page-header__kicker--${tone}`}>{kicker}</p>
      <h1 className="page-header__title">{title}</h1>
      {children && <div className="page-header__intro">{children}</div>}
    </header>
  )
}
