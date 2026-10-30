# Contenido

Datos reales del artista y lo que falta por conseguir. **No inventar datos**: lo que no esté aquí confirmado va como `[Pendiente]`.

## Enlaces

| Plataforma | URL |
|---|---|
| Spotify | https://open.spotify.com/intl-es/artist/6iN98G1hjbVKib9xHNvjCQ |
| Instagram | [Pendiente] |
| YouTube | [Pendiente] |
| TikTok | [Pendiente] |
| Apple Music | [Pendiente] |
| Amazon Music | [Pendiente] |
| Email de contratación | [Pendiente] |

## Discografía (perfil de Spotify, 28/10/2026)

Títulos, tipos, fechas y tracklists completos tal como aparecen en Spotify. Tracklists y enlaces en `src/data/releases.ts`.

### Discos

| Año | Título | Fecha | Temas |
|---|---|---|---|
| 2026 | Manual de amor en modo oscuro | 19/02/2026 | 15 |
| 2022 | Ronda Sud | 16/09/2022 | 13 |
| 2021 | Prohibido hacer fuego | 19/02/2021 | 12 |
| 2019 | Simulacros de naufragio | 21/03/2019 | 11 |
| 2016 | Alarms | 01/02/2016 | 11 |

### Sencillos

| Año | Título | Fecha |
|---|---|---|
| 2026 | Ouigo a La Meca | 28/05/2026 |
| 2026 | Tu nombre en Arial 14 | 06/04/2026 |
| 2025 | Lo que soy, seré | 30/04/2025 |
| 2025 | Pastoral | 12/02/2025 |
| 2023 | Tango Suite Pandiman | 01/09/2023 |
| 2022 | No Te Lo Fumes Todo | 24/06/2022 |
| 2022 | Ronda Sud | 17/06/2022 |
| 2021 | Gloria | 15/01/2021 |
| 2021 | Y Ahí Estás | 08/01/2021 |

### Colaboraciones

| Año | Lanzamiento | Artista | Tipo | Participa en |
|---|---|---|---|---|
| 2025 | Tarongers (deu anys en un dia) | Novembre Elèctric | Álbum | Reina la sed, La Sed (Queda Prohibido) |
| 2024 | Una Vida Es Demasiado Poco... Homenaje a Doctor Divago | Varios artistas | Recopilatorio | Sonaba Julio Galcerá |
| 2024 | Reina la sed | Novembre Elèctric | Sencillo | Reina la sed |
| 2024 | La Sed (Queda Prohibido) | Novembre Elèctric | Sencillo | La Sed (Queda Prohibido) |

## Lo más escuchado en Spotify (28/10/2026)

| # | Tema | Duración |
|---|---|---|
| 1 | Bodypump Cofrade | 2:57 |
| 2 | Simulacros de Naufragio | 4:33 |
| 3 | No Te Lo Fumes Todo | 3:30 |
| 4 | Y Ahí Estás | 3:36 |
| 5 | Reina la Sed (con Novembre Elèctric) | 4:03 |
| 6 | Lay Down | 3:27 |
| 7 | Tango Suite Pandiman | 4:00 |
| 8 | De la Misa la Mitad | 3:44 |
| 9 | What a Night | 4:19 |
| 10 | Autopsia de un like | 2:24 |

## Dónde va cada dato en el código

| Contenido | Archivo |
|---|---|
| Discografía y lo más escuchado | `src/data/releases.ts` |
| Créditos de doblaje | `src/data/dubbing.ts` |
| Conciertos | `src/data/concerts.ts` |
| Vídeo destacado (ID de YouTube) | `src/data/media.ts` |
| Email, redes, navegación | `src/data/site.ts` |
| Fragmentos de temas (`preview`) | `src/data/releases.ts` + archivo en `public/audio/` |
| Fragmentos del demo reel (`clip`) | `src/data/dubbing.ts` + archivo en `public/audio/` |
| Animal Persona (descripción y enlace para escuchar) | `src/data/animalPersona.ts` |
| Biografía (corta y párrafos) | `src/data/bio.ts` |
| Tracklist, enlace y texto de cada disco | `tracklist`, `spotifyUrl`, `description` en `src/data/releases.ts` |
| Datos del titular (textos legales) | `src/data/legal.ts` |
| Frase del manifiesto | `src/sections/Manifesto.tsx` (ahora: frase del concepto, no es cita de Samuel) |

## Pendiente de recibir

- [ ] Fotografías en alta resolución (retrato, directo, estudio) con derechos de uso.
- [ ] Vídeo corto en bucle para el hero: fragmento de 10–20 s del videoclip de *Tango Suite Pandiman* ([YouTube](https://www.youtube.com/watch?v=WP993jKTV9Y)), sin sonido, en MP4 (H.264, ≤ 3 MB) y opcionalmente WebM, en `public/video/`. Se activa en `HERO_VIDEO` de `src/data/media.ts`.
- [ ] Portadas en alta resolución y confirmación de derechos (las de Spotify son de 640 px). Ahora mismo la web usa como provisionales las 14 de Spotify (5 discos y 9 sencillos) en `src/assets/images/covers/`.
- [ ] Foto del hero en alta resolución (ahora: `src/assets/images/hero.jpg`, Samuel de noche en una calle con gente detrás, captura de pantalla de 1232×1135 px; se ve suave en pantallas grandes. Derechos de uso confirmados el 30/10/2026. El encuadre de `Hero.css` está ajustado a esta foto). La foto anterior de Spotify sigue en la página de biografía.
- [ ] Créditos de doblaje: personaje, producción, año.
- [ ] Fragmentos del demo reel autorizados.
- [ ] Fragmentos de 20–30 s de los temas destacados (MP3 128–192 kbps) con permiso de uso.
- [ ] Agenda de conciertos.
- [ ] Animal Persona: descripción del proyecto, enlace para escucharlo y, si se quiere, foto o portada con derechos.
- [ ] Biografía (corta y larga) y la frase para el manifiesto.
- [ ] Logotipo o firma (si no existe, el favicon usa un monograma «SR» tipográfico).
- [ ] Videoclip o actuación destacada.
- [ ] Dominio y hosting.
- [ ] Textos legales: datos del titular (nombre, NIF, domicilio, email) y revisión profesional de `/aviso-legal`, `/privacidad` y `/cookies` (ahora en borrador).
- [x] Tracklists completos y enlaces de Spotify de cada disco (desde Spotify, 28/10/2026).
