## MODIFIED Requirements

### Requirement: Discografía

El sistema SHALL mostrar todos los lanzamientos de `src/data/releases.ts` como un índice con el año y el título de cada uno, enlazado a su ficha, y debajo los temas más escuchados con enlace a Spotify.

#### Scenario: Señalar un disco en escritorio
- **CUANDO** el ancho es ≥ 900 px y el usuario pasa el puntero o el foco por un disco
- **ENTONCES** la portada fija muestra ese disco y el resto de filas se atenúan

#### Scenario: Estado inicial
- **CUANDO** ningún disco está señalado
- **ENTONCES** la portada fija muestra el lanzamiento más reciente

#### Scenario: Móvil
- **CUANDO** el ancho es < 900 px
- **ENTONCES** cada fila muestra su miniatura y no hay portada fija

#### Scenario: Movimiento reducido
- **CUANDO** se prefiere movimiento reducido
- **ENTONCES** la portada cambia sin fundido
