# Añadir la sección «Animal Persona»

## Por qué

Animal Persona es un proyecto musical de Samuel y debe tener su propio sitio en la home y en el menú principal.

## Qué cambia

- Nuevo punto de menú «Animal Persona» entre «Doblaje» y «Directo», que lleva a `/#animal-persona`.
- Nueva sección de la home entre los créditos de doblaje y «En directo», con su escena en la línea de montaje.
- El contenido (descripción y enlace para escucharlo) vive en `src/data/animalPersona.ts`. Mientras no esté confirmado, la sección muestra un aviso de «en preparación» en lugar de datos inventados.

## Impacto

- Añade el requisito «Animal Persona» a `home`; modifica «Cabecera de navegación» de `layout` (parte del texto de `restyle-header-nav`; archivar después de ese cambio).
- Código: `src/data/site.ts`, `src/pages/Home.tsx`, `src/types/music.ts`, nuevos `src/data/animalPersona.ts`, `src/sections/AnimalPersona.tsx` y `AnimalPersona.css`.
- Documentación: `docs/contenido.md`.
