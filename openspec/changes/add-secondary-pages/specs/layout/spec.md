## MODIFIED Requirements

### Requirement: Cabecera de navegación

El sistema SHALL mostrar una cabecera fija con el logotipo «SR» (enlace a `/`), enlaces a las secciones de la home Música, Doblaje, Directo, Bio y Contacto (`/#id`, funcionales desde cualquier página), y el botón de sonido.

#### Scenario: Arriba del todo
- **CUANDO** la página está en la posición inicial
- **ENTONCES** la cabecera es transparente

#### Scenario: Scroll hacia abajo
- **CUANDO** el usuario baja más allá de la cabecera
- **ENTONCES** la cabecera se oculta, y reaparece con fondo difuminado al subir

#### Scenario: Movimiento reducido
- **CUANDO** el usuario prefiere movimiento reducido
- **ENTONCES** la cabecera permanece siempre visible

#### Scenario: Desde una página secundaria
- **CUANDO** el usuario pulsa un enlace del menú fuera de la home
- **ENTONCES** navega a la home y se desplaza a esa sección
