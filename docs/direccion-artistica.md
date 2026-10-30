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

Líneas y divisores: `#2A2A30`.

Cada sección de la home tiene su propio fondo, siempre dentro de los negros: Música en negro sala, Doblaje en negro puro (`#000`, como una sala a oscuras), Animal Persona en grafito, Directo con una luz roja de escenario desde arriba, Bio (manifiesto) con un foco de tungsteno tenue y Contacto en negro sepia (`#14110E`). Fotografía en B/N o etalonaje cálido desaturado: el ámbar es la única «luz» (cabezal, audio sonando, foco, enlaces); no colorea palabras de los titulares.

## Tipografía

| Rol | Familia | Uso |
|---|---|---|
| Display | **Anton** (400, sin cursiva) | Titulares enormes en mayúsculas, como un cartel de cine o unos títulos de crédito. Los textos largos en display (manifiesto, entradilla) en mayúsculas y minúsculas. El énfasis (el nombre del artista) va en ámbar, nunca en cursiva sintética |
| Texto | **Inter Tight** (300–600) | Cuerpo, navegación, botones |
| Técnica | **JetBrains Mono** (400–500) | Timecodes, duraciones, fechas, etiquetas en mayúsculas con tracking amplio |

Antes se usaba Instrument Serif; se cambió a Anton tras comparar combinaciones (`openspec/changes/switch-display-font-anton/`).

## Movimiento

- Scroll suave con Lenis; animaciones con GSAP ScrollTrigger.
- Titulares que aparecen línea a línea desde una máscara (como tarjetas de título); el resto del contenido solo en opacidad. Manifiesto que se ilumina palabra a palabra.
- **Línea de montaje** (elemento propio de la home): línea fija en el borde inferior con una marca por escena, cabezal ámbar y timecode ligados al scroll (1 px = 1 fotograma) y nombre de la escena actual. Desaparece en la portada y al llegar al pie.
- Grano de película sutil permanente; destellos ámbar entre secciones.
- Cursor: puntero del sistema; sobre música aparece junto a él una etiqueta «▶ PLAY» y sobre doblaje «● REC».
- Sin sonido automático: solo suena lo que el usuario reproduce.
- `prefers-reduced-motion`: sin scroll suave ni animaciones de entrada.

## Home: secciones

1. **Intro** — timecode corriendo, línea de audio que respira y se convierte en el nombre.
2. **Hero** — foto/vídeo B/N con luz ámbar, «Samuel Reina» en serif gigante, «Cantante · Actor de doblaje».
3. **Último lanzamiento** — portada con inclinación 3D, reproductor con onda, enlaces a plataformas.
4. **Discografía** — índice de discos en serif con portada fija que cambia al señalar cada uno + lo más escuchado.
5. **Doblaje / Créditos** — estética de créditos finales, fragmentos del demo reel con timecode.
6. **En directo** — fechas como entradas de cine, botón rojo.
7. **Manifiesto** — frase que se ilumina al hacer scroll.
8. **Vídeo destacado** — 2.39:1.
9. **Contacto y cierre** — booking, newsletter, redes como créditos (Spotify con su logo completo).
