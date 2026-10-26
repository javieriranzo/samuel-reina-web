import { readSession, writeSession } from './storage'

const SESSION_KEY = 'sr:intro-seen'

/** La intro se muestra una vez por sesión y nunca con movimiento reducido. */
export function shouldPlayIntro(): boolean {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  return readSession(SESSION_KEY) === null
}

export function markIntroSeen(): void {
  writeSession(SESSION_KEY, '1')
}
