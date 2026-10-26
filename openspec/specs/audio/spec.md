# Audio

## Purpose

Reproducción de fragmentos de canciones, demo reel y saludo mediante un reproductor global.

## Requirements

### Requirement: Reproductor único

El sistema SHALL reproducir todo el audio de la web mediante un único reproductor global, de modo que nunca suenen dos fragmentos a la vez.

#### Scenario: Cambiar de fragmento
- **CUANDO** suena un fragmento y el usuario pulsa reproducir en otro
- **ENTONCES** el primero se detiene y empieza el segundo

#### Scenario: Pausar
- **CUANDO** el usuario pulsa el botón de un fragmento que está sonando
- **ENTONCES** se pausa y el botón vuelve a indicar «Reproducir»

### Requirement: Sonido y reproducción enlazados

El sistema SHALL activar la preferencia de sonido cuando el usuario reproduce algo, y SHALL pausar la reproducción cuando el usuario desactiva el sonido.

#### Scenario: Reproducir con el sonido desactivado
- **CUANDO** el sonido está desactivado y el usuario pulsa reproducir
- **ENTONCES** el fragmento suena y el botón de sonido pasa a «Sonido activado»

#### Scenario: Desactivar el sonido
- **CUANDO** algo suena y el usuario desactiva el sonido
- **ENTONCES** la reproducción se pausa

### Requirement: Saludo

El sistema SHALL reproducir el saludo de Samuel la primera vez que el usuario activa el sonido en cada sesión, solo si hay archivo de saludo configurado.

#### Scenario: Sin archivo de saludo
- **CUANDO** no hay saludo configurado y el usuario activa el sonido
- **ENTONCES** no suena nada y no hay errores

### Requirement: Botones solo con audio

El sistema SHALL mostrar botones de reproducción únicamente en temas y créditos que tengan fragmento de audio.

#### Scenario: Tema sin fragmento
- **CUANDO** un tema no tiene `preview`
- **ENTONCES** no muestra botón de reproducción

### Requirement: Onda real

El sistema SHALL dibujar la onda con los picos reales del fragmento cuando pueda decodificarlo, y SHALL usar la onda determinista en caso contrario.

#### Scenario: Error al decodificar
- **CUANDO** el navegador no puede decodificar el archivo
- **ENTONCES** se muestra la onda determinista sin errores visibles

### Requirement: Anuncio de reproducción

El sistema SHALL mostrar mientras suena audio una barra «Sonando ahora» con título y botón de pausa, anunciada a lectores de pantalla.

#### Scenario: Empieza un fragmento
- **CUANDO** empieza a sonar un fragmento
- **ENTONCES** aparece la barra con su título y el lector de pantalla anuncia «Sonando: <título>»
