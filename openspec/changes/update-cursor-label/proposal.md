# Cursor: puntero del sistema con etiqueta PLAY/REC

## Por qué

El punto ámbar que sustituye al puntero del sistema no convence: resulta extraño moverse por la web sin el puntero de siempre. La idea de señalar música y doblaje con PLAY/REC sí se mantiene.

## Qué cambia

- El puntero del sistema se ve siempre; desaparece el punto ámbar y el círculo grande.
- Sobre elementos con `data-cursor="play" | "rec"` aparece una etiqueta pequeña «▶ PLAY» (ámbar) o «● REC» (rojo) junto al puntero, que lo sigue.
- Sin cambios en dispositivos táctiles ni con movimiento reducido: no se muestra la etiqueta.

## Impacto

- Modifica `motion` (requisito «Cursor personalizado»).
- Código: `Cursor.tsx`, `Cursor.css`, `global.css` (se elimina la ocultación del cursor nativo).
- Documentación: `docs/direccion-artistica.md`.
