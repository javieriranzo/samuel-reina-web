## MODIFIED Requirements

### Requirement: Navegación por anclas con scroll suave

El sistema SHALL desplazar suavemente a la sección de destino cuando la URL cambia a `/#id` (desde la misma página o desde otra), compensando la altura de la cabecera, y SHALL exponer la instancia de Lenis a los componentes mediante `useLenis`.

#### Scenario: Enlace a una sección
- **CUANDO** el usuario pulsa un enlace a `/#musica`
- **ENTONCES** la página se desplaza suavemente hasta la sección Música y su título no queda tapado por la cabecera

#### Scenario: Movimiento reducido
- **CUANDO** el usuario prefiere movimiento reducido
- **ENTONCES** el salto a la sección es inmediato y `useLenis` devuelve `null`
