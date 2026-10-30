# Secciones de la home a pantalla completa

## Por qué

Cada destino del menú (Música, Doblaje, Animal Persona, Directo, Bio y Contacto) debe leerse como una escena completa: al llegar a ella, ocupa exactamente el alto de la pantalla, con el contenido centrado.

## Qué cambia

- Esas seis secciones miden el alto de la pantalla (`100svh`) y centran su contenido en vertical. El margen superior e inferior es el alto de la cabecera, para que ni la cabecera ni la línea de montaje tapen el contenido.
- Música se resume para caber en una pantalla: en la home solo quedan los discos y la portada del señalado. Sencillos, colaboraciones y «Lo más escuchado» pasan a verse solo en `/discografia`, enlazada con «Discografía completa».
- Se usa altura mínima, no fija: si en una pantalla muy baja (móvil en horizontal) el contenido no cabe, la sección crece en lugar de recortarlo.

## Impacto

- Modifica el requisito «Discografía» de `home` (parte del texto de `update-discography-index`; archivar después de ese cambio) y añade «Secciones a pantalla completa».
- Código: `src/sections/Discography.tsx` y los CSS de `Discography`, `DubbingCredits`, `AnimalPersona`, `Live`, `Manifesto` y `Contact`; `src/styles/global.css`.
