# Home

## Purpose

Página de inicio: intro, portada, música, doblaje, directo, manifiesto y contacto.

## Requirements

### Requirement: Intro cinematográfica

El sistema SHALL mostrar en la primera visita de cada sesión una intro breve (≤ 3 s) con un timecode en marcha y una onda de audio, que termina descubriendo la portada.

#### Scenario: Primera visita
- **CUANDO** el usuario abre la web por primera vez en la sesión
- **ENTONCES** ve la intro y, al terminar, la portada anima su entrada

#### Scenario: Segunda carga en la misma sesión
- **CUANDO** el usuario recarga la página
- **ENTONCES** no se muestra la intro

#### Scenario: Saltar la intro
- **CUANDO** el usuario hace clic, pulsa una tecla o el botón «Saltar intro»
- **ENTONCES** la intro termina de inmediato

#### Scenario: Movimiento reducido
- **CUANDO** el usuario prefiere movimiento reducido
- **ENTONCES** no se muestra la intro

### Requirement: Portada

El sistema SHALL mostrar como primera sección el nombre «Samuel Reina» como `h1`, el rótulo «Cantante · Actor de doblaje», una foto del artista con texto alternativo y una indicación de scroll.

#### Scenario: Entrada animada
- **CUANDO** la portada aparece sin movimiento reducido
- **ENTONCES** las líneas del nombre suben desde una máscara una tras otra

#### Scenario: Sin JavaScript de animación
- **CUANDO** el usuario prefiere movimiento reducido
- **ENTONCES** todo el contenido de la portada es visible desde el principio

### Requirement: Último lanzamiento

El sistema SHALL mostrar el lanzamiento más reciente de `src/data/releases.ts` con portada, título, fecha, temas con duración y enlaces solo a plataformas confirmadas.

#### Scenario: Plataforma no confirmada
- **CUANDO** un lanzamiento no tiene URL para una plataforma
- **ENTONCES** no se muestra ese botón

#### Scenario: Inclinación de la portada
- **CUANDO** el usuario mueve el ratón sobre la portada con puntero fino y sin movimiento reducido
- **ENTONCES** la portada se inclina en 3D siguiendo el puntero y vuelve a su sitio al salir

### Requirement: Dos voces

El sistema SHALL mostrar una sección dividida con *La música* y *El doblaje*, cada mitad enlazada a su sección.

#### Scenario: Hover en una mitad
- **CUANDO** el usuario pasa el puntero por una mitad
- **ENTONCES** esa mitad se ilumina, la otra se atenúa y el cursor muestra PLAY (música) o REC (doblaje)

#### Scenario: Pantalla estrecha
- **CUANDO** el ancho es de móvil
- **ENTONCES** las dos mitades se apilan verticalmente

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
