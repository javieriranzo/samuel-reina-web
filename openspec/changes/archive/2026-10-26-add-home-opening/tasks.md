# Tareas

## 1. Datos y recursos

- [x] 1.1 Tipos `Release` y `Track` en `src/types/music.ts`
- [x] 1.2 `src/data/releases.ts` con la discografía conocida (ver `docs/contenido.md`)
- [x] 1.3 Foto de artista y portadas provisionales en `src/assets/images/`

## 2. Componentes UI

- [x] 2.1 `Waveform`: barras deterministas a partir de una semilla, decorativa (`aria-hidden`), con estado de progreso
- [x] 2.2 `Timecode`: formato `HH:MM:SS:FF` en mono

## 3. Secciones

- [x] 3.1 `Intro` con timecode, onda y telón; una vez por sesión; saltable; omitida con movimiento reducido
- [x] 3.2 `Hero` con foto, nombre, rótulos, indicación de scroll, entrada línea a línea y parallax
- [x] 3.3 `LatestRelease` con portada inclinable, datos, temas, onda y plataformas
- [x] 3.4 `TwoVoices` con pantalla dividida, foco en el lado activo y cursor PLAY/REC

## 4. Montaje

- [x] 4.1 Componer la home: Intro → Hero → LatestRelease → TwoVoices → secciones provisionales
- [x] 4.2 Coordinar la entrada del hero con el final de la intro

## 5. Verificación

- [x] 5.1 `npm run build` y `npm run lint` sin errores
- [x] 5.2 Revisión en navegador (escritorio y móvil a 390 px): intro, saltar intro, portada, último lanzamiento, Dos voces, sin desbordamiento horizontal. Movimiento reducido: revisado en código (sin emulación en el navegador)
