import type { ReactNode } from 'react'
import { PageHeader } from '@/components/layout/PageHeader'
import { BROWSER_STORAGE, LEGAL_OWNER, LEGAL_REVIEWED_AT } from '@/data/legal'
import { usePageMeta } from '@/hooks/usePageMeta'
import './LegalPage.css'

type Doc = 'aviso-legal' | 'privacidad' | 'cookies'

type Section = { heading: string; body: ReactNode }

const PENDING = '[Pendiente]'

function Pending({ children }: { children: ReactNode }) {
  return <p className="legal__pending">{children}</p>
}

function OwnerData() {
  const rows: [string, string | null][] = [
    ['Titular', LEGAL_OWNER.name],
    ['NIF', LEGAL_OWNER.nif],
    ['Domicilio', LEGAL_OWNER.address],
    ['Email de contacto', LEGAL_OWNER.email],
  ]
  return (
    <dl className="legal__owner">
      {rows.map(([label, value]) => (
        <div key={label}>
          <dt className="label">{label}</dt>
          <dd>{value ?? PENDING}</dd>
        </div>
      ))}
    </dl>
  )
}

// Estructura de cada texto. El contenido marcado como pendiente debe redactarlo o revisarlo
// un profesional antes de publicar la web.
const DOCS: Record<Doc, { title: string; sections: Section[] }> = {
  'aviso-legal': {
    title: 'Aviso legal',
    sections: [
      { heading: 'Datos del titular', body: <OwnerData /> },
      {
        heading: 'Objeto',
        body: <Pending>Finalidad de la web y condiciones de uso. {PENDING}</Pending>,
      },
      {
        heading: 'Propiedad intelectual',
        body: (
          <p>
            La música, las grabaciones, la voz, las imágenes y la marca «Samuel Reina» pertenecen a
            sus respectivos titulares.{' '}
            <span className="legal__pending">
              Detalle de titulares y usos permitidos: {PENDING}
            </span>
          </p>
        ),
      },
      {
        heading: 'Responsabilidad',
        body: <Pending>Exclusión de responsabilidad y enlaces a terceros. {PENDING}</Pending>,
      },
      { heading: 'Legislación aplicable', body: <Pending>{PENDING}</Pending> },
    ],
  },
  privacidad: {
    title: 'Política de privacidad',
    sections: [
      { heading: 'Responsable del tratamiento', body: <OwnerData /> },
      {
        heading: 'Qué datos tratamos',
        body: (
          <p>
            Esta web no tiene formularios ni cuentas de usuario. Solo se tratan los datos que nos
            envíes por email.{' '}
            <span className="legal__pending">Revisar si se añade newsletter o analítica.</span>
          </p>
        ),
      },
      { heading: 'Finalidad y legitimación', body: <Pending>{PENDING}</Pending> },
      { heading: 'Conservación', body: <Pending>{PENDING}</Pending> },
      {
        heading: 'Tus derechos',
        body: (
          <Pending>
            Acceso, rectificación, supresión, oposición, limitación y portabilidad; reclamación ante
            la AEPD. {PENDING}
          </Pending>
        ),
      },
    ],
  },
  cookies: {
    title: 'Política de cookies',
    sections: [
      {
        heading: 'Qué usa esta web',
        body: (
          <p>
            Esta web no usa cookies de analítica ni de publicidad. Guarda en tu navegador estas
            preferencias técnicas, que no salen de tu dispositivo:
          </p>
        ),
      },
      {
        heading: 'Almacenamiento en tu navegador',
        body: (
          <div className="legal__table-wrap">
            <table className="legal__table">
              <thead>
                <tr>
                  <th scope="col">Clave</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Para qué</th>
                  <th scope="col">Duración</th>
                </tr>
              </thead>
              <tbody>
                {BROWSER_STORAGE.map((item) => (
                  <tr key={item.key}>
                    <td>
                      <code>{item.key}</code>
                    </td>
                    <td>{item.type}</td>
                    <td>{item.purpose}</td>
                    <td>{item.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ),
      },
      {
        heading: 'Contenido de terceros',
        body: (
          <p>
            Los vídeos de YouTube solo se cargan cuando pulsas reproducir, desde el dominio
            youtube-nocookie.com. Los enlaces a Spotify abren su web, con sus propias políticas.
          </p>
        ),
      },
      {
        heading: 'Cómo borrar estos datos',
        body: <Pending>Instrucciones por navegador. {PENDING}</Pending>,
      },
    ],
  },
}

type Props = { doc: Doc }

export function LegalPage({ doc }: Props) {
  const { title, sections } = DOCS[doc]
  usePageMeta(title)

  return (
    <>
      <PageHeader kicker="Información legal" title={title} />
      <div className="legal">
        {LEGAL_REVIEWED_AT ? (
          <p className="label">Última revisión: {LEGAL_REVIEWED_AT}</p>
        ) : (
          <p className="legal__draft" role="note">
            Borrador pendiente de revisión legal. Los datos marcados como {PENDING} se completarán
            antes de la publicación.
          </p>
        )}
        {sections.map((section) => (
          <section key={section.heading} className="legal__section">
            <h2 className="legal__heading">{section.heading}</h2>
            {section.body}
          </section>
        ))}
      </div>
    </>
  )
}
