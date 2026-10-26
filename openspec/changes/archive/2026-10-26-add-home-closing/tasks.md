# Tareas

## 1. Datos

- [x] 1.1 `TOP_TRACKS` en `src/data/releases.ts` con enlace a Spotify por tema
- [x] 1.2 Tipos y datos vacíos: `DubbingCredit` (`dubbing.ts`), `Concert` (`concerts.ts`), `FeaturedVideo` (`media.ts`)

## 2. Secciones

- [x] 2.1 `Discography`: tira de película, fijada en horizontal en escritorio sin movimiento reducido; scroll nativo horizontal en el resto
- [x] 2.2 `TopTracks`: lista numerada con duración y enlace a Spotify
- [x] 2.3 `DubbingCredits`: créditos con fragmento y timecode; estado vacío
- [x] 2.4 `Live`: fechas con entradas; estado vacío con enlace a contacto
- [x] 2.5 `Manifesto`: palabras que se iluminan con el scroll
- [x] 2.6 `FeaturedVideo`: 2.39:1, solo si hay vídeo
- [x] 2.7 `Contact`: contratación y prensa, redes

## 3. Montaje

- [x] 3.1 Sustituir las secciones provisionales en la home

## 4. Verificación

- [x] 4.1 `npm run build` y `npm run lint` sin errores
- [x] 4.2 Revisión en navegador: escritorio 1440×900 (pin horizontal, secciones, estados vacíos) y móvil 390 px (sin pin, tira con scroll nativo, sin desbordamiento)
