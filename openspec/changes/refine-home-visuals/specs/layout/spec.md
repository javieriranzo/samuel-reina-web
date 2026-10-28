## MODIFIED Requirements

### Requirement: Pie «Fin»

El sistema SHALL cerrar todas las páginas con un pie de estilo créditos finales con contacto, redes, la palabra «Fin» y enlaces legales.

#### Scenario: Red no confirmada
- **CUANDO** una red social no tiene URL confirmada en `src/data/site.ts`
- **ENTONCES** no se muestra en el pie

#### Scenario: Email pendiente
- **CUANDO** no hay email de contratación confirmado
- **ENTONCES** el pie no muestra el bloque de contratación
