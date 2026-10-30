import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { PlayerProvider } from '@/components/layout/PlayerProvider'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { Home } from '@/pages/Home'

// La home va en el bundle principal; el resto se carga al visitarlo
const BioPage = lazy(() => import('@/pages/BioPage').then((m) => ({ default: m.BioPage })))
const DiscographyPage = lazy(() =>
  import('@/pages/DiscographyPage').then((m) => ({ default: m.DiscographyPage })),
)
const ReleasePage = lazy(() =>
  import('@/pages/ReleasePage').then((m) => ({ default: m.ReleasePage })),
)
const DubbingPage = lazy(() =>
  import('@/pages/DubbingPage').then((m) => ({ default: m.DubbingPage })),
)
const LegalPage = lazy(() => import('@/pages/LegalPage').then((m) => ({ default: m.LegalPage })))
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
)

export function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <PlayerProvider>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route index element={<Home />} />
              <Route path="biografia" element={<BioPage />} />
              <Route path="discografia" element={<DiscographyPage />} />
              <Route path="discografia/:id" element={<ReleasePage />} />
              <Route path="doblaje" element={<DubbingPage />} />
              <Route path="aviso-legal" element={<LegalPage doc="aviso-legal" />} />
              <Route path="privacidad" element={<LegalPage doc="privacidad" />} />
              <Route path="cookies" element={<LegalPage doc="cookies" />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </PlayerProvider>
      </SmoothScroll>
    </BrowserRouter>
  )
}
