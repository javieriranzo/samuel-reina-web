## ADDED Requirements

### Requirement: Volver arriba

El sistema SHALL mostrar un botón «Volver arriba» fijo en la esquina inferior derecha cuando el usuario ha bajado más de una pantalla.

#### Scenario: Arriba del todo
- **CUANDO** la página está en la primera pantalla
- **ENTONCES** el botón no se ve ni se puede enfocar

#### Scenario: Pulsar el botón
- **CUANDO** el usuario pulsa «Volver arriba»
- **ENTONCES** la página vuelve al principio y el foco pasa al contenido principal

#### Scenario: Movimiento reducido
- **CUANDO** se prefiere movimiento reducido
- **ENTONCES** la página salta al principio sin animación
