import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { gsap, useGSAP } from '@/animations/gsap'
import { Timecode } from '@/components/ui/Timecode'
import { HERO_VIDEO } from '@/data/media'
import { LATEST_RELEASE } from '@/data/releases'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import heroPhoto from '@/assets/images/hero.jpg'
import './Hero.css'

// Ahorro de datos activado en el navegador (no estándar: solo Chromium)
const saveData =
  (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true

type Props = {
  /** false mientras la intro tapa la portada */
  ready: boolean
}

export function Hero({ ready }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const reducedMotion = useReducedMotion()
  const video = HERO_VIDEO && !reducedMotion && !saveData ? HERO_VIDEO : null

  // Reproducir solo mientras la portada está en pantalla
  useEffect(() => {
    const el = videoRef.current
    const root = rootRef.current
    if (!el || !root) return
    // React no siempre aplica `muted` antes del autoplay: sin él, el navegador lo bloquea
    el.muted = true
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.play().catch(() => {})
      else el.pause()
    })
    observer.observe(root)
    return () => observer.disconnect()
  }, [video])

  // Entrada: líneas del nombre desde su máscara, foto que se revela, rótulos que aparecen
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const hidden = () => {
          // Limpiar antes: si se desmonta a mitad de la entrada, GSAP conserva un `y` en px
          // que dejaría el nombre bajo la máscara al volver a montarse
          gsap.set('[data-hero-line]', { clearProps: 'transform' })
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
        {video ? (
          // Decorativo: el nombre y el rótulo ya presentan al artista
          <video
            ref={videoRef}
            className="hero__img"
            poster={heroPhoto}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            {video.webm && <source src={video.webm} type="video/webm" />}
            <source src={video.mp4} type="video/mp4" />
          </video>
        ) : (
          <img
            className="hero__img"
            src={heroPhoto}
            alt="Samuel Reina de noche en una calle iluminada, serio y mirando a cámara, con gente detrás"
            width={1232}
            height={1135}
            fetchPriority="high"
          />
        )}
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
