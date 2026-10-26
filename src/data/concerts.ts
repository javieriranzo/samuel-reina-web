import type { Concert } from '@/types/career'

// Pendiente de recibir de Samuel (ver docs/contenido.md).
export const CONCERTS: Concert[] = []

/** Conciertos de hoy en adelante, ordenados por fecha. */
export function upcomingConcerts(today = new Date()): Concert[] {
  const todayIso = today.toISOString().slice(0, 10)
  return CONCERTS.filter((c) => c.date >= todayIso).sort((a, b) => a.date.localeCompare(b.date))
}
