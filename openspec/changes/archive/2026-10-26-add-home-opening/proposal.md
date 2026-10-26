# Home, primera mitad: intro, portada, último lanzamiento y «Dos voces»

## Por qué

Es lo primero que ve cualquier visitante y lo que fija el tono de la web: cinematográfico, premium y con un punto de ironía.

## Qué cambia

- **Intro** (≈2,5 s): pantalla negra con un timecode que corre, una línea de audio que respira y se convierte en onda, y un telón que sube. Solo en la primera visita de la sesión, se puede saltar (clic, tecla o botón) y no aparece con movimiento reducido.
- **Portada (hero)**: foto del artista en B/N con luz ámbar, «Samuel Reina» en serif gigante con entrada línea a línea, rótulos en mono, indicación de scroll y parallax suave de la foto.
- **Último lanzamiento**: portada con inclinación 3D al mover el ratón, título, fecha, temas con duración, onda decorativa y enlaces a plataformas confirmadas.
- **Dos voces**: pantalla dividida *La música* / *El doblaje*; al pasar por un lado, el otro se apaga. Cursor PLAY/REC.
- **Datos**: discografía tipada en `src/data/releases.ts` (la usará también la fase 4).
- **Componentes UI reutilizables**: `Waveform` (onda de barras determinista) y `Timecode`.
- **Imágenes provisionales**: foto de artista y portada de Spotify (640 px) hasta recibir las versiones en alta resolución.

## Impacto

- Capacidad nueva: `home`.
- La home provisional pierde su hero de prueba; se mantienen las secciones vacías de las fases siguientes.
