import type { MouseEvent } from 'react'
import { MAIN_ID } from '@/lib/dom'
import './SkipLink.css'

export function SkipLink() {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const main = document.getElementById(MAIN_ID)
    main?.focus({ preventScroll: true })
    main?.scrollIntoView()
  }

  return (
    <a href={`#${MAIN_ID}`} className="skip-link" onClick={onClick}>
      Saltar al contenido
    </a>
  )
}
