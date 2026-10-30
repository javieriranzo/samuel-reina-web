import { Link } from 'react-router'
import { SocialLogo } from '@/components/ui/SocialLogo'
import { CONTACT, SOCIAL_LINKS } from '@/data/site'
import { FEATURED_SOCIAL, hasSocialLogo, LOGO_ORDER } from '@/lib/socialLogos'
import type { SocialLink } from '@/types/site'
import './Footer.css'

const YEAR = new Date().getFullYear()

function SocialLogoLink({ link, featured }: { link: SocialLink; featured: boolean }) {
  const className = `site-footer__social${featured ? ' site-footer__social--featured' : ''}`
  // Sin enlace confirmado: el logo se muestra, pero no es un enlace
  if (!link.url) {
    return (
      <span className={`${className} site-footer__social--pending`} data-brand-hover>
        <SocialLogo name={link.label} className="site-footer__logo" />
        <span className="visually-hidden">{link.label} (próximamente)</span>
      </span>
    )
  }
  return (
    <a href={link.url} className={className} target="_blank" rel="noreferrer" data-brand-hover>
      <SocialLogo name={link.label} className="site-footer__logo" />
      {/* El logo sustituye al nombre, que queda para lectores de pantalla */}
      <span className="visually-hidden">{link.label}</span>
    </a>
  )
}

/** Pie con estética de créditos finales. */
export function Footer() {
  const socials = SOCIAL_LINKS.filter((link) => link.url !== null)
  // Redes con logo (con o sin enlace), en el orden fijado para el pie
  const logoRow = SOCIAL_LINKS.filter((link) => hasSocialLogo(link.label)).sort(
    (a, b) => LOGO_ORDER.indexOf(a.label) - LOGO_ORDER.indexOf(b.label),
  )
  const textOnly = socials.filter((link) => !hasSocialLogo(link.label))

  return (
    <footer className="site-footer">
      <div className="site-footer__credits">
        {/* Mientras el email esté pendiente no se repite el aviso de la sección de contacto */}
        {CONTACT.email && (
          <div className="site-footer__credit">
            <p className="label">Contratación y prensa</p>
            <a href={`mailto:${CONTACT.email}`} className="site-footer__value">
              {CONTACT.email}
            </a>
          </div>
        )}

        <div className="site-footer__credit">
          <p className="label">Escúchalo en</p>
          {logoRow.length > 0 && (
            <ul role="list" className="site-footer__logos">
              {logoRow.map((link) => (
                <li key={link.label}>
                  <SocialLogoLink link={link} featured={link.label === FEATURED_SOCIAL} />
                </li>
              ))}
            </ul>
          )}
          {textOnly.length > 0 && (
            <ul role="list" className="site-footer__socials">
              {textOnly.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url!}
                    className="site-footer__value"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="site-footer__legal label">
        <p>© {YEAR} Samuel Reina</p>
        <ul role="list">
          <li>
            <Link to="/aviso-legal">Aviso legal</Link>
          </li>
          <li>
            <Link to="/privacidad">Privacidad</Link>
          </li>
          <li>
            <Link to="/cookies">Cookies</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
