# Contexto del proyecto

## Propósito

Web oficial de Samuel Reina, cantante y actor de doblaje. Objetivos:

- Presentar su música (último lanzamiento, discografía, enlaces a plataformas) y su carrera como actor de doblaje (créditos, demo reel).
- Facilitar la contratación (booking y prensa) y la venta de entradas para sus conciertos.
- Transmitir una identidad premium, cinematográfica e irónica: «La voz en escena».

## Stack

- Vite + React + TypeScript
- GSAP + ScrollTrigger (animación) · Lenis (scroll suave)
- CSS con custom properties como tokens de diseño
- Node ≥ 24

## Convenciones

- Contenido y documentación en español; código en inglés.
- Contenido estructurado y tipado en `src/data/`.
- Tokens de diseño en `src/styles/tokens.css`; nada de valores sueltos en componentes.
- Secciones de la home en `src/sections/`, componentes reutilizables en `src/components/ui/`, layout global en `src/components/layout/`.
- Commits en español, en imperativo y descriptivos.

## Restricciones

- Accesibilidad AA: contraste, foco visible, HTML semántico, `prefers-reduced-motion`.
- Sonido siempre desactivado por defecto.
- No publicar datos, imágenes ni audio sin confirmar derechos y veracidad (ver `docs/contenido.md`).
- Rendimiento: LCP < 2,5 s en móvil; vídeo e imágenes optimizados y con carga diferida.

## Documentación relacionada

- `docs/direccion-artistica.md` — paleta, tipografía, movimiento, secciones.
- `docs/contenido.md` — datos reales y pendientes.
- `docs/roadmap.md` — fases.

## Formato de las propuestas

```
openspec/changes/<id>/
├── proposal.md      # Por qué, qué cambia, impacto
├── tasks.md         # Lista de tareas con casillas
└── specs/<capacidad>/spec.md   # Delta: ## ADDED | MODIFIED | REMOVED Requirements
```

Cada requisito se escribe como `### Requirement: <nombre>` con al menos un `#### Scenario:` (CUANDO… ENTONCES…).
