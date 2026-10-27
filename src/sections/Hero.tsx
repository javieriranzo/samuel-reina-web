import { useRef } from 'react'
import { Link } from 'react-router'
import { gsap, useGSAP } from '@/animations/gsap'
import { Timecode } from '@/components/ui/Timecode'
import { LATEST_RELEASE } from '@/data/releases'
import artistPhoto from '@/assets/images/artist.jpg'
import './Hero.css'

type Props = {
  /** false mientras la intro tapa la portada */
  ready: boolean
}

export function Hero({ ready }: Props) {
  const rootRef = useRef<HTMLElement>(null)

  // Entrada: líneas del nombre desde su máscara, foto que se revela, rótulos que aparecen
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const hidden = () => {
          gsap.set('[data-hero-line]', { yPercent: 110 })
          gsap.set('[data-hero-fade]', { autoAlpha: 0, y: 20 })
          gsap.set('.hero__img', { autoAlpha: 0, scale: 1.15 })
        }
        hidden()
        if (!ready) return

        gsap
          .timeline({ defaults: { ease: 'power4.out' } })
          .to('.hero__img', { autoAlpha: 1, scale: 1, duration: 2.2, ease: 'power2.out' }, 0)
          .to('[data-hero-line]', { yPercent: 0, duration: 1.4, stagger: 0.12 }, 0.2)
          .to('[data-hero-fade]', { autoAlpha: 1, y: 0, duration: 1, stagger: 0.1 }, 0.7)
      })
      return () => mm.revert()
    },
    { scope: rootRef, dependencies: [ready], revertOnUpdate: true },
  )

  // Parallax suave de la foto al hacer scroll
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.to('.hero__media', {
          yPercent: 14,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
      return () => mm.revert()
    },
    { scope: rootRef },
  )

  return (
    <section ref={rootRef} id="top" className="hero">
      <div className="hero__media">
        <img
          className="hero__img"
          src={artistPhoto}
          alt="Samuel Reina con una bolsa negra cubriéndole la cabeza"
          width={640}
          height={640}
          fetchPriority="high"
        />
      </div>

      <div className="hero__content">
        <p className="label hero__kicker" data-hero-fade>
          Cantante · Actor de doblaje
        </p>

        <h1 className="hero__title" aria-label="Samuel Reina">
          <span className="hero__line" aria-hidden="true">
            <span data-hero-line>Samuel</span>
          </span>
          <span className="hero__line" aria-hidden="true">
            <em data-hero-line>Reina</em>
          </span>
        </h1>

        <div className="hero__meta" data-hero-fade>
          <Timecode seconds={1 / 25} />
          <Link to="/#lanzamiento" className="hero__scroll label">
            Desplázate
            <span className="hero__scroll-line" aria-hidden="true" />
          </Link>
          <span className="label hero__new">Nuevo · {LATEST_RELEASE.title}</span>
        </div>
      </div>
    </section>
  )
}
