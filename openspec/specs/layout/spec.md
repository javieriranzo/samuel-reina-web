# Layout

## Purpose

Estructura común a todas las páginas: cabecera, menú móvil, pie, preferencia de sonido y accesos de teclado.

## Requirements

### Requirement: Cabecera de navegación

El sistema SHALL mostrar una cabecera fija con el logotipo «SR» (enlace al inicio), enlaces a las secciones Música, Doblaje, Directo, Bio y Contacto, y el botón de sonido.

#### Scenario: Arriba del todo
- **CUANDO** la página está en la posición inicial
- **ENTONCES** la cabecera es transparente sobre el hero

#### Scenario: Scroll hacia abajo
- **CUANDO** el usuario baja más allá de la cabecera
- **ENTONCES** la cabecera se oculta, y reaparece con fondo difuminado al subir

#### Scenario: Movimiento reducido
- **CUANDO** el usuario prefiere movimiento reducido
- **ENTONCES** la cabecera permanece siempre visible

### Requirement: Menú móvil

El sistema SHALL ofrecer en pantallas estrechas un botón que abre un menú a pantalla completa con los mismos enlaces.

#### Scenario: Abrir el menú
- **CUANDO** el usuario pulsa el botón de menú
- **ENTONCES** el panel se abre, el botón indica `aria-expanded="true"`, el foco pasa al primer enlace y el scroll de la página se bloquea

#### Scenario: Cerrar con Escape
- **CUANDO** el menú está abierto y el usuario pulsa Escape
- **ENTONCES** el menú se cierra y el foco vuelve al botón de menú

#### Scenario: Elegir una sección
- **CUANDO** el usuario pulsa un enlace del menú
- **ENTONCES** el menú se cierra y la página se desplaza a esa sección

### Requirement: Preferencia de sonido

El sistema SHALL ofrecer un botón de sonido desactivado por defecto que recuerda la elección del usuario entre visitas.

#### Scenario: Primera visita
- **CUANDO** el usuario entra por primera vez
- **ENTONCES** el sonido está desactivado y el botón muestra «Activar sonido» con `aria-pressed="false"`

#### Scenario: Almacenamiento no disponible
- **CUANDO** el navegador bloquea `localStorage`
- **ENTONCES** el botón sigue funcionando durante la visita sin errores

### Requirement: Pie «Fin»

El sistema SHALL cerrar todas las páginas con un pie de estilo créditos finales con contacto, redes, la palabra «Fin» y enlaces legales.

#### Scenario: Red no confirmada
- **CUANDO** una red social no tiene URL confirmada en `src/data/site.ts`
- **ENTONCES** no se muestra en el pie

### Requirement: Saltar al contenido

El sistema SHALL ofrecer como primer elemento enfocable un enlace «Saltar al contenido» que lleva al contenido principal.

#### Scenario: Navegación con teclado
- **CUANDO** el usuario pulsa Tab al cargar la página
- **ENTONCES** aparece el enlace «Saltar al contenido» y al activarlo el foco pasa a `<main>`
