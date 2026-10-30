import { Suspense } from 'react'
import { Outlet } from 'react-router'
import { MAIN_ID, PAGE_ID } from '@/lib/dom'
import { BackToTop } from './BackToTop'
import { Cursor } from './Cursor'
import { FilmGrain } from './FilmGrain'
import { Footer } from './Footer'
import { Header } from './Header'
import { NowPlaying } from './NowPlaying'
import { ScrollManager } from './ScrollManager'
import { SkipLink } from './SkipLink'

/** Estructura común a todas las páginas. */
export function SiteLayout() {
  return (
    <>
      <ScrollManager />
      <SkipLink />
      <Header />
      <div id={PAGE_ID}>
        <main id={MAIN_ID} tabIndex={-1}>
          {/* Páginas secundarias cargadas bajo demanda: sin indicador, son ligeras */}
          <Suspense fallback={<div className="page-loading" />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
        {/* Dentro de la página: inerte con el menú móvil abierto */}
        <BackToTop />
      </div>
      <FilmGrain />
      <NowPlaying />
      <Cursor />
    </>
  )
}
