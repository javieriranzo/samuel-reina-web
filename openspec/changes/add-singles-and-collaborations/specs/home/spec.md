## MODIFIED Requirements

### Requirement: Discografía

El sistema SHALL mostrar todos los lanzamientos de `src/data/releases.ts` como un índice con el año y el título de cada uno, enlazado a su ficha, separado en *Discos* y *Sencillos*; debajo, las colaboraciones con enlace a Spotify y los temas más escuchados.

#### Scenario: Señalar un lanzamiento en escritorio
- **CUANDO** el ancho es ≥ 900 px y el usuario pasa el puntero o el foco por un disco o sencillo
- **ENTONCES** la portada fija muestra ese lanzamiento y el resto de filas se atenúan

#### Scenario: Estado inicial
- **CUANDO** ningún lanzamiento está señalado
- **ENTONCES** la portada fija muestra el disco más reciente

#### Scenario: Móvil
- **CUANDO** el ancho es < 900 px
- **ENTONCES** cada fila muestra su miniatura y no hay portada fija

#### Scenario: Movimiento reducido
- **CUANDO** se prefiere movimiento reducido
- **ENTONCES** la portada cambia sin fundido

### Requirement: Último lanzamiento

El sistema SHALL mostrar el lanzamiento más reciente por fecha de `src/data/releases.ts`, sea disco o sencillo, con portada, título, fecha, temas con duración y enlaces solo a plataformas confirmadas; el enlace de Spotify lleva al propio lanzamiento si se conoce.

#### Scenario: Plataforma no confirmada
- **CUANDO** un lanzamiento no tiene URL para una plataforma
- **ENTONCES** no se muestra ese botón

#### Scenario: Inclinación de la portada
- **CUANDO** el usuario mueve el ratón sobre la portada con puntero fino y sin movimiento reducido
- **ENTONCES** la portada se inclina en 3D siguiendo el puntero y vuelve a su sitio al salir
