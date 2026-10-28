# Quitar la sección «Dos voces»

## Por qué

La pantalla dividida *La música* / *El doblaje* no aporta: repite lo que ya cuentan la portada («Cantante · Actor de doblaje») y las secciones de discografía y doblaje que vienen justo después.

## Qué cambia

- Se elimina la sección «Dos voces» de la home.
- Se quita su escena de la línea de montaje.

## Impacto

- Elimina el requisito «Dos voces» de `home`.
- Código: se borran `src/sections/TwoVoices.tsx` y `TwoVoices.css`; `src/pages/Home.tsx`, `src/data/site.ts`.
- Documentación: `docs/direccion-artistica.md`.
