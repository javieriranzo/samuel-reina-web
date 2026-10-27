# Samuel Reina — Web oficial

Web oficial de **Samuel Reina**, cantante y actor de doblaje.

> **Concepto: «La voz en escena».** Una voz que se ve (sobre el escenario) y una voz que no se ve (detrás del personaje). La web cuenta esa dualidad con lenguaje de cine: sala oscura, foco cálido, grano de película, *timecodes* y títulos de crédito, con un punto de ironía propio del artista.

- Moodboard y maqueta de la home: https://claude.ai/artifact/WFSEHqryCbNpLVw4q4pgpD
- Spotify: https://open.spotify.com/intl-es/artist/6iN98G1hjbVKib9xHNvjCQ

---

## Estado

🟡 **Fase 6 — Páginas secundarias.** Home completa, reproductor de audio y páginas secundarias con su estructura; falta el contenido de Samuel (ver `docs/contenido.md`).

### Rutas

| Ruta | Página |
|---|---|
| `/` | Home |
| `/biografia` | Biografía |
| `/discografia` | Discografía completa |
| `/discografia/:id` | Ficha de un lanzamiento |
| `/doblaje` | Créditos de doblaje |
| `/aviso-legal`, `/privacidad`, `/cookies` | Textos legales (borrador) |
| cualquier otra | 404 «Fin de la cinta» |

Hoja de ruta en [`docs/roadmap.md`](docs/roadmap.md).

## Stack previsto

| Capa | Tecnología |
|---|---|
| Base | [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript |
| Animación | [GSAP](https://gsap.com) + ScrollTrigger |
| Rutas | [React Router](https://reactrouter.com) (modo declarativo) |
| Scroll suave | [Lenis](https://lenis.darkroom.engineering) |
| Estilos | CSS moderno con *custom properties* (tokens de diseño) |
| Tipografías | Instrument Serif · Inter Tight · JetBrains Mono |
| Tipografías (paquetes) | Fontsource, autoalojadas |
| Calidad | oxlint + Prettier |
| Especificaciones | [OpenSpec](https://github.com/Fission-AI/OpenSpec) |

Requisitos: **Node.js ≥ 24** y npm ≥ 11.

## Estructura

```
samuel-reina-web/
├── .claude/                 # Configuración de Claude Code para el proyecto
│   ├── settings.json        # Permisos y ajustes compartidos (versionado)
│   ├── skills/              # Skills del proyecto (una carpeta por skill con SKILL.md)
│   ├── agents/              # Subagentes del proyecto (*.md)
│   └── commands/            # Comandos slash del proyecto (*.md)
├── CLAUDE.md                # Instrucciones y contexto para Claude
├── docs/                    # Documentación del proyecto
│   ├── direccion-artistica.md
│   ├── contenido.md         # Datos reales del artista y contenido pendiente
│   ├── roadmap.md
│   └── referencias/         # Capturas, moodboards, material de inspiración
├── openspec/                # Especificaciones (OpenSpec)
│   ├── project.md           # Contexto y convenciones del proyecto
│   ├── specs/               # Especificaciones vigentes (lo que ES la web)
│   └── changes/             # Propuestas de cambio (lo que VA a cambiar)
│       └── archive/         # Cambios ya implementados
├── public/                  # Archivos servidos tal cual
│   ├── audio/               # Fragmentos de canciones y demo reel
│   ├── video/               # Vídeo del hero, clips
│   └── images/              # Imágenes que no pasan por el bundler (OG, favicon…)
└── src/
    ├── animations/          # Timelines y utilidades de GSAP
    ├── assets/              # Imágenes y fuentes importadas desde el código
    ├── components/
    │   ├── layout/          # Header, footer, cursor, grano, letterbox…
    │   └── ui/              # Piezas reutilizables: botón, onda de audio, timecode…
    ├── data/                # Contenido estructurado (discografía, créditos, agenda)
    ├── hooks/               # Hooks de React (useLenis, useReducedMotion…)
    ├── lib/                 # Utilidades sin React
    ├── pages/               # Páginas
    ├── sections/            # Secciones de la home (Hero, LastRelease, TwoVoices…)
    ├── styles/              # Tokens, reset, tipografía, estilos globales
    └── types/               # Tipos de TypeScript compartidos
```

## Scripts

```bash
npm install           # instalar dependencias
npm run dev           # servidor de desarrollo
npm run build         # comprobación de tipos + build de producción
npm run preview       # previsualizar la build
npm run lint          # oxlint
npm run format        # Prettier (escribe)
npm run format:check  # Prettier (solo comprueba)
```

## Cómo trabajamos (con Claude Code)

1. **Proponer** — cada funcionalidad nueva empieza como un cambio en `openspec/changes/<id>/` (`proposal.md`, `tasks.md` y delta de especificaciones).
2. **Implementar** — Claude implementa siguiendo `tasks.md` y marca las tareas completadas.
3. **Archivar** — al terminar, el cambio se mueve a `openspec/changes/archive/` y sus especificaciones se integran en `openspec/specs/`.

El contexto para Claude vive en [`CLAUDE.md`](CLAUDE.md). Skills, subagentes, comandos y plugins del proyecto se configuran en [`.claude/`](.claude/README.md).

## Licencia y derechos

Código: © Javier Iranzo. Música, imágenes, voz y marca: © Samuel Reina. Todos los derechos reservados.
