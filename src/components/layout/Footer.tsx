import { Link } from 'react-router'
import { CONTACT, SOCIAL_LINKS } from '@/data/site'
import './Footer.css'

const YEAR = new Date().getFullYear()

/** Pie con estética de créditos finales. */
export function Footer() {
  const socials = SOCIAL_LINKS.filter((link) => link.url !== null)

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
          <ul role="list" className="site-footer__socials">
            {socials.map((link) => (
              <li key={link.label}>
                <a href={link.url!} className="site-footer__value" target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="site-footer__end" aria-hidden="true">
        Fin
      </p>

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
