# Quitar el botón de sonido

## Por qué

El botón «Activar sonido» de la cabecera no aporta: la web no tiene sonido ambiente y cada fragmento ya tiene su propio botón de reproducir. Además, el saludo que dependía de él nunca se llegó a grabar.

## Qué cambia

- Se elimina el botón de sonido de la cabecera.
- Se elimina la preferencia global de sonido (`sr:sound`) y su enlace con el reproductor.
- Se elimina el saludo de audio (`GREETING_AUDIO`, `sr:greeting-played`).

## Impacto

- Elimina los requisitos «Preferencia de sonido» de `layout` y «Sonido y reproducción enlazados» y «Saludo» de `audio`; modifica «Cabecera de navegación».
- Código: se borran `SoundToggle.tsx`, `SoundToggle.css`, `SoundProvider.tsx` y `src/hooks/useSound.ts`; `src/App.tsx`, `Header.tsx`, `PlayerProvider.tsx`, `src/lib/contexts.ts`, `src/data/media.ts`, `src/data/legal.ts`.
- Documentación: `docs/contenido.md`, `docs/direccion-artistica.md`.
