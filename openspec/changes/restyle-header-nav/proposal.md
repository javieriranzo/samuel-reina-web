# Nuevo estilo del menú de la cabecera

## Por qué

Tras quitar el monograma y el botón de sonido, el menú es lo único de la cabecera. Se elige entre varias opciones (página de prueba `nav-preview.html`) un estilo más de rótulo técnico, coherente con los timecodes de la web, y se añade la indicación de la sección en la que está el usuario.

## Qué cambia

- Enlaces en JetBrains Mono, mayúsculas, tamaño y espaciado de `.label`.
- Se mantiene el subrayado ámbar al pasar el ratón.
- La sección de la home que está en pantalla se marca en ámbar en el menú (`aria-current`).
- En escritorio, los enlaces van dentro de una cápsula flotante con fondo translúcido; la barra deja de tener fondo propio. En móvil la barra conserva el fondo al hacer scroll.

## Impacto

- Modifica el requisito «Cabecera de navegación» de `layout` (parte del texto de `remove-header-monogram`; archivar después de ese cambio).
- Código: `src/components/layout/Header.tsx`, `Header.css`, nuevo `src/hooks/useActiveSection.ts`.
- Se borra la página temporal `nav-preview.html`.
