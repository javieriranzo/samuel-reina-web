## ADDED Requirements

### Requirement: Página de discografía

`/discografia` SHALL abrir con el último lanzamiento destacado (portada grande, fecha, título y enlaces para escucharlo y ver su ficha), seguido de un mosaico con el resto de discos en grande y sencillos en pequeño, las colaboraciones y un ranking de lo más escuchado.

#### Scenario: Pasar el ratón por una portada
- **CUANDO** el usuario pasa el ratón por una portada o la enfoca con el teclado
- **ENTONCES** asoma un vinilo junto a la portada y aparece «Escuchar» con el tipo de lanzamiento

#### Scenario: Movimiento reducido
- **CUANDO** se prefiere movimiento reducido
- **ENTONCES** el vinilo aparece sin girar ni desplazarse

#### Scenario: Listado de temas incompleto
- **CUANDO** un lanzamiento no tiene listado completo de temas
- **ENTONCES** no se muestra el número de temas

#### Scenario: Tema del ranking sin lanzamiento conocido
- **CUANDO** un tema de «Lo más escuchado» no pertenece a ningún lanzamiento de los datos
- **ENTONCES** se muestra sin miniatura
