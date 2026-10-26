# Home, segunda mitad: discografía, doblaje, directo, manifiesto, vídeo y contacto

## Por qué

Completa la home sustituyendo las secciones provisionales por las definitivas, enlazadas desde la navegación (Música, Doblaje, Directo, Bio, Contacto).

## Qué cambia

- **Discografía** (`#musica`): tira de película con las portadas; en escritorio se fija y se desplaza en horizontal con el scroll. Debajo, «Lo más escuchado» con enlace a cada tema en Spotify.
- **Doblaje / Créditos** (`#doblaje`): estética de créditos finales. Los créditos aún no existen: estado vacío diseñado hasta recibirlos.
- **En directo** (`#directo`): fechas como entradas de cine con botón rojo. Sin fechas anunciadas: estado vacío con enlace a contacto.
- **Manifiesto** (`#bio`): frase que se ilumina palabra a palabra con el scroll. Mientras no haya frase de Samuel, se usa la del concepto («La voz en escena»), sin presentarla como cita.
- **Vídeo destacado**: formato 2.39:1. No se muestra hasta tener un vídeo confirmado.
- **Contacto** (`#contacto`): contratación y prensa, redes confirmadas.
- **Datos** en `src/data/`: `dubbing.ts`, `concerts.ts`, `media.ts` y `TOP_TRACKS` en `releases.ts`.

## Fuera de alcance

- Newsletter: requiere elegir proveedor (Mailchimp, Brevo, Buttondown…). Se decidirá aparte.
- Reproducción de audio real: fase 5.

## Impacto

- Modifica la capacidad `home`.
- Se eliminan las secciones provisionales.
