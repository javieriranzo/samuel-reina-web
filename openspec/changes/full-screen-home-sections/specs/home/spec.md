## ADDED Requirements

### Requirement: Secciones a pantalla completa

El sistema SHALL mostrar las secciones de destino del menú (Música, Doblaje, Animal Persona, Directo, Bio y Contacto) con el alto de la pantalla y su contenido centrado en vertical.

#### Scenario: Llegar a una sección desde el menú
- **CUANDO** el usuario pulsa un enlace del menú
- **ENTONCES** la sección ocupa la pantalla completa y no asoma la anterior ni la siguiente

#### Scenario: Pantalla muy baja
- **CUANDO** el contenido de una sección no cabe en el alto de la pantalla
- **ENTONCES** la sección crece lo necesario y no se recorta nada

## MODIFIED Requirements

### Requirement: Discografía

El sistema SHALL mostrar en la home los discos de `src/data/releases.ts` como un índice con el año y el título de cada uno, enlazado a su ficha, y un enlace a la discografía completa (`/discografia`), donde están también los sencillos, las colaboraciones y los temas más escuchados.

#### Scenario: Señalar un disco en escritorio
- **CUANDO** el ancho es ≥ 900 px y el usuario pasa el puntero o el foco por un disco
- **ENTONCES** la portada fija muestra ese disco y el resto de filas se atenúan

#### Scenario: Estado inicial
- **CUANDO** ningún disco está señalado
- **ENTONCES** la portada fija muestra el disco más reciente

#### Scenario: Móvil
- **CUANDO** el ancho es < 900 px
- **ENTONCES** cada fila muestra su miniatura y no hay portada fija

#### Scenario: Movimiento reducido
- **CUANDO** se prefiere movimiento reducido
- **ENTONCES** la portada cambia sin fundido
