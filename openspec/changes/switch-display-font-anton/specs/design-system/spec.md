## MODIFIED Requirements

### Requirement: Tipografías del proyecto

El sistema SHALL cargar Anton (display), Inter Tight (texto) y JetBrains Mono (datos técnicos) con `font-display: swap`, expuestas como `--font-display`, `--font-body` y `--font-mono`. Los titulares grandes en display SHALL ir en mayúsculas, y su énfasis SHALL marcarse en ámbar en lugar de en cursiva.

#### Scenario: Fuente aún no cargada
- **CUANDO** la fuente web todavía no se ha descargado
- **ENTONCES** el texto se muestra con la fuente de respaldo y no queda invisible

#### Scenario: Énfasis en un titular
- **CUANDO** un titular en display contiene un `em` (el nombre del artista)
- **ENTONCES** se muestra en ámbar, en redonda, sin cursiva sintética
