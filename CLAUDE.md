# CLAUDE.md

Contexto e instrucciones para Claude Code en este repositorio.

## Proyecto

Web oficial de **Samuel Reina**, cantante y actor de doblaje. Web de una sola página principal (home) con secciones, más páginas secundarias (biografía, discografía, doblaje, contacto) a futuro.

- Idioma de la web, la documentación y los commits: **español**.
- Código (nombres de variables, componentes, archivos): **inglés**.
- Dirección artística completa: `docs/direccion-artistica.md`. Datos reales del artista: `docs/contenido.md`.

## Stack

Vite + React + TypeScript · React Router · GSAP (ScrollTrigger) · Lenis · CSS con custom properties · Fontsource · oxlint + Prettier. Node ≥ 24.

## Comandos

- `npm run dev` — desarrollo
- `npm run build` — tipos + build de producción (debe pasar antes de dar una tarea por terminada)
- `npm run lint` — oxlint
- `npm run format` — Prettier

## Flujo de trabajo: OpenSpec

- Antes de implementar una funcionalidad nueva o un cambio de comportamiento, crea una propuesta en `openspec/changes/<id-en-kebab-case>/` con `proposal.md`, `tasks.md` y, si aplica, `specs/<capacidad>/spec.md` con el delta (`## ADDED|MODIFIED|REMOVED Requirements`).
- Lee `openspec/project.md` y las specs relacionadas en `openspec/specs/` antes de proponer.
- Implementa siguiendo `tasks.md` y marca `- [x]` al completar cada tarea.
- Correcciones pequeñas (typos, estilos puntuales, bugs evidentes) no necesitan propuesta.
- No archives un cambio sin que el usuario lo confirme.

## Convenciones de código

- Componentes React en `PascalCase.tsx`, uno por archivo, con su CSS al lado (`Hero.tsx` + `Hero.css`) y clases BEM con el nombre del componente (`.hero__title`).
- Secciones de la home en `src/sections/`, piezas reutilizables en `src/components/ui/`, estructura global en `src/components/layout/`.
- El contenido (discografía, créditos, agenda) vive en `src/data/` como datos tipados, nunca escrito a mano dentro de los componentes.
- Colores, tipografías, espaciados y duraciones de animación solo mediante tokens de `src/styles/tokens.css`. Nada de hex sueltos en componentes.
- GSAP se importa siempre desde `@/animations/gsap` (ahí se registran los plugins).
- Imports internos con el alias `@/` (→ `src/`).
- El cursor cambia a PLAY/REC con `data-cursor="play" | "rec"` en el elemento.
- Enlaces internos siempre con `Link` de `react-router`, también las anclas de la home (`to="/#musica"`); el scroll lo gestiona `ScrollManager`. Nunca `<a href="#...">`.
- Páginas en `src/pages/` (una por ruta, registradas en `src/App.tsx` con `lazy` salvo la home), con `usePageMeta` y `PageHeader` como único `h1`.
- Si se añade una clave nueva de `localStorage`/`sessionStorage`, añadirla a `BROWSER_STORAGE` en `src/data/legal.ts` (se lista en `/cookies`).
- Animaciones GSAP: siempre con `gsap.context()` / `useGSAP` y limpieza al desmontar. Respetar `prefers-reduced-motion` (sin scroll suave ni animaciones de entrada si está activo).
- Accesibilidad: HTML semántico, botones reales, `alt` en imágenes, contraste AA, foco visible, sonido desactivado por defecto.

## Identidad visual (resumen)

| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `#0A0A0C` | Negro sala, fondo |
| `--color-surface` | `#16161A` | Grafito, tarjetas |
| `--color-text` | `#EDE6DA` | Marfil, texto |
| `--color-muted` | `#8C877F` | Humo, metadatos |
| `--color-accent` | `#D19A4E` | Ámbar tungsteno, acento |
| `--color-live` | `#E0352B` | Rojo ON AIR — solo directo, REC y entradas |

Tipografías: Instrument Serif (display), Inter Tight (texto), JetBrains Mono (timecodes, datos).

## Qué no hacer

- No inventar datos del artista (fechas, créditos, conciertos). Si falta, usar marcadores `[Pendiente]` y anotarlo en `docs/contenido.md`.
- No subir audio, vídeo ni imágenes sin confirmar que hay derechos.
- No hacer commit ni push sin que el usuario lo pida.
