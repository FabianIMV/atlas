# Atlas de la Realidad

Sistema de conocimiento vivo sobre la arquitectura del universo: un modelo por
capas (C0–C6) donde la consciencia es fundamental, cruzado con física cuántica,
tradiciones contemplativas, papers y experiencia registrada. La estructura es
el mensaje.

Documentos fundacionales en [`_fundacion/`](_fundacion/). Sitio construido con
[Astro](https://astro.build) y desplegado en GitHub Pages.

## Desarrollo local

```bash
npm install
npm run dev        # servidor de desarrollo en http://localhost:4321/atlas/es/
npm run build      # build de producción en dist/
npm run preview    # sirve el build de producción
```

## Estructura

- `src/content/` — **única fuente de verdad del contenido** (markdown con
  frontmatter tipado): `capas/`, `cruces/`, `papers/`, `bitacora/`
- `src/data/glosario.yaml` — glosario semilla
- `src/pages/es/` — rutas en español (el inglés se agrega en Fase 4)
- `src/styles/tokens.css` — sistema de diseño (paleta, registros E1–E4, capas)
- `public/diagramas/` — fuentes Mermaid de los diagramas (documentación viva)
- `.github/workflows/deploy.yml` — build + deploy a Pages en cada push a `main`

## Registro epistémico

Toda nota declara su registro (E1 ciencia publicada · E2 marco formal ·
E3 síntesis propia · E4 experiencia registrada) y las capas del modelo a las
que se conecta. Ver `/es/epistemologia/`.

## Estado

**Fase 1 completada** — scaffolding + mockup en español.
Pendientes: Fase 2 (población de contenido), Fase 3 (grafo y navegación),
Fase 4 (inglés). Ver `_fundacion/01-PROMPT-MAESTRO-claude-code.md`.
