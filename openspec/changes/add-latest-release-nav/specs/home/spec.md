## MODIFIED Requirements

### Requirement: Secciones a pantalla completa

El sistema SHALL mostrar las secciones de destino del menú (Último lanzamiento, Música, Doblaje, Animal Persona, Directo, Bio y Contacto) con el alto de la pantalla y su contenido centrado en vertical.

#### Scenario: Llegar a una sección desde el menú
- **CUANDO** el usuario pulsa un enlace del menú
- **ENTONCES** la sección ocupa la pantalla completa y no asoma la anterior ni la siguiente

#### Scenario: Pantalla muy baja
- **CUANDO** el contenido de una sección no cabe en el alto de la pantalla
- **ENTONCES** la sección crece lo necesario y no se recorta nada

#### Scenario: Último lanzamiento en pantalla estrecha
- **CUANDO** el ancho es < 1024 px
- **ENTONCES** la portada se muestra encima del texto, reducida para que la sección quepa en una pantalla
