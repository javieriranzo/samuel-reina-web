# Cabecera siempre visible

## Por qué

Con las secciones a pantalla completa y la sección activa marcada en el menú, el menú funciona como índice permanente de la home: debe verse siempre, también al bajar.

## Qué cambia

- La cabecera deja de ocultarse al hacer scroll hacia abajo; queda fija y visible en todo momento.

## Impacto

- Modifica el requisito «Cabecera de navegación» de `layout` (parte del texto de `add-animal-persona`; archivar después de ese cambio).
- Código: `src/components/layout/Header.tsx`, `Header.css`.
