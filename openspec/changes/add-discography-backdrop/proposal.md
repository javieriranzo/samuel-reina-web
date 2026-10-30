# Portadas de fondo en «La música»

## Por qué

La sección de Música es un índice tipográfico sobre negro. Un carrusel muy tenue con las portadas de los discos, a modo de marca de agua, le da textura y recuerda qué se está mirando sin competir con el índice.

## Qué cambia

- Detrás del contenido de la sección «La música», las portadas de los discos se suceden en bucle con un fundido lento, en blanco y negro y a muy baja opacidad.
- El carrusel solo avanza mientras la sección está en pantalla y la pestaña visible.
- Con movimiento reducido no hay carrusel: se muestra fija la portada del disco más reciente.
- Es decorativo (`aria-hidden`) y no cambia el contraste del texto.

## Impacto

- Añade un escenario al requisito «Discografía» de `home` (parte del texto de `full-screen-home-sections`; archivar después de ese cambio).
- Código: nuevos `src/sections/DiscographyBackdrop.tsx` y `DiscographyBackdrop.css`; `src/sections/Discography.tsx`, `Discography.css`, `src/styles/tokens.css`.
