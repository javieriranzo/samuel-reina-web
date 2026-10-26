import { useRef } from 'react'
import { useReveal } from '@/animations/useReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CONTACT, SOCIAL_LINKS } from '@/data/site'
import './Contact.css'

export function Contact() {
  const rootRef = useRef<HTMLElement>(null)
  const socials = SOCIAL_LINKS.filter((link) => link.url !== null)
  useReveal(rootRef)

  return (
    <section ref={rootRef} id="contacto" className="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        <SectionHeading id="contact-title" kicker="Contratación y prensa">
          ¿Hablamos<em>?</em>
        </SectionHeading>

        <div className="contact__grid">
          <div className="contact__block" data-reveal>
            <p className="label">Conciertos, doblaje y prensa</p>
            {CONTACT.email ? (
              <a href={`mailto:${CONTACT.email}`} className="contact__email">
                {CONTACT.email}
              </a>
            ) : (
              <p className="contact__email contact__email--pending">
                Email disponible próximamente
              </p>
            )}
          </div>

          {socials.length > 0 && (
            <div className="contact__block" data-reveal>
              <p className="label">Síguelo</p>
              <ul className="contact__socials" role="list">
                {socials.map((link) => (
                  <li key={link.label}>
                    <a href={link.url!} target="_blank" rel="noreferrer">
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
