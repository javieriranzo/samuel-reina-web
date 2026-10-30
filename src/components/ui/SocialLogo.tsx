import type { CSSProperties } from 'react'
import { SOCIAL_LOGOS } from '@/lib/socialLogos'
import './SocialLogo.css'

type Props = {
  /** Nombre de la red, como en SOCIAL_LINKS */
  name: string
  className?: string
}

/**
 * Logo de una red social. Decorativo: el nombre accesible lo pone el enlace.
 * Toma los colores de la marca al señalar un antecesor con `data-brand-hover`.
 */
export function SocialLogo({ name, className }: Props) {
  const logo = SOCIAL_LOGOS[name]
  if (!logo) return null
  return (
    <svg
      className={className ? `social-logo ${className}` : 'social-logo'}
      viewBox={logo.viewBox}
      style={{ '--logo-brand': logo.brand } as CSSProperties}
      aria-hidden="true"
      focusable="false"
    >
      {logo.paths.map((path, i) => (
        <path
          key={i}
          className="social-logo__path"
          d={path.d}
          fillRule={path.evenodd ? 'evenodd' : undefined}
          data-hover={path.hover ?? 'brand'}
          data-cutout={path.cutout || undefined}
        />
      ))}
    </svg>
  )
}
