import { Cursor } from '@/components/layout/Cursor'
import { FilmGrain } from '@/components/layout/FilmGrain'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { Home } from '@/pages/Home'

export function App() {
  return (
    <SmoothScroll>
      <Home />
      <FilmGrain />
      <Cursor />
    </SmoothScroll>
  )
}
