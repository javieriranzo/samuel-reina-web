# Dirección artística

Moodboard y maqueta de la home: https://claude.ai/artifact/WFSEHqryCbNpLVw4q4pgpD

## Concepto: «La voz en escena»

Samuel es **una voz que se ve** (cantante, sobre el escenario) y **una voz que no se ve** (actor de doblaje, detrás del personaje). La web cuenta esa dualidad con lenguaje de cine: la sala oscura y el foco, el estudio y el directo.

Su propio universo visual (la bolsa negra que le tapa la cara en su foto de artista y en *Prohibido hacer fuego*, títulos como *Bodypump Cofrade* o *Autopsia de un like*) añade **ironía**: base cinematográfica y premium, pero con guiños de humor en textos y transiciones. Idea a explorar: la intro «quita la bolsa».

### Principios

1. **La voz como imagen** — ondas de audio, timecodes y subtítulos como elementos gráficos.
2. **Lenguaje de cine** — formato 2.39:1, grano de película, luz de tungsteno, títulos de crédito.
3. **Contención premium** — mucho negro, poca decoración, tipografía enorme. El lujo es el espacio y el movimiento.

## Paleta

| Nombre | HEX | Uso | Proporción |
|---|---|---|---|
| Negro sala | `#0A0A0C` | Fondo principal | ~60 % |
| Grafito | `#16161A` | Tarjetas, reproductor, secciones alternas | ~18 % |
| Marfil | `#EDE6DA` | Titulares y texto | ~12 % |
| Humo | `#8C877F` | Metadatos, fechas, créditos (contraste 5,5:1 sobre negro sala) | ~4 % |
| Ámbar tungsteno | `#D19A4E` | Enlaces, hovers, ondas, énfasis | ~3 % |
| Rojo ON AIR | `#E0352B` | Solo directo, REC y venta de entradas | ~1 % |

Líneas y divisores: `#2A2A30`. Fotografía en B/N o etalonaje cálido desaturado: el ámbar es la única «luz».

## Tipografía

| Rol | Familia | Uso |
|---|---|---|
| Display | **Instrument Serif** (400, regular e itálica) | Titulares enormes; la itálica en ámbar para el énfasis |
| Texto | **Inter Tight** (300–600) | Cuerpo, navegación, botones |
| Técnica | **JetBrains Mono** (400–500) | Timecodes, duraciones, fechas, etiquetas en mayúsculas con tracking amplio |

Alternativa de pago para display: PP Editorial New.

## Movimiento

- Scroll suave con Lenis; animaciones con GSAP ScrollTrigger.
- Titulares que aparecen línea a línea; manifiesto que se ilumina palabra a palabra.
- Secciones fijadas con desplazamiento horizontal (discografía).
- Grano de película sutil permanente; destellos ámbar entre secciones.
- Cursor: punto ámbar → «▶ PLAY» sobre música → «● REC» sobre doblaje.
- Sonido opcional (saludo con su voz), desactivado por defecto.
- `prefers-reduced-motion`: sin scroll suave ni animaciones de entrada.

## Home: secciones

1. **Intro** — timecode corriendo, línea de audio que respira y se convierte en el nombre.
2. **Hero** — foto/vídeo B/N con luz ámbar, «Samuel Reina» en serif gigante, «Cantante · Actor de doblaje».
3. **Último lanzamiento** — portada con inclinación 3D, reproductor con onda, enlaces a plataformas.
4. **Dos voces** — pantalla dividida: *La música* / *El doblaje*.
5. **Discografía** — tira de película horizontal + lo más escuchado.
6. **Doblaje / Créditos** — estética de créditos finales, fragmentos del demo reel con timecode.
7. **En directo** — fechas como entradas de cine, botón rojo.
8. **Manifiesto** — frase que se ilumina al hacer scroll.
9. **Vídeo destacado** — 2.39:1.
10. **Contacto y cierre** — booking, newsletter, redes como créditos, «Fin».
