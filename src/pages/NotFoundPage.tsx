import { Link } from 'react-router'
import { usePageMeta } from '@/hooks/usePageMeta'
import './NotFoundPage.css'

export function NotFoundPage() {
  usePageMeta('Página no encontrada')

  return (
    <section className="not-found">
      <p className="label not-found__tc">Error 404 · TC --:--:--:--</p>
      <h1 className="not-found__title">
        Fin de <em>la cinta</em>
      </h1>
      <p className="not-found__text">Esta escena no existe o se quedó en la sala de montaje.</p>
      <Link to="/" className="not-found__link">
        Volver al inicio
      </Link>
    </section>
  )
}
