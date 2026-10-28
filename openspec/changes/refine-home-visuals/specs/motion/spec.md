## ADDED Requirements

### Requirement: Entradas al hacer scroll

El sistema SHALL animar la entrada de los titulares de sección línea a línea desde una máscara, y la del resto del contenido marcado solo con opacidad, una única vez por elemento.

#### Scenario: Titular de sección
- **CUANDO** un titular de sección entra en pantalla sin movimiento reducido
- **ENTONCES** sus líneas suben desde una máscara una tras otra

#### Scenario: Movimiento reducido
- **CUANDO** se prefiere movimiento reducido
- **ENTONCES** titulares y contenido son visibles desde el principio
