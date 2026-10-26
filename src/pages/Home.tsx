import { useCallback, useState } from 'react'
import { shouldPlayIntro } from '@/lib/intro'
import { Contact } from '@/sections/Contact'
import { Discography } from '@/sections/Discography'
import { DubbingCredits } from '@/sections/DubbingCredits'
import { FeaturedVideo } from '@/sections/FeaturedVideo'
import { Hero } from '@/sections/Hero'
import { Intro } from '@/sections/Intro'
import { LatestRelease } from '@/sections/LatestRelease'
import { Live } from '@/sections/Live'
import { Manifesto } from '@/sections/Manifesto'
import { TwoVoices } from '@/sections/TwoVoices'

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
      <Discography />
      <DubbingCredits />
      <Live />
      <Manifesto />
      <FeaturedVideo />
      <Contact />
    </>
  )
}
