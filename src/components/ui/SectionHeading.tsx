import type { ReactNode } from 'react'
import './SectionHeading.css'

type Props = {
  id: string
  kicker: ReactNode
  children: ReactNode
  align?: 'start' | 'center'
  tone?: 'accent' | 'live'
}

/** Rótulo en mono + título en serif display, común a todas las secciones. */
export function SectionHeading({ id, kicker, children, align = 'start', tone = 'accent' }: Props) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <p className={`label section-heading__kicker section-heading__kicker--${tone}`} data-reveal>
        {kicker}
      </p>
      <h2 id={id} className="section-heading__title" data-reveal-title>
        {children}
      </h2>
    </header>
  )
}
