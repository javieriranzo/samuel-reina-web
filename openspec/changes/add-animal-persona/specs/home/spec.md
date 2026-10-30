## ADDED Requirements

### Requirement: Animal Persona

El sistema SHALL mostrar entre los créditos de doblaje y «En directo» una sección `#animal-persona` dedicada al proyecto musical Animal Persona, con la descripción y el enlace para escucharlo de `src/data/animalPersona.ts` cuando estén confirmados.

#### Scenario: Contenido pendiente
- **CUANDO** no hay descripción confirmada
- **ENTONCES** se indica que el proyecto está en preparación, sin texto inventado

#### Scenario: Enlace para escuchar
- **CUANDO** hay enlace confirmado
- **ENTONCES** se muestra un enlace externo que se abre en otra pestaña
