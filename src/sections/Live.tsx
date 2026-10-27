import { useRef } from 'react'
import { Link } from 'react-router'
import { useReveal } from '@/animations/useReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { upcomingConcerts } from '@/data/concerts'
import './Live.css'

function formatDay(iso: string): string {
  const [, m, d] = iso.split('-')
  return `${d}.${m}`
}

export function Live() {
  const rootRef = useRef<HTMLElement>(null)
  const concerts = upcomingConcerts()
  useReveal(rootRef)

  return (
    <section ref={rootRef} id="directo" className="live" aria-labelledby="live-title">
      <div className="live__inner">
        <SectionHeading
          id="live-title"
          kicker={
            <>
              <span className="live__dot" aria-hidden="true" />
              On air
            </>
          }
          tone="live"
        >
          En <em>directo</em>
        </SectionHeading>

        {concerts.length > 0 ? (
          <ul className="live__list" role="list">
            {concerts.map((concert) => (
              <li key={`${concert.date}-${concert.city}`} className="live__row" data-reveal>
                <time className="label live__date" dateTime={concert.date}>
                  {formatDay(concert.date)}
                </time>
                <span className="live__city">{concert.city}</span>
                <span className="live__venue">{concert.venue}</span>
                {concert.ticketsUrl ? (
                  <a
                    href={concert.ticketsUrl}
                    className="live__tickets"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Entradas
                    <span className="visually-hidden">
                      {' '}
                      para {concert.city}, {formatDay(concert.date)}
                    </span>
                  </a>
                ) : (
                  <span className="label">Venta próximamente</span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="live__empty" data-reveal>
            <p className="live__empty-title">No hay fechas anunciadas ahora mismo.</p>
            <Link to="/#contacto" className="live__empty-link">
              Contratar a Samuel <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
