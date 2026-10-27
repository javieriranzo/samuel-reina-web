import { Link } from 'react-router'
import { PageHeader } from '@/components/layout/PageHeader'
import { EmptyState } from '@/components/ui/EmptyState'
import { BIO } from '@/data/bio'
import { usePageMeta } from '@/hooks/usePageMeta'
import artistPhoto from '@/assets/images/artist.jpg'
import './BioPage.css'

export function BioPage() {
  usePageMeta('Biografía', BIO.short ?? undefined)
  const hasBio = BIO.short !== null || BIO.paragraphs.length > 0

  return (
    <>
      <PageHeader
        kicker="Biografía · Cantante y actor de doblaje"
        title={
          <>
            Samuel <em>Reina</em>
          </>
        }
      >
        {BIO.short && <p>{BIO.short}</p>}
      </PageHeader>

      <div className="bio">
        <figure className="bio__photo">
          <img
            src={artistPhoto}
            alt="Samuel Reina con una bolsa negra cubriéndole la cabeza"
            width={640}
            height={640}
          />
        </figure>

        <div className="bio__text">
          {hasBio ? (
            BIO.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)
          ) : (
            <EmptyState title="Biografía en preparación" seed={11}>
              <p>Mientras tanto, la mejor presentación es su música.</p>
              <Link to="/discografia">
                Escuchar la discografía <span aria-hidden="true">→</span>
              </Link>
            </EmptyState>
          )}
        </div>
      </div>
    </>
  )
}
