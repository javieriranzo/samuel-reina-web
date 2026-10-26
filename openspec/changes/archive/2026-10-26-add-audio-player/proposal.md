# Audio: reproductor global, fragmentos de canciones, demo reel y saludo

## Por qué

La voz es el centro del concepto, pero hasta ahora la web es muda: las ondas son decorativas y el botón de sonido solo guarda una preferencia. Esta fase monta la infraestructura de audio para que, en cuanto lleguen los archivos, baste con añadirlos a `public/audio/` y referenciarlos en los datos.

## Qué cambia

- **Reproductor global único** (`PlayerProvider` + `usePlayer`): un solo `<audio>` para toda la web; empezar un fragmento detiene el anterior.
- **Relación con el botón de sonido**: pulsar «play» activa el sonido; desactivar el sonido pausa lo que suene.
- **Saludo**: al activar el sonido por primera vez en la sesión suena un saludo de Samuel, si existe `GREETING_AUDIO`.
- **Onda real**: si el navegador puede decodificar el archivo, la onda se dibuja con los picos reales del audio; si no, se usa la onda determinista actual.
- **Último lanzamiento**: botón de reproducción por tema con fragmento (`preview`), progreso sobre la onda y tiempo transcurrido.
- **Créditos de doblaje**: botón REC/play por crédito con fragmento (`clip`) y timecode en marcha.
- **Barra «Sonando ahora»**: aviso fijo y discreto con título y botón de pausa, anunciado a lectores de pantalla.
- **Media Session**: título y artista en los controles del sistema (pantalla de bloqueo, teclas multimedia).

## Fuera de alcance

- Los archivos de audio reales (pendientes de Samuel). Sin archivos, la web se ve igual que ahora: los botones solo aparecen cuando hay fragmento.

## Impacto

- Capacidad nueva: `audio`.
- Modifica `layout` (el botón de sonido controla el reproductor) y `home` (reproducción en lanzamiento y créditos).
