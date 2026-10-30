# Pie sin «Fin» y con icono de Spotify

## Por qué

La palabra «Fin» en grande cierra la web con un gesto que ya no hace falta: con la fuente Anton queda como un bloque pesado justo antes de los avisos legales. En cambio, el enlace a Spotify, que es la red principal del artista, gana con su logo reconocible.

## Qué cambia

- Se quita la palabra «Fin» del pie.
- Las redes confirmadas de «Escúchalo en» que tienen logo (de momento, Spotify) se muestran con su logo completo (símbolo + nombre) en lugar del nombre en texto, en marfil y en ámbar al pasar el ratón. El nombre queda para lectores de pantalla.
- Logos completos (símbolo + nombre) de Spotify, Apple Music, YouTube y Amazon Music (nueva en `src/data/site.ts`), en ese orden y centrados en una fila (varias en móvil). Spotify, la red principal, algo más grande. Apple Music y Amazon Music son los logos de la cabecera de sus webs. En reposo van en un solo color (marfil Spotify, gris humo el resto); al pasar el ratón se amplían y toman los colores de su marca (tokens `--color-brand-*`). Se muestran siempre; mientras su URL no esté confirmada, el logo no es un enlace.

## Impacto

- Sustituye el requisito «Pie «Fin»» de `layout` por «Pie de créditos».
- Código: `src/components/layout/Footer.tsx`, `Footer.css`, nuevos `src/components/ui/SocialLogo.tsx` y `src/lib/socialLogos.ts`; `src/data/site.ts`; comentario en `src/sections/ReelTimeline.tsx`.
- Documentación: `docs/direccion-artistica.md`.
