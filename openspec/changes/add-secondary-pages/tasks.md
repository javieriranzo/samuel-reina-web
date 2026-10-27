# Tareas

## 1. Enrutado

- [x] 1.1 Instalar `react-router`; `BrowserRouter` y layout común con `<Outlet>`
- [x] 1.2 Rutas con carga diferida (`React.lazy`) para las páginas secundarias
- [x] 1.3 `ScrollManager`: arriba al cambiar de página, desplazamiento a `#ancla` (también desde otra página)
- [x] 1.4 Navegación, logo, menú móvil, pie y enlaces internos de la home con `Link`
- [x] 1.5 `usePageMeta` (título y descripción)

## 2. Datos

- [x] 2.1 `src/data/bio.ts` (corta, larga, foto) vacío
- [x] 2.2 `Release`: `tracklist`, `spotifyUrl`, `description` opcionales
- [x] 2.3 `src/data/legal.ts` con los datos del titular pendientes

## 3. Páginas

- [x] 3.1 `PageHeader` común (rótulo + título gigante)
- [x] 3.2 `/biografia`
- [x] 3.3 `/discografia` y `/discografia/:id` (404 si el id no existe)
- [x] 3.4 `/doblaje`
- [x] 3.5 `/aviso-legal`, `/privacidad`, `/cookies` (borrador con la estructura y lo almacenado realmente en el navegador)
- [x] 3.6 404 «Fin de la cinta»

## 4. Enlaces desde la home

- [x] 4.1 Discografía: portadas enlazadas a su ficha y «Discografía completa»
- [x] 4.2 Doblaje: «Todos los créditos»
- [x] 4.3 Manifiesto: «Biografía»

## 5. Verificación

- [x] 5.1 `npm run build` y `npm run lint` sin errores
- [x] 5.2 Revisión en navegador: recarga en `/discografia/ronda-sud`, títulos por página, vuelta arriba al cambiar de página, anclas desde otra página (escritorio y menú móvil, quedan a 80 px), 404, `/cookies` en móvil sin desbordamiento
