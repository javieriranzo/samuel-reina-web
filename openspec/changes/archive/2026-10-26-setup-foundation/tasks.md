# Tareas

## 1. Proyecto

- [x] 1.1 Crear proyecto Vite (plantilla `react-ts`) en la raíz sin sobrescribir la documentación
- [x] 1.2 Configurar oxlint (linter por defecto de la plantilla Vite actual) + Prettier y los scripts `lint`, `format`, `format:check`
- [x] 1.3 Definir alias `@/` → `src/`
- [x] 1.4 Añadir `engines` (Node ≥ 24) en `package.json` (`.editorconfig` ya existe)

## 2. Sistema de diseño

- [x] 2.1 `src/styles/tokens.css` con paleta, tipografía, espaciado, radios y duraciones
- [x] 2.2 Cargar las tres familias tipográficas (autoalojadas con Fontsource, `font-display: swap`)
- [x] 2.3 `src/styles/reset.css` y `src/styles/global.css`

## 3. Movimiento

- [x] 3.1 Instalar `gsap`, `@gsap/react` y `lenis` (registro de plugins en `src/animations/gsap.ts`)
- [x] 3.2 Hook `useReducedMotion` (sobre `useMediaQuery`)
- [x] 3.3 Proveedor de scroll suave (Lenis sincronizado con ScrollTrigger), desactivado con movimiento reducido

## 4. Atmósfera

- [x] 4.1 Componente `FilmGrain` (capa fija, sin interacción, `aria-hidden`)
- [x] 4.2 Componente `Cursor` (punto ámbar; estados PLAY/REC vía `data-cursor`; oculto en dispositivos táctiles)

## 5. Verificación

- [x] 5.1 `npm run build` y `npm run lint` sin errores
- [x] 5.2 Página de inicio con el nombre del artista renderizando con los tokens
