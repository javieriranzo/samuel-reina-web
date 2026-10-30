# Rediseño de la página de discografía

## Por qué

`/discografia` era una rejilla uniforme de portadas: discos y sencillos pesaban igual, quedaban filas cojas, el último lanzamiento no destacaba y al pasar el ratón apenas pasaba nada. Tras comparar tres variantes en una página de prueba (`disco-preview.html`), se elige la «C»: último lanzamiento destacado + mosaico.

## Qué cambia

- **Cabecera con el último lanzamiento:** portada grande, rótulo con la fecha, título, tipo y botones para escucharlo en Spotify y ver su ficha. El `h1` «La música» se mantiene solo para lectores de pantalla (la convención de `PageHeader` como único `h1` no aplica a esta página: su cabecera es el lanzamiento).
- **Mosaico:** el resto de discos (2×2) y sencillos (1×1) en una rejilla de 6 columnas (2 en móvil), del más reciente al más antiguo.
- **Vinilo al pasar el ratón** (o al enfocar con teclado): la portada se aparta, asoma un vinilo con la portada como etiqueta que gira despacio, y aparece «▶ Escuchar» con el tipo de lanzamiento (y el número de temas si hay listado completo; no se inventa). Sin giro ni desplazamientos con movimiento reducido.
- **«Lo más escuchado» como ranking:** números grandes en Anton, miniatura de la portada cuando el tema pertenece a un lanzamiento conocido, «Spotify ↗» y duración (sin onda: ver `hide-waveform-without-audio`). Se ilumina en ámbar al pasar el ratón.
- Las colaboraciones se mantienen como lista.

## Impacto

- Añade el requisito «Página de discografía» a `pages`.
- Código: nuevo `src/components/ui/ReleaseCard.tsx` + CSS; `src/pages/DiscographyPage.tsx` + CSS; `src/sections/TopTracks.tsx` + CSS.
- Se borra la página temporal `disco-preview.html`.
