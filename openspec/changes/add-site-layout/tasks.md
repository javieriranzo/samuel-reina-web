# Tareas

## 1. Datos y estado

- [x] 1.1 Tipos `NavItem` y `SocialLink` en `src/types/site.ts`
- [x] 1.2 `src/data/site.ts` con navegación, redes (solo las confirmadas) y contacto
- [x] 1.3 `SoundProvider` + `useSound` (desactivado por defecto, persistido en `localStorage` con try/catch)
- [x] 1.4 Exponer Lenis con `useLenis` y activar la navegación por anclas

## 2. Cabecera

- [x] 2.1 Componente `Header` con logotipo, navegación y botón de sonido
- [x] 2.2 Estados: transparente arriba, fondo difuminado tras hacer scroll, oculta al bajar y visible al subir (siempre visible con movimiento reducido)
- [x] 2.3 `SoundToggle` con `aria-pressed`

## 3. Menú móvil

- [x] 3.1 Botón de menú (`aria-expanded`, `aria-controls`) visible bajo 900 px
- [x] 3.2 Panel a pantalla completa con enlaces en serif gigante
- [x] 3.3 Cierre con Escape, al pulsar un enlace y con el botón; foco al primer enlace al abrir y de vuelta al botón al cerrar
- [x] 3.4 Bloqueo del scroll (Lenis `stop`/`start`) y `inert` en el resto de la página mientras está abierto

## 4. Pie «Fin»

- [x] 4.1 Componente `Footer` con contacto, redes como créditos, «Fin» y enlaces legales

## 5. Accesibilidad y montaje

- [x] 5.1 Enlace «Saltar al contenido»
- [x] 5.2 Montar el layout en `App` y añadir a la home secciones provisionales con sus `id`

## 6. Verificación

- [x] 6.1 `npm run build` y `npm run lint` sin errores
- [x] 6.2 Revisión en navegador (escritorio y móvil a 390 px): anclas, menú, Escape, foco, sonido y pie
