# «Último lanzamiento» en el menú y a pantalla completa

## Por qué

El último lanzamiento es lo primero que se quiere promocionar, pero no tenía acceso desde el menú ni se comportaba como el resto de secciones de destino.

## Qué cambia

- Nuevo primer punto de menú «Último lanzamiento», que lleva a `/#lanzamiento`.
- La sección de último lanzamiento pasa a medir el alto de la pantalla con el contenido centrado, como las demás secciones del menú.
- Para que quepa en una pantalla, la portada se limita también por el alto de la pantalla y, por debajo de 1024 px, se coloca encima del texto en tamaño reducido.

## Impacto

- Modifica «Cabecera de navegación» de `layout` (parte del texto de `keep-header-visible`) y «Secciones a pantalla completa» de `home` (parte de `full-screen-home-sections`); archivar después de esos cambios.
- Código: `src/data/site.ts`, `src/sections/LatestRelease.tsx`, `LatestRelease.css`.
