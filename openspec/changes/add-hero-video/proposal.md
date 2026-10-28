# Vídeo en bucle en la portada

## Por qué

La portada gana presencia con imagen en movimiento. Se usará un fragmento del videoclip de *Tango Suite Pandiman* (canal oficial de Samuel), alojado en la propia web en lugar de incrustar YouTube: sin marcas de YouTube, sin cargar código de terceros al abrir la página y sin conexión con Google antes del consentimiento.

## Qué cambia

- La portada muestra un vídeo en bucle, sin sonido, cuando `HERO_VIDEO` (en `src/data/media.ts`) tiene archivo; mientras no lo tenga, sigue la foto actual.
- La foto actúa como póster mientras carga el vídeo.
- No se carga el vídeo con movimiento reducido ni con ahorro de datos: se ve la foto.
- El vídeo se pausa cuando la portada sale de la pantalla.
- Mismo tratamiento que la foto: blanco y negro, luz ámbar y fundidos al negro.

## Impacto

- Modifica `home` (requisito «Portada»).
- Código: `src/sections/Hero.tsx`, `src/data/media.ts`, `src/types/career.ts`.
- Contenido pendiente: fragmento de 10–20 s en MP4 (H.264) y opcionalmente WebM, en `public/video/`.
