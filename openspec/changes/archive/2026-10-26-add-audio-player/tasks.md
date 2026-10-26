# Tareas

## 1. Núcleo

- [x] 1.1 `PlayerProvider` y `usePlayer`: un `<audio>` global, `toggle`, `pause`, `seek`, estado de progreso
- [x] 1.2 `useSound` expone `enable()`; play activa el sonido y desactivar el sonido pausa
- [x] 1.3 Media Session (metadatos y acciones play/pause)
- [x] 1.4 `useWaveformPeaks`: picos reales con Web Audio y caché; `Waveform` acepta `peaks`

## 2. Datos

- [x] 2.1 `Track.preview` y `DubbingCredit.clip` como rutas en `public/audio/`
- [x] 2.2 `GREETING_AUDIO` en `src/data/media.ts`

## 3. Interfaz

- [x] 3.1 `AudioButton` (play/pausa accesible, variantes música y REC)
- [x] 3.2 Último lanzamiento: botón por tema, progreso en la onda, tiempo y búsqueda al pulsar la onda
- [x] 3.3 Créditos de doblaje: botón por crédito y timecode en marcha
- [x] 3.4 Barra «Sonando ahora» con `aria-live`
- [x] 3.5 Saludo al activar el sonido por primera vez en la sesión

## 4. Verificación

- [x] 4.1 `npm run build` y `npm run lint` sin errores
- [x] 4.2 Prueba en navegador con un tono WAV temporal (eliminado): reproducción, onda real, progreso, pausa al desactivar sonido, saludo una vez por sesión, cambio entre fragmentos, timecode de créditos, barra «Sonando» y Media Session
