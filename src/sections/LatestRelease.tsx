import { useEffect, useRef } from 'react'
import { gsap } from '@/animations/gsap'
import { useReveal } from '@/animations/useReveal'
import { Waveform } from '@/components/ui/Waveform'
import { LATEST_RELEASE } from '@/data/releases'
import { SOCIAL_LINKS } from '@/data/site'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import './LatestRelease.css'

const BASE_TILT = -6
const MAX_TILT = 12

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-')
  return `${d}.${m}.${y}`
}

export function LatestRelease() {
  const release = LATEST_RELEASE
  const platforms = SOCIAL_LINKS.filter((link) => link.streaming && link.url !== null)

  const rootRef = useRef<HTMLElement>(null)
  const coverRef = useRef<HTMLImageElement>(null)
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)')
  const reducedMotion = useReducedMotion()
  const tiltEnabled = finePointer && !reducedMotion

  useReveal(rootRef)

  // Inclinación 3D de la portada siguiendo el puntero
  useEffect(() => {
    const cover = coverRef.current
    const area = cover?.parentElement
    if (!tiltEnabled || !cover || !area) return

    gsap.set(cover, { rotationY: BASE_TILT })
    const rotX = gsap.quickTo(cover, 'rotationX', { duration: 0.6, ease: 'power3' })
    const rotY = gsap.quickTo(cover, 'rotationY', { duration: 0.6, ease: 'power3' })

    const onMove = (e: PointerEvent) => {
      const r = area.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      rotY(x * MAX_TILT * 2)
      rotX(-y * MAX_TILT * 2)
    }
    const onLeave = () => {
      rotX(0)
      rotY(BASE_TILT)
    }

    area.addEventListener('pointermove', onMove)
    area.addEventListener('pointerleave', onLeave)
    return () => {
      area.removeEventListener('pointermove', onMove)
      area.removeEventListener('pointerleave', onLeave)
      gsap.set(cover, { clearProps: 'transform' })
    }
  }, [tiltEnabled])

  return (
    <section ref={rootRef} id="lanzamiento" className="release" aria-labelledby="release-title">
      <div className="release__inner">
        <div className="release__cover-area" data-reveal data-cursor="play">
          <img
            ref={coverRef}
            className="release__cover"
            src={release.cover}
            alt={`Portada de ${release.title}`}
            width={640}
            height={640}
            loading="lazy"
          />
        </div>

        <div className="release__info">
          <p className="label release__kicker" data-reveal>
            Último lanzamiento ·{' '}
            <time dateTime={release.releaseDate}>{formatDate(release.releaseDate)}</time>
          </p>

          <h2 id="release-title" className="release__title" data-reveal>
            {release.title}
          </h2>

          <div className="release__player" data-reveal>
            <Waveform seed={release.year} bars={72} progress={0.32} />
            <p className="label">Temas destacados</p>
            <ol className="release__tracks" role="list">
              {release.highlightedTracks.map((track, i) => (
                <li key={track.title} className="release__track">
                  <span className="label release__track-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="release__track-title">{track.title}</span>
                  <span className="label">{track.duration}</span>
                </li>
              ))}
            </ol>
          </div>

          {platforms.length > 0 && (
            <ul className="release__links" role="list" data-reveal>
              {platforms.map((platform, i) => (
                <li key={platform.label}>
                  <a
                    href={platform.url!}
                    className={`release__link ${i === 0 ? 'release__link--primary' : ''}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Escuchar en {platform.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
