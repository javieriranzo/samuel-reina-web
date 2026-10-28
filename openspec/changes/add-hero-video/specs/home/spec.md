## MODIFIED Requirements

### Requirement: Portada

El sistema SHALL mostrar como primera sección el nombre «Samuel Reina» como `h1`, el rótulo «Cantante · Actor de doblaje», un vídeo del artista en bucle y sin sonido (o, si no hay vídeo, una foto con texto alternativo) y una indicación de scroll.

#### Scenario: Entrada animada
- **CUANDO** la portada aparece sin movimiento reducido
- **ENTONCES** las líneas del nombre suben desde una máscara una tras otra

#### Scenario: Sin JavaScript de animación
- **CUANDO** el usuario prefiere movimiento reducido
- **ENTONCES** todo el contenido de la portada es visible desde el principio

#### Scenario: Vídeo disponible
- **CUANDO** hay vídeo configurado y no se prefiere movimiento reducido ni ahorro de datos
- **ENTONCES** se reproduce en bucle, sin sonido, con la foto como imagen mientras carga

#### Scenario: Movimiento reducido o ahorro de datos
- **CUANDO** se prefiere movimiento reducido o el navegador pide ahorro de datos
- **ENTONCES** se muestra la foto y el vídeo no se descarga

#### Scenario: Fuera de pantalla
- **CUANDO** la portada sale de la pantalla
- **ENTONCES** el vídeo se pausa, y se reanuda al volver
