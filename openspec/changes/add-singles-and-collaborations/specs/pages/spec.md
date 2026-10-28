## ADDED Requirements

### Requirement: Listado de discografía

La página `/discografia` SHALL mostrar los lanzamientos en tres bloques: *Discos* y *Sencillos* (portada, año y título, enlazados a su ficha) y *Colaboraciones* (tema, artista principal, lanzamiento y año, enlazados a Spotify).

#### Scenario: Ficha de un disco
- **CUANDO** el usuario abre la ficha de un disco con tracklist
- **ENTONCES** se muestran todos sus temas con duración y el rótulo indica que es un disco
