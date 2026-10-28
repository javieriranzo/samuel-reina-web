## ADDED Requirements

### Requirement: Línea de montaje

El sistema SHALL mostrar en la home, fuera de la portada, una línea fija en el borde inferior con una marca al inicio de cada sección, un cabezal que avanza con el scroll y, en pantallas medianas y grandes, el timecode (1 px = 1 fotograma a 25 fps) y el nombre de la sección actual. Es decorativa: no recibe foco ni se anuncia a lectores de pantalla.

#### Scenario: En la portada
- **CUANDO** la página está en la portada o se reproduce la intro
- **ENTONCES** la línea de montaje no se muestra

#### Scenario: Cambio de sección
- **CUANDO** el usuario se desplaza de la discografía a los créditos de doblaje
- **ENTONCES** el cabezal pasa la marca de Doblaje y el nombre de escena cambia a «Doblaje»

#### Scenario: Pantalla estrecha
- **CUANDO** el ancho es de móvil
- **ENTONCES** solo se muestra la línea con el cabezal
