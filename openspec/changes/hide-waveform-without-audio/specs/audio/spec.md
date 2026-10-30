## ADDED Requirements

### Requirement: Onda solo con audio

El sistema SHALL mostrar la onda de audio junto a una lista de temas solo cuando al menos uno de esos temas tenga fragmento de audio, y SHALL indicar con «Spotify ↗» los temas que abren Spotify en lugar de reproducirse en la web.

#### Scenario: Lanzamiento sin fragmentos
- **CUANDO** ningún tema destacado de un lanzamiento tiene `preview`
- **ENTONCES** se muestran los temas con su duración, sin onda

#### Scenario: Lo más escuchado
- **CUANDO** se muestra el ranking de lo más escuchado
- **ENTONCES** cada tema indica «Spotify ↗» y no muestra onda
