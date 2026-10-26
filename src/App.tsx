import { Cursor } from '@/components/layout/Cursor'
import { FilmGrain } from '@/components/layout/FilmGrain'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { SkipLink } from '@/components/layout/SkipLink'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { SoundProvider } from '@/components/layout/SoundProvider'
import { MAIN_ID, PAGE_ID } from '@/lib/dom'
import { Home } from '@/pages/Home'

export function App() {
  return (
    <SmoothScroll>
      <SoundProvider>
        <SkipLink />
        <Header />
        <div id={PAGE_ID}>
          <main id={MAIN_ID} tabIndex={-1}>
            <Home />
          </main>
          <Footer />
        </div>
        <FilmGrain />
        <Cursor />
      </SoundProvider>
    </SmoothScroll>
  )
}
