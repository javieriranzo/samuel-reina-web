## MODIFIED Requirements

### Requirement: Cabecera de navegación

El sistema SHALL mostrar una cabecera fija con enlaces a las secciones de la home Música, Doblaje, Directo, Bio y Contacto (`/#id`, funcionales desde cualquier página), dentro de una cápsula flotante en pantallas anchas, y SHALL marcar en el menú la sección de la home que está en pantalla. El monograma «SR» se usa solo como favicon.

#### Scenario: Arriba del todo
- **CUANDO** la página está en la posición inicial
- **ENTONCES** la barra es transparente y solo se ve la cápsula del menú

#### Scenario: Scroll hacia abajo
- **CUANDO** el usuario baja más allá de la cabecera
- **ENTONCES** la cabecera se oculta, y reaparece al subir

#### Scenario: Movimiento reducido
- **CUANDO** el usuario prefiere movimiento reducido
- **ENTONCES** la cabecera permanece siempre visible

#### Scenario: Desde una página secundaria
- **CUANDO** el usuario pulsa un enlace del menú fuera de la home
- **ENTONCES** navega a la home y se desplaza a esa sección

#### Scenario: Sección en pantalla
- **CUANDO** una de las secciones del menú ocupa el centro de la pantalla en la home
- **ENTONCES** su enlace se muestra en ámbar con `aria-current="true"`

#### Scenario: Final de la página
- **CUANDO** el usuario llega al final de la home y la última sección no alcanza el centro de la pantalla
- **ENTONCES** se marca la última sección visible

#### Scenario: Fuera de esas secciones
- **CUANDO** el centro de la pantalla está en la portada, en otra sección o en una página secundaria
- **ENTONCES** ningún enlace aparece marcado
