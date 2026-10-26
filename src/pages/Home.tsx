import { useCallback, useState } from 'react'
import { NAV_ITEMS } from '@/data/site'
import { shouldPlayIntro } from '@/lib/intro'
import { Hero } from '@/sections/Hero'
import { Intro } from '@/sections/Intro'
import { LatestRelease } from '@/sections/LatestRelease'
import { TwoVoices } from '@/sections/TwoVoices'
import './Home.css'

type IntroState = 'playing' | 'revealing' | 'done'

export function Home() {
  const [intro, setIntro] = useState<IntroState>(() => (shouldPlayIntro() ? 'playing' : 'done'))
  const onReveal = useCallback(() => setIntro('revealing'), [])
  const onComplete = useCallback(() => setIntro('done'), [])

  return (
    <>
      {intro !== 'done' && <Intro onReveal={onReveal} onComplete={onComplete} />}
      <Hero ready={intro !== 'playing'} />
      <LatestRelease />
      <TwoVoices />

      {/* Secciones provisionales hasta la fase 4 */}
      {NAV_ITEMS.map((item) => (
        <section key={item.id} id={item.id} className="home__placeholder">
          <h2>{item.label}</h2>
          <p className="label">Próximamente</p>
        </section>
      ))}
    </>
  )
}
