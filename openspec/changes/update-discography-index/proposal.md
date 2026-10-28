# Discografía como índice con portada

## Por qué

La tira de película fijada con desplazamiento horizontal no convence: obliga a recorrer los discos de lado y esconde los títulos bajo portadas pequeñas.

## Qué cambia

- La sección «La música» pasa a ser un **índice**: una fila por disco con año y título en serif grande, enlazada a su ficha.
- En escritorio, una **portada grande fija** a la derecha muestra el disco señalado (puntero o foco de teclado) con un fundido; por defecto, el más reciente. Las demás filas se atenúan.
- En móvil, cada fila lleva su miniatura; no hay portada fija.
- Desaparece la sección fijada con scroll horizontal.
- «Lo más escuchado» se mantiene debajo.

## Impacto

- Modifica `home` (requisito «Discografía»).
- Código: `src/sections/Discography.tsx` y `Discography.css`.
- Documentación: `docs/direccion-artistica.md` (movimiento y sección 5).
