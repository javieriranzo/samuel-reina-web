# Páginas secundarias: biografía, discografía, doblaje, legales y 404

## Por qué

La home resume; las páginas secundarias amplían cuando llegue el contenido (biografía larga, discografía con tracklists, todos los créditos de doblaje) y cubren lo obligatorio (textos legales). El contenido aún no existe: esta fase prepara rutas, plantillas y datos para que solo haya que rellenarlos.

## Qué cambia

- **Enrutado** con React Router (modo declarativo) y páginas secundarias cargadas bajo demanda.
- **Rutas**:
  - `/biografia` — biografía corta y larga, foto.
  - `/discografia` — todos los lanzamientos.
  - `/discografia/:id` — ficha de lanzamiento: portada, fecha, tracklist, enlaces.
  - `/doblaje` — créditos agrupados por año, con fragmentos.
  - `/aviso-legal`, `/privacidad`, `/cookies` — estructura de los textos legales (borrador; texto definitivo pendiente de revisión legal).
  - `*` — 404 «Fin de la cinta».
- **Navegación entre páginas**: los enlaces del menú llevan a las secciones de la home desde cualquier página (`/#musica`); al cambiar de página se vuelve arriba; al llegar con `#ancla` se desplaza a la sección.
- **Enlaces «ver más»** desde la home: discografía completa, ficha de cada disco, todos los créditos, biografía.
- **Título y descripción por página** (`usePageMeta`).
- **Estados vacíos** en todas las páginas mientras no haya contenido; nunca datos inventados.

## Impacto

- Capacidad nueva: `pages`.
- Modifica `layout` (navegación con rutas y gestión del scroll) y `motion` (las anclas pasan de Lenis a un gestor propio que funciona entre páginas).
- Despliegue (fase 8): el hosting necesitará redirigir todas las rutas a `index.html`.
