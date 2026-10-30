# Hoja de ruta

Cada fase se convierte en uno o varios cambios de OpenSpec (`openspec/changes/`).

- [x] **Fase 0 — Estructura.** Carpetas, README, CLAUDE.md, OpenSpec, `.claude/`.
- [x] **Fase 1 — Base técnica.** Vite + React + TS, oxlint/Prettier, tokens de diseño, tipografías, reset, Lenis + GSAP, grano y cursor. → `openspec/changes/setup-foundation/`
- [x] **Fase 2 — Layout.** Header, menú móvil, footer «Fin», botón de sonido. → `openspec/changes/add-site-layout/`
- [x] **Fase 3 — Home (primera mitad).** Intro, Hero, Último lanzamiento, Dos voces. → `openspec/changes/add-home-opening/`
- [x] **Fase 4 — Home (segunda mitad).** Discografía, Créditos de doblaje, En directo, Manifiesto, Vídeo, Contacto. → `openspec/changes/add-home-closing/`
- [ ] **Newsletter.** Elegir proveedor (Mailchimp, Brevo, Buttondown…) e integrar el formulario.
- [x] **Fase 5 — Audio.** Reproductor con onda real, demo reel, saludo con su voz (infraestructura lista; faltan los archivos). → `openspec/changes/add-audio-player/`
- [x] **Fase 6 — Páginas secundarias.** Biografía, discografía y fichas de disco, doblaje, legales y 404 (estructura lista; falta contenido). → `openspec/changes/add-secondary-pages/`
- [ ] **Fase 7 — Pulido.** SEO (metadatos, OG, datos estructurados `MusicGroup`/`Person`), rendimiento, accesibilidad, analítica.
- [ ] **Fase 8 — Publicación.** Dominio, hosting, despliegue continuo. El hosting debe servir `index.html` en cualquier ruta (SPA) y revisar los textos legales antes de publicar.
- [ ] **Sincronización con Spotify.** Hoy la discografía y «Lo más escuchado» se copian a mano en `src/data/releases.ts`: un lanzamiento nuevo no aparece hasta editarlo y volver a publicar. Plan:
  - Script de sincronización con la Web API de Spotify (credenciales de cliente): lanzamientos del artista (discos y sencillos), temas con duración, portadas y temas más escuchados. Genera los datos y descarga las portadas.
  - Los campos que no vienen de Spotify (descripciones, `titleConfirmed`, notas) pasan a un archivo aparte escrito a mano que se combina con lo sincronizado, para no perderlos.
  - Tarea programada (p. ej. GitHub Actions, diaria) que ejecuta el script y, si hay cambios, reconstruye y publica. Depende de la Fase 8 (hosting y despliegue continuo).
  - Requisitos: app gratuita en el panel de desarrolladores de Spotify; credenciales como secreto del CI, nunca en el cliente.
  - Descartado: consultar Spotify en tiempo real desde el navegador (necesita un servidor intermedio para no exponer credenciales y hace la web más lenta).
