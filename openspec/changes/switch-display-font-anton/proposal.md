# Cambiar la fuente de titulares a Anton

## Por qué

Tras comparar nueve combinaciones de fuentes (página de prueba `font-preview.html`), se elige la «Cartel de película»: una sans condensada en mayúsculas, como un póster o unos títulos de crédito, que da más presencia al nombre y a los titulares. El texto (Inter Tight) y la mono (JetBrains Mono) no cambian.

## Qué cambia

- `--font-display` pasa de Instrument Serif a **Anton** (400, sin cursiva).
- Los titulares grandes (portada, encabezados de sección y de página, 404, títulos de discos, intro y «Fin») van en mayúsculas. Los textos largos en display (manifiesto, entradilla de la bio, email, ciudades, producciones) mantienen mayúsculas y minúsculas.
- Como Anton no tiene cursiva, el énfasis (`em`) en los titulares —que siempre es el nombre del artista— pasa de cursiva a ámbar en redonda, como «Reina» en la portada. Los textos «pendientes» en display pierden la cursiva y quedan solo en gris humo.
- Se reajustan los tamaños de display (`--text-hero`, `--text-2xl`, `--text-xl`, `--leading-tight`), porque Anton es mucho más alta y pesada a igual cuerpo.
- El favicon «SR» no cambia.

## Impacto

- Modifica el requisito «Tipografías del proyecto» de `design-system`.
- Dependencias: se añade `@fontsource/anton` y se quita `@fontsource/instrument-serif`.
- Código: `src/main.tsx`, `src/styles/tokens.css` y los CSS con `--font-display` o `em` en titulares.
- Documentación: `CLAUDE.md`, `docs/direccion-artistica.md`, `docs/contenido.md`.
- Se borra la página temporal `font-preview.html`.
