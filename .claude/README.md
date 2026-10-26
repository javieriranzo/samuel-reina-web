# .claude/

Configuración de Claude Code compartida por el proyecto (todo lo de aquí se versiona, salvo `settings.local.json`).

| Ruta | Para qué sirve |
|---|---|
| `settings.json` | Permisos y ajustes comunes. Aquí también se activan plugins (`enabledPlugins`) y marketplaces (`extraKnownMarketplaces`). |
| `settings.local.json` | Ajustes personales de cada persona. **No se versiona.** |
| `skills/<nombre>/SKILL.md` | Skills del proyecto: instrucciones empaquetadas que Claude carga cuando la tarea encaja (p. ej. «crear sección de la home», «añadir disco a la discografía»). |
| `agents/<nombre>.md` | Subagentes especializados (p. ej. revisor de accesibilidad, revisor de animaciones). |
| `commands/<nombre>.md` | Comandos slash propios (`/<nombre>`). |

## Plugins

Para instalar un plugin: `/plugin` dentro de Claude Code. Si debe quedar para todo el equipo, se registra en `settings.json`:

```json
{
  "enabledPlugins": { "<plugin>@<marketplace>": true }
}
```

## OpenSpec

Si se instala la CLI de OpenSpec (`npm i -g @fission-ai/openspec` y `openspec init`), generará sus propios comandos para Claude en `commands/`. La estructura de `openspec/` ya sigue sus convenciones.
