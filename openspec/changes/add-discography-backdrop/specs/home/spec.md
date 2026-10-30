## MODIFIED Requirements

### Requirement: Discografía

El sistema SHALL mostrar en la home los discos de `src/data/releases.ts` como un índice con el año y el título de cada uno, enlazado a su ficha, y un enlace a la discografía completa (`/discografia`), donde están también los sencillos, las colaboraciones y los temas más escuchados. Detrás del índice SHALL mostrar las portadas de los discos como marca de agua, en un carrusel automático con fundido.

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
- **ENTONCES** la portada cambia sin fundido y la marca de agua muestra fija la portada del disco más reciente

#### Scenario: Marca de agua fuera de pantalla
- **CUANDO** la sección no está en pantalla o la pestaña está oculta
- **ENTONCES** el carrusel de fondo se detiene
