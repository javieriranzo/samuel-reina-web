# Layout global: cabecera, menú móvil, pie «Fin» y botón de sonido

## Por qué

Antes de construir las secciones de la home, la web necesita su estructura fija: cómo se navega, cómo se cierra y cómo se controla el sonido. Todas las secciones de las fases 3 y 4 se colocarán dentro de este marco.

## Qué cambia

- **Cabecera** con logotipo tipográfico «SR», navegación a las secciones (Música, Doblaje, Directo, Bio, Contacto) y botón de sonido. Transparente arriba del todo; con fondo difuminado al hacer scroll; se oculta al bajar y reaparece al subir.
- **Menú móvil** a pantalla completa con los enlaces en serif gigante, cierre con Escape, bloqueo del scroll y foco gestionado.
- **Pie «Fin»** con estética de créditos finales: contacto, redes, «Fin» y avisos legales.
- **Botón de sonido** con estado global (desactivado por defecto, recordado entre visitas). En esta fase solo guarda la preferencia; el audio llega en la fase 5.
- **Enlace «Saltar al contenido»** para teclado.
- **Navegación por anclas** con el scroll suave de Lenis y acceso a la instancia de Lenis desde cualquier componente.
- **Datos del sitio** (navegación, redes, contacto) en `src/data/site.ts`.

## Impacto

- Capacidad nueva: `layout`.
- Modifica `motion`: el scroll suave expone su instancia y gestiona anclas.
- La home provisional gana secciones vacías con sus `id` para que funcionen las anclas.
