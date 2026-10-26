import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { NAV_ITEMS } from '@/data/site'
import { useLenis } from '@/hooks/useLenis'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { PAGE_ID } from '@/lib/dom'
import { SoundToggle } from './SoundToggle'
import './Header.css'

const MENU_ID = 'menu-movil'
const HIDE_AFTER = 120

export function Header() {
  const lenis = useLenis()
  const reducedMotion = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  // Abierto con ratón/dedo: mover el foco sin mostrar el contorno; con teclado, mostrarlo
  const openedWithPointerRef = useRef(false)

  // Fondo al salir de arriba; ocultar al bajar y mostrar al subir
  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 8)
      setHidden(y > HIDE_AFTER && y > lastY)
      lastY = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menú abierto: bloquear scroll, volver inerte el resto y mover el foco
  useEffect(() => {
    if (!menuOpen) return
    const page = document.getElementById(PAGE_ID)
    page?.setAttribute('inert', '')
    lenis?.stop()
    document.documentElement.style.overflow = 'hidden'
    firstLinkRef.current?.focus({ focusVisible: !openedWithPointerRef.current })

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setMenuOpen(false)
      menuButtonRef.current?.focus()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      page?.removeAttribute('inert')
      lenis?.start()
      document.documentElement.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen, lenis])

  // El menú solo existe en pantallas estrechas: cerrarlo si se ensancha la ventana
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 900px)')
    const onChange = () => mql.matches && setMenuOpen(false)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  const isHidden = hidden && !menuOpen && !reducedMotion

  return (
    <header
      className="site-header"
      data-scrolled={scrolled || menuOpen}
      data-hidden={isHidden}
      data-menu-open={menuOpen}
    >
      <div className="site-header__bar">
        <a href="#top" className="site-header__logo" aria-label="Samuel Reina, inicio">
          S<em>R</em>
        </a>

        <nav className="site-header__nav" aria-label="Principal">
          <ul role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <SoundToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="site-header__menu-button"
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            onClick={(e) => {
              openedWithPointerRef.current = e.detail > 0
              setMenuOpen((open) => !open)
            }}
          >
            <span className="site-header__menu-icon" aria-hidden="true" />
            <span className="visually-hidden">{menuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
          </button>
        </div>
      </div>

      <nav id={MENU_ID} className="mobile-menu" aria-label="Menú" data-open={menuOpen}>
        <ul role="list" className="mobile-menu__list">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.id} style={{ '--i': i } as CSSProperties}>
              <a
                ref={i === 0 ? firstLinkRef : undefined}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="label">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="label mobile-menu__footer">Samuel Reina · Cantante · Actor de doblaje</p>
      </nav>
    </header>
  )
}
