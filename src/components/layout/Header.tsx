import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router'
import { NAV_ITEMS } from '@/data/site'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useLenis } from '@/hooks/useLenis'
import { PAGE_ID } from '@/lib/dom'
import './Header.css'

const MENU_ID = 'menu-movil'
const NAV_IDS = NAV_ITEMS.map((item) => item.id)

export function Header() {
  const lenis = useLenis()
  const activeSection = useActiveSection(NAV_IDS)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  // Abierto con ratón/dedo: mover el foco sin mostrar el contorno; con teclado, mostrarlo
  const openedWithPointerRef = useRef(false)

  // Fondo al salir de arriba (solo móvil; en escritorio lo pone la cápsula). Siempre visible
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
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

  return (
    <header
      className="site-header"
      data-scrolled={scrolled || menuOpen}
      data-menu-open={menuOpen}
    >
      <div className="site-header__bar">
        <nav className="site-header__nav" aria-label="Principal">
          <ul role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/#${item.id}`}
                  aria-current={item.id === activeSection ? 'true' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
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
              <Link
                ref={i === 0 ? firstLinkRef : undefined}
                to={`/#${item.id}`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="label">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="label mobile-menu__footer">Samuel Reina · Cantante · Actor de doblaje</p>
      </nav>
    </header>
  )
}
