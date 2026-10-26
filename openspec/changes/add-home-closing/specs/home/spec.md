## ADDED Requirements

### Requirement: Discografía

El sistema SHALL mostrar todos los lanzamientos de `src/data/releases.ts` como una tira de portadas con número, año y título, y debajo los temas más escuchados con enlace a Spotify.

#### Scenario: Escritorio sin movimiento reducido
- **CUANDO** el ancho es ≥ 900 px y no hay preferencia de movimiento reducido
- **ENTONCES** la sección se fija y la tira avanza en horizontal al hacer scroll vertical

#### Scenario: Móvil o movimiento reducido
- **CUANDO** el ancho es < 900 px o se prefiere movimiento reducido
- **ENTONCES** la tira se desplaza en horizontal de forma nativa, sin fijar la sección

### Requirement: Créditos de doblaje

El sistema SHALL mostrar los créditos de `src/data/dubbing.ts` con personaje, producción y año, con estética de créditos finales.

#### Scenario: Sin créditos
- **CUANDO** la lista de créditos está vacía
- **ENTONCES** se muestra la cabecera de la sección con un aviso de que los créditos están en preparación, sin datos inventados

### Requirement: Conciertos

El sistema SHALL mostrar los conciertos futuros de `src/data/concerts.ts` ordenados por fecha, con botón «Entradas» en rojo ON AIR solo si hay enlace de venta.

#### Scenario: Sin fechas
- **CUANDO** no hay conciertos futuros
- **ENTONCES** se indica que no hay fechas anunciadas y se enlaza a la sección de contacto

#### Scenario: Concierto pasado
- **CUANDO** la fecha de un concierto ya ha pasado
- **ENTONCES** no se muestra

### Requirement: Manifiesto

El sistema SHALL mostrar una frase en serif grande cuyas palabras pasan de atenuadas a iluminadas según avanza el scroll.

#### Scenario: Movimiento reducido
- **CUANDO** se prefiere movimiento reducido
- **ENTONCES** la frase se muestra completa e iluminada

### Requirement: Vídeo destacado

El sistema SHALL mostrar el vídeo destacado de `src/data/media.ts` en formato 2.39:1 solo cuando exista.

#### Scenario: Sin vídeo
- **CUANDO** no hay vídeo destacado
- **ENTONCES** la sección no se renderiza

### Requirement: Contacto

El sistema SHALL mostrar una sección de contacto con el email de contratación y prensa cuando esté confirmado, y las redes confirmadas.

#### Scenario: Email pendiente
- **CUANDO** no hay email confirmado
- **ENTONCES** se indica que estará disponible próximamente, sin enlace `mailto`
