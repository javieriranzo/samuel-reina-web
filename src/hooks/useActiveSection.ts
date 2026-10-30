import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

/** Id de la sección de la home que cruza el centro de la pantalla, o null si ninguna. */
export function useActiveSection(ids: string[]): string | null {
  const { pathname } = useLocation()
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join(',')

  useEffect(() => {
    const elements = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (pathname !== '/' || elements.length === 0) return

    const onScroll = () => {
      const middle = window.innerHeight / 2
      let found = elements.find((el) => {
        const { top, bottom } = el.getBoundingClientRect()
        return top <= middle && bottom > middle
      })
      // Al final de la página la última sección no llega al centro: vale con que se vea
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
      if (!found && atBottom) {
        found = elements.findLast((el) => el.getBoundingClientRect().top < window.innerHeight)
      }
      setActive(found?.id ?? null)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      // Al salir de la home no queda ningún enlace marcado
      setActive(null)
    }
  }, [pathname, key])

  return active
}
