# Botón «Volver arriba»

## Por qué

Con las secciones de la home a pantalla completa la página es larga; un acceso fijo para volver al principio evita tener que deshacer todo el scroll.

## Qué cambia

- Botón fijo «Volver arriba» en la esquina inferior derecha, por encima de la línea de montaje.
- Aparece al bajar más de una pantalla y se oculta arriba del todo.
- Vuelve arriba con el scroll suave (o directo con movimiento reducido) y deja el foco al principio del contenido.
- En móvil se muestra solo la flecha; en escritorio, flecha y texto.

## Impacto

- Añade el requisito «Volver arriba» a `layout`.
- Código: nuevos `src/components/layout/BackToTop.tsx` y `BackToTop.css`; `src/components/layout/SiteLayout.tsx`, `src/styles/tokens.css`.
