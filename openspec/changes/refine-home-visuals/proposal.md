# Pulido visual: línea de montaje, titulares de cine y cursiva con sentido

## Por qué

La home cumple la dirección artística, pero repite la misma plantilla en cada sección (rótulo en mono + titular con una palabra en cursiva ámbar + bloque que sube y aparece) y no tiene un elemento propio que se recuerde. El pie, además, repite el «Próximamente» del contacto justo encima.

## Plan de diseño

Se mantienen paleta, familias tipográficas y estructura de secciones (`docs/direccion-artistica.md`). Lo que cambia es **cómo se usan**.

- **Color.** El ámbar es la única luz: solo cabezal de reproducción, audio sonando, foco, enlaces y hover. Deja de colorear palabras sueltas de los titulares.
- **Tipografía.** La cursiva significa algo: es la **voz en off** (lo que no se ve: el doblaje, el personaje). La música y el escenario van en redonda. Excepción: el nombre en la portada y el logotipo, que son identidad.
- **Movimiento.** Un solo lenguaje para los titulares: suben línea a línea desde una máscara, como la portada (tarjetas de título). El resto del contenido solo aparece en opacidad, sin desplazamiento, para no competir.
- **Elemento memorable: la línea de montaje.** La home se recorre como una película en la mesa de edición. Una línea fija en el borde inferior marca el inicio de cada escena (sección) y un cabezal ámbar avanza con el scroll. A la derecha, el timecode (1 px de scroll = 1 fotograma a 25 fps) y el nombre de la escena actual, que cambia con un barrido corto. Aparece al salir de la portada.

```
                                                         ┌────────────────────────┐
                                                         │ 00:02:14:08   Doblaje  │
 ──┃────────┃━━━━━━━━━━━━━━━━━━━━━━━━━━┃──────────┃──────┃──────────┃────────────
   Lanzam.   Música (cabezal)            Doblaje    Directo  Manifiesto  Contacto
```

## Qué cambia

- **Línea de montaje** (`ReelTimeline`) en la home: marcas por escena, cabezal y timecode ligados al scroll. Decorativa para lectores de pantalla (la navegación real está en la cabecera). En móvil solo la línea.
- **Titulares** de sección (`SectionHeading`), del último lanzamiento y de «Dos voces»: entrada línea a línea con máscara (GSAP SplitText).
- **Resto de entradas** (`useReveal`): solo opacidad.
- **Cursiva**: sin cursiva ámbar en «La música», «En directo», «¿Hablamos?», «Fin de la cinta»; se mantiene, en marfil, en lo que es voz en off («El doblaje», «Con la voz de *Samuel Reina*»).
- **Pie**: no muestra el bloque de contratación mientras el email esté pendiente (ya lo dice la sección de contacto).

## Impacto

- Modifica `home` (nueva línea de montaje), `motion` (entradas) y `layout` (pie).
- Código: `src/sections/ReelTimeline.*`, `src/animations/useReveal.ts`, `src/animations/gsap.ts` (registro de SplitText), `SectionHeading`, `PageHeader.css`, secciones de la home, `Footer`, `src/data/site.ts` (escenas).
- Documentación: `docs/direccion-artistica.md`.
