## ADDED Requirements

### Requirement: Tokens de diseño centralizados

El sistema SHALL definir todos los colores, familias tipográficas, espaciados y duraciones de animación como custom properties en `src/styles/tokens.css`, y los componentes SHALL usar únicamente esos tokens.

#### Scenario: Color aplicado mediante token
- **CUANDO** un componente necesita el color de acento
- **ENTONCES** usa `var(--color-accent)` y no el valor hexadecimal `#D19A4E`

### Requirement: Paleta «sala oscura»

El sistema SHALL ofrecer los tokens `--color-bg` (#0A0A0C), `--color-surface` (#16161A), `--color-text` (#EDE6DA), `--color-muted` (#8C877F), `--color-accent` (#D19A4E), `--color-live` (#E0352B) y `--color-line` (#2A2A30).

#### Scenario: Contraste del texto secundario
- **CUANDO** se muestra texto con `--color-muted` sobre `--color-bg`
- **ENTONCES** la relación de contraste es al menos 4,5:1

### Requirement: Tipografías del proyecto

El sistema SHALL cargar Instrument Serif (display), Inter Tight (texto) y JetBrains Mono (datos técnicos) con `font-display: swap`, expuestas como `--font-display`, `--font-body` y `--font-mono`.

#### Scenario: Fuente aún no cargada
- **CUANDO** la fuente web todavía no se ha descargado
- **ENTONCES** el texto se muestra con la fuente de respaldo y no queda invisible

### Requirement: Foco visible

El sistema SHALL mostrar un indicador de foco visible en todos los elementos interactivos al navegar con teclado.

#### Scenario: Navegación con teclado
- **CUANDO** el usuario pulsa Tab sobre un enlace o botón
- **ENTONCES** aparece un contorno visible en `--color-accent`
