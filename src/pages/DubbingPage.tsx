import { PageHeader } from '@/components/layout/PageHeader'
import { EmptyState } from '@/components/ui/EmptyState'
import { DUBBING_CREDITS } from '@/data/dubbing'
import { usePageMeta } from '@/hooks/usePageMeta'
import { CreditClip } from '@/sections/CreditClip'
import type { DubbingCredit } from '@/types/career'
import './DubbingPage.css'

/** Créditos agrupados por año, del más reciente al más antiguo. */
function groupByYear(credits: DubbingCredit[]): [number, DubbingCredit[]][] {
  const groups = new Map<number, DubbingCredit[]>()
  for (const credit of credits)
    groups.set(credit.year, [...(groups.get(credit.year) ?? []), credit])
  return [...groups.entries()].sort(([a], [b]) => b - a)
}

export function DubbingPage() {
  usePageMeta(
    'Doblaje',
    'Créditos de doblaje de Samuel Reina: personajes, producciones y demo reel.',
  )
  const groups = groupByYear(DUBBING_CREDITS)

  return (
    <div data-cursor="rec">
      <PageHeader
        kicker={
          <>
            <span aria-hidden="true">● </span>REC · Doblaje
          </>
        }
        tone="live"
        title={
          <>
            Con la voz de <em>Samuel Reina</em>
          </>
        }
      />

      <div className="dubbing">
        {groups.length > 0 ? (
          groups.map(([year, credits]) => (
            <section key={year} className="dubbing__year" aria-labelledby={`year-${year}`}>
              <h2 id={`year-${year}`} className="label dubbing__year-label">
                {year}
              </h2>
              <ul role="list">
                {credits.map((credit) => (
                  <li key={`${credit.production}-${credit.character}`} className="dubbing__credit">
                    <span className="dubbing__production">{credit.production}</span>
                    <span className="label">{credit.character}</span>
                    {credit.clip && <CreditClip credit={credit} clip={credit.clip} />}
                  </li>
                ))}
              </ul>
            </section>
          ))
        ) : (
          <EmptyState title="Créditos en postproducción" seed={404}>
            <p>Personajes, producciones y demo reel · Próximamente</p>
          </EmptyState>
        )}
      </div>
    </div>
  )
}
