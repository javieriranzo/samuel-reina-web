# Quitar el monograma «SR» de la cabecera

## Por qué

El monograma compite con el nombre de la portada, que ya presenta al artista a gran tamaño. Se mantiene solo como favicon.

## Qué cambia

- Se elimina el logotipo «SR» de la cabecera; la navegación queda centrada y el botón de menú móvil a la derecha.
- El favicon (`public/favicon.svg`) no cambia.

## Impacto

- Modifica el requisito «Cabecera de navegación» de `layout` (parte del texto que deja `remove-sound-toggle`; archivar después de ese cambio).
- Código: `src/components/layout/Header.tsx`, `Header.css`.
