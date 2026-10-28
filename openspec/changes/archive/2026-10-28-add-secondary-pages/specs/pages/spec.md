## ADDED Requirements

### Requirement: Rutas de la web

El sistema SHALL servir la home en `/` y las páginas `/biografia`, `/discografia`, `/discografia/:id`, `/doblaje`, `/aviso-legal`, `/privacidad` y `/cookies`, cada una con su título de documento.

#### Scenario: Recarga en una ruta profunda
- **CUANDO** el usuario recarga `/discografia/ronda-sud`
- **ENTONCES** se muestra la ficha de *Ronda Sud* y el título del documento la nombra

#### Scenario: Ruta inexistente
- **CUANDO** el usuario visita una ruta que no existe o un disco con id desconocido
- **ENTONCES** se muestra la página 404 «Fin de la cinta» con enlace a la home

### Requirement: Navegación entre páginas

El sistema SHALL llevar a la parte superior al cambiar de página y SHALL desplazarse a la sección indicada cuando la URL incluye `#ancla`, también al llegar desde otra página.

#### Scenario: Menú desde una página secundaria
- **CUANDO** el usuario está en `/biografia` y pulsa «Directo» en el menú
- **ENTONCES** navega a la home y la página se desplaza a la sección En directo

### Requirement: Contenido pendiente

Cada página SHALL mostrar un estado vacío diseñado cuando falte su contenido, sin datos inventados.

#### Scenario: Biografía sin texto
- **CUANDO** `src/data/bio.ts` no tiene biografía
- **ENTONCES** `/biografia` muestra el título y un aviso de que la biografía está en preparación

### Requirement: Textos legales

Las páginas legales SHALL mostrar la estructura obligatoria y marcar como pendiente cualquier dato del titular no confirmado, indicando que el texto es un borrador hasta su revisión.

#### Scenario: Datos del titular pendientes
- **CUANDO** falta el NIF o el domicilio del titular
- **ENTONCES** se muestra «[Pendiente]» en su lugar
