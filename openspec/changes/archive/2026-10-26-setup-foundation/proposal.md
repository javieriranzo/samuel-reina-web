# Base técnica del proyecto

## Por qué

El repositorio solo contiene estructura y documentación. Antes de construir secciones necesitamos la base técnica y el sistema de diseño (tokens, tipografía, movimiento) que todas las secciones van a compartir.

## Qué cambia

- Crear el proyecto con Vite + React + TypeScript en la raíz.
- Configurar ESLint y Prettier.
- Definir los tokens de diseño (colores, tipografía, espaciado, duraciones) en `src/styles/tokens.css`.
- Cargar las tipografías Instrument Serif, Inter Tight y JetBrains Mono.
- Reset y estilos globales (fondo negro sala, selección, foco visible).
- Integrar Lenis + GSAP ScrollTrigger con soporte de `prefers-reduced-motion`.
- Componentes de atmósfera: grano de película y cursor personalizado.
- Página de inicio vacía que muestra «Samuel Reina» con los tokens aplicados.

## Impacto

- Capacidades nuevas: `design-system`, `motion`.
- Afecta a todo el código futuro: todas las secciones usarán estos tokens y utilidades.
