## REMOVED Requirements

### Requirement: Pie «Fin»

**Razón:** se quita la palabra «Fin»; lo sustituye «Pie de créditos».

## ADDED Requirements

### Requirement: Pie de créditos

El sistema SHALL cerrar todas las páginas con un pie de estilo créditos finales con contacto, redes y enlaces legales. Cada red con logo disponible SHALL mostrar su logo completo (símbolo + nombre) en lugar del nombre en texto, que queda accesible para lectores de pantalla. Los logos SHALL ir centrados en el orden Spotify, Apple Music, YouTube y Amazon Music, y al pasar el ratón SHALL ampliarse y mostrar los colores de su marca.

#### Scenario: Red no confirmada
- **CUANDO** una red social no tiene URL confirmada en `src/data/site.ts`
- **ENTONCES** no se muestra en el pie

#### Scenario: Otras plataformas
- **CUANDO** se muestra el pie
- **ENTONCES** los logos completos de Spotify, Apple Music, YouTube y Amazon Music aparecen en ese orden, centrados

#### Scenario: Pasar el ratón por un logo
- **CUANDO** el usuario pasa el ratón por un logo o lo enfoca con el teclado
- **ENTONCES** el logo se amplía y se muestra con los colores de su marca

#### Scenario: Plataforma sin enlace confirmado
- **CUANDO** una plataforma con logo no tiene URL confirmada en `src/data/site.ts`
- **ENTONCES** su logo se muestra sin enlace y el lector de pantalla anuncia «<plataforma> (próximamente)»

#### Scenario: Logo de Spotify
- **CUANDO** Spotify tiene URL confirmada
- **ENTONCES** se muestra su logo completo enlazado al perfil, y el lector de pantalla anuncia «Spotify»
