# Onda de audio solo donde se puede escuchar

## Por qué

La onda de audio (barras verticales) parece un reproductor. Ningún tema tiene todavía fragmento de audio en la web, así que en el último lanzamiento, en las fichas sin listado de temas y en «Lo más escuchado» la onda hacía creer que se podía escuchar y al pulsar no pasaba nada (o se abría Spotify).

## Qué cambia

- El panel de temas del último lanzamiento y de las fichas solo muestra la onda si algún tema tiene fragmento de audio; sin audio, quedan los temas con su duración. Cuando lleguen los fragmentos, la onda vuelve sola.
- «Lo más escuchado» deja de tener onda: en su lugar, «Spotify ↗» (solo «↗» en móvil), en ámbar al señalar la fila, porque la fila abre Spotify.
- Se mantiene la onda decorativa de la intro y de los avisos de contenido pendiente, que no prometen reproducción.

## Impacto

- Añade el requisito «Onda solo con audio» a `audio`.
- Código: `src/sections/ReleasePlayer.tsx`, `src/sections/TopTracks.tsx` y `TopTracks.css`.
