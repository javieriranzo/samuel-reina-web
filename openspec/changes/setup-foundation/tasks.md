# Tareas

## 1. Proyecto

- [ ] 1.1 Crear proyecto Vite (plantilla `react-ts`) en la raíz sin sobrescribir la documentación
- [ ] 1.2 Configurar ESLint + Prettier y el script `npm run lint`
- [ ] 1.3 Definir alias `@/` → `src/`
- [ ] 1.4 Añadir `engines` (Node ≥ 24) en `package.json` (`.editorconfig` ya existe)

## 2. Sistema de diseño

- [ ] 2.1 `src/styles/tokens.css` con paleta, tipografía, espaciado, radios y duraciones
- [ ] 2.2 Cargar las tres familias tipográficas (autoalojadas o Google Fonts con `display=swap`)
- [ ] 2.3 `src/styles/reset.css` y `src/styles/global.css`

## 3. Movimiento

- [ ] 3.1 Instalar `gsap`, `@gsap/react` y `lenis`
- [ ] 3.2 Hook `useReducedMotion`
- [ ] 3.3 Proveedor de scroll suave (Lenis sincronizado con ScrollTrigger), desactivado con movimiento reducido

## 4. Atmósfera

- [ ] 4.1 Componente `FilmGrain` (capa fija, sin interacción, `aria-hidden`)
- [ ] 4.2 Componente `Cursor` (punto ámbar; estados PLAY/REC; oculto en dispositivos táctiles)

## 5. Verificación

- [ ] 5.1 `npm run build` y `npm run lint` sin errores
- [ ] 5.2 Página de inicio con el nombre del artista renderizando con los tokens
