# Sencillos, colaboraciones y discografía completa desde Spotify

## Por qué

La web solo recogía seis lanzamientos y con dudas sobre varios títulos. El perfil de Spotify de Samuel (consultado el 28/10/2026) da la discografía completa: 5 discos, 9 sencillos y colaboraciones, con fechas exactas y tracklists.

## Qué cambia

- **Datos** (`src/data/releases.ts`): 5 discos con tracklist completo y enlace a Spotify, 9 sencillos con su portada y enlace, y un listado aparte de colaboraciones (`COLLABORATIONS`). Todos los títulos quedan confirmados.
- `Release.format` pasa a ser obligatorio (`'album' | 'single'`).
- **Último lanzamiento**: el más reciente por fecha, sea disco o sencillo (ahora *Ouigo a La Meca*). Su botón de Spotify lleva al lanzamiento, no al perfil.
- **Home, «La música»**: el índice se divide en *Discos* y *Sencillos*; debajo, *Colaboraciones* en texto, con enlace a Spotify.
- **`/discografia`**: tres bloques, *Discos*, *Sencillos* y *Colaboraciones*.
- **Ficha**: los discos muestran su tracklist completo; el rótulo indica «Disco» o «Sencillo».
- Duraciones de *Lo más escuchado* alineadas con Spotify.
- Portadas de los 8 sencillos nuevos, provisionales a 640 px (como las de los discos).

## Impacto

- Modifica `home` («Discografía») y `pages` («Rutas de la web» no cambia; ficha y listado sí).
- Código: `src/types/music.ts`, `src/data/releases.ts`, `src/sections/Discography.*`, `src/sections/LatestRelease.tsx`, `src/pages/DiscographyPage.*`, `src/pages/ReleasePage.tsx`.
- Documentación: `docs/contenido.md`.
