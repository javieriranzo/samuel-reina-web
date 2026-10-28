## MODIFIED Requirements

### Requirement: Cursor personalizado

El sistema SHALL mantener siempre visible el puntero del sistema y, en dispositivos con puntero fino, mostrar junto a él una etiqueta «▶ PLAY» sobre elementos de música y «● REC» sobre elementos de doblaje.

#### Scenario: Fuera de música y doblaje
- **CUANDO** el puntero no está sobre un elemento con `data-cursor`
- **ENTONCES** solo se ve el puntero del sistema

#### Scenario: Sobre un elemento de música
- **CUANDO** el puntero pasa sobre un elemento con `data-cursor="play"`
- **ENTONCES** aparece la etiqueta «▶ PLAY» junto al puntero, que sigue visible

#### Scenario: Dispositivo táctil
- **CUANDO** el dispositivo no tiene puntero fino
- **ENTONCES** no se muestra la etiqueta
