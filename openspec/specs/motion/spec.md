# Movimiento

## Purpose

Scroll suave, animaciones, grano de película y cursor personalizado.

## Requirements

### Requirement: Scroll suave

El sistema SHALL aplicar scroll suave con Lenis sincronizado con GSAP ScrollTrigger.

#### Scenario: Animación ligada al scroll
- **CUANDO** el usuario se desplaza por la página
- **ENTONCES** las animaciones de ScrollTrigger avanzan sincronizadas con la posición de Lenis

### Requirement: Movimiento reducido

El sistema SHALL respetar `prefers-reduced-motion: reduce` desactivando el scroll suave, las animaciones de entrada y el cursor animado.

#### Scenario: Usuario con movimiento reducido
- **CUANDO** el sistema operativo indica `prefers-reduced-motion: reduce`
- **ENTONCES** el scroll es nativo y el contenido aparece sin animaciones de entrada

### Requirement: Grano de película

El sistema SHALL mostrar una capa de grano sutil sobre toda la página que no intercepte eventos ni sea leída por lectores de pantalla.

#### Scenario: Interacción bajo el grano
- **CUANDO** el usuario hace clic en un enlace
- **ENTONCES** el clic llega al enlace aunque el grano esté encima

### Requirement: Cursor personalizado

El sistema SHALL mostrar en dispositivos con puntero fino un cursor de punto ámbar que cambia a «PLAY» sobre elementos de música y a «REC» sobre elementos de doblaje.

#### Scenario: Dispositivo táctil
- **CUANDO** el dispositivo no tiene puntero fino
- **ENTONCES** no se muestra el cursor personalizado

### Requirement: Navegación por anclas con scroll suave

El sistema SHALL desplazar suavemente a la sección de destino cuando la URL cambia a `/#id` (desde la misma página o desde otra), compensando la altura de la cabecera, y SHALL exponer la instancia de Lenis a los componentes mediante `useLenis`.

#### Scenario: Enlace a una sección
- **CUANDO** el usuario pulsa un enlace a `/#musica`
- **ENTONCES** la página se desplaza suavemente hasta la sección Música y su título no queda tapado por la cabecera

#### Scenario: Movimiento reducido
- **CUANDO** el usuario prefiere movimiento reducido
- **ENTONCES** el salto a la sección es inmediato y `useLenis` devuelve `null`
