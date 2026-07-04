# 01 · PROMPT MAESTRO PARA CLAUDE CODE

**Proyecto:** Atlas de la Realidad — sistema de conocimiento vivo sobre la arquitectura del universo
**Autor:** Fabián Muñoz (fabianimv)
**Deploy:** GitHub Pages vía GitHub Actions
**Relación con otros proyectos:** hermano conceptual de consciousnessnetworks.com (journal público en WordPress) y de las trilogías contemplativas en GitHub Pages (GSAP + Lenis, estética oscura). El Atlas es el **mapa maestro** que ordena y cruza todo.

---

## 1. QUÉ ES ESTE SITIO

Un **atlas navegable** de cómo el autor entiende el funcionamiento del universo: un modelo por capas donde la **consciencia es fundamental** (no emergente), cruzado sistemáticamente con:

- **Física cuántica** y computación cuántica
- **Papers de arxiv** y literatura peer-reviewed (fichas con key insight)
- **Tradiciones contemplativas** (Advaita Vedanta, Shivaísmo de Cachemira, Hermetismo)
- **Teorías de campo** (Grinberg, Sheldrake, Jung, ZPF, IIT)
- **Experiencia registrada** (bitácora de síntesis, sincronicidades verificadas)

**Doble función:**
1. **Ordenamiento mental del autor** — cada idea nueva tiene un lugar estructural donde vivir
2. **Distribución futura** — contenido bilingüe ES/EN para audiencia amplia

**No es** un blog cronológico. Es un **grafo de conocimiento** con entradas interconectadas, donde la estructura ES el mensaje.

---

## 2. STACK TÉCNICO

- **Astro** (última versión estable) con **Content Collections** — todo el contenido vive en markdown con frontmatter tipado
- **i18n por rutas**: `/es/...` y `/en/...` — español es la fuente de verdad, inglés se genera en Fase 4
- **Mermaid** para diagramas: renderizar en build (rehype-mermaid o similar) o en cliente con lazy load — elegir la opción más estable para Pages
- **GSAP + Lenis** para scroll y reveals (coherencia con los otros sitios del autor) — pero con moderación: este es un sitio de LECTURA, la animación sirve al contenido
- **Sin frameworks de UI pesados.** CSS propio con custom properties. Cero Tailwind
- **GitHub Actions** workflow para build + deploy a Pages (`withastro/action`)
- **Mobile-first estricto** — el autor lee principalmente desde el teléfono
- `prefers-reduced-motion` respetado; focus visible; contraste AA mínimo

---

## 3. ARQUITECTURA DE INFORMACIÓN (rutas)

```
/es (raíz del mockup)
├── /                    → EL MAPA (home = diagrama maestro interactivo)
├── /modelo              → índice de las capas del modelo (C0–C6)
│   └── /modelo/[capa]   → nodo por capa (7 páginas)
├── /cruces              → convergencias tradición ↔ ciencia
│   └── /cruces/[slug]   → ficha de cada cruce
├── /papers              → biblioteca de papers (arxiv + peer-reviewed)
│   └── /papers/[slug]   → ficha: cita, key insight, conexión al modelo
├── /bitacora            → síntesis fechadas (el pensamiento en evolución)
│   └── /bitacora/[slug]
├── /epistemologia       → el sistema E1–E4 y los criterios de validación
├── /glosario            → términos sánscritos, técnicos, propios
└── /acerca              → qué es el atlas + link a consciousnessnetworks.com
```

**Regla de oro del grafo:** toda nota (cruce, paper, bitácora) declara en su frontmatter a qué **capas del modelo** se conecta (`capas: [C2, C3]`) y qué **registro epistémico** tiene (`registro: E1`). Las páginas de capa listan automáticamente todo lo conectado a ellas. Así el atlas se auto-organiza.

---

## 4. MODELO DE CONTENIDO (Content Collections)

### `capas` (7 entradas fijas — el corazón del sitio)
```yaml
id: C2
titulo: "Geometría / Información"
subtitulo: "La retícula: patrones como sustancia de la realidad"
color: "#variable-del-sistema"
orden: 2
```
Cuerpo: definición de la capa, qué tradiciones la describen, qué ciencia la toca, preguntas abiertas.

### `cruces`
```yaml
titulo: "Spanda y la oscilación de campos cuánticos"
tradicion: "Shivaísmo de Cachemira"
ciencia: "Teoría cuántica de campos"
capas: [C1]
registro: E3          # síntesis especulativa propia
estado: "abierto"     # abierto | convergente | tensión
fecha: 2026-07-03
```

### `papers`
```yaml
titulo: "..."
autores: "..."
fuente: "arXiv:XXXX.XXXXX"
url: "https://arxiv.org/abs/..."
capas: [C5]
registro: E1          # ciencia publicada
key_insight: "Una frase. El hallazgo esencial."
fecha_lectura: 2026-07-03
```

### `bitacora`
```yaml
titulo: "..."
capas: [C0, C6]
registro: E3
fecha: 2026-07-03
semilla: "conversación | lectura | meditación | sincronicidad"
```

### `glosario`
```yaml
termino: "Spanda"
origen: "Shivaísmo de Cachemira"
en: "Primordial vibration / creative pulse"
```

---

## 5. SISTEMA DE REGISTRO EPISTÉMICO (feature central, no opcional)

Cada pieza de contenido lleva un **badge visible** con su nivel:

| Nivel | Nombre | Significado | Color del badge |
|---|---|---|---|
| **E1** | Ciencia publicada | Peer-review, arxiv, replicable | Cian frío |
| **E2** | Marco formal | Tradición o teoría estructurada (Vedanta, IIT, Bardon) | Azul profundo |
| **E3** | Síntesis propia | Hipótesis y cruces del autor, especulativos por diseño | Ámbar |
| **E4** | Experiencia registrada | Bitácora personal con estructura trigger → contenido → verificación | Violeta |

**Por qué importa:** el autor opera con criterios de **falsabilidad, frutos observables y convergencia independiente**. El badge hace explícito qué tipo de afirmación está leyendo el visitante. Esto es lo que separa al Atlas de un sitio new-age genérico: **honestidad epistémica como identidad visual**. Nunca mezclar registros sin etiquetar.

---

## 6. BRIEF DE DISEÑO

**Tesis visual:** el universo como **retícula consciente**. El hero de la home ES el diagrama maestro (mapa de capas C0→C6) — interactivo, con nodos que se iluminan al hover/tap y llevan a cada capa. Ese mapa es el elemento firma del sitio: gasta ahí la audacia, mantén todo lo demás quieto y disciplinado.

**Paleta (modo oscuro único):**
- Fondo: negro-índigo profundo (no #000 puro; algo como `#0A0B14`)
- Retícula de fondo: trama geométrica sutilísima (opacidad ~3–5%), referencia a la matriz reticular — presente pero casi subliminal
- Texto: blanco cálido apagado
- **Doble acento con significado estructural:** tono **frío (cian/azul)** para todo lo científico (E1/E2-ciencia) y tono **cálido (ámbar/dorado)** para lo contemplativo (E2-tradición/E3/E4). El color codifica el registro — estructura como información
- Prohibido: verde ácido genérico, terracota-crema por defecto

**Tipografía:**
- Display: una serif con carácter (Fraunces o Cormorant) — solo títulos H1/H2 y el nombre del atlas
- Cuerpo: serif legible en pantalla (Source Serif 4) — esto es un sitio de lectura larga
- Utilidad/badges/datos: monoespaciada (JetBrains Mono) para los badges E1–E4, tags de capas, fechas y citas de arxiv

**Motion:** UNA secuencia orquestada al cargar la home (la retícula "despierta": nodos aparecen en orden C0→C6). Después, solo reveals suaves al scroll con Lenis. Nada de partículas flotando permanentemente.

**Lenguaje de interfaz:** sobrio, preciso, sin misticismo decorativo en los botones. "Explorar el modelo", "Ver cruces de esta capa", "Fuente original".

---

## 7. FASES DE CONSTRUCCIÓN

### FASE 1 — Scaffolding + Mockup (español)
1. Iniciar proyecto Astro con la estructura de rutas de la sección 3 (solo `/es`, sin `/en` aún, pero con la arquitectura i18n ya preparada para agregarlo)
2. Sistema de diseño completo (tokens CSS, tipografías, badges E1–E4)
3. Home con el **diagrama maestro interactivo** (usar `diagrama-1-modelo-universo.mermaid` como referencia estructural; puede implementarse como SVG propio si da más control que Mermaid para la interactividad)
4. Las 7 páginas de capa con contenido REAL extraído de `02-ARQUITECTURA-CONOCIMIENTO.md` (versión resumida, 2–3 párrafos por capa)
5. 3 fichas de ejemplo: 1 cruce, 1 paper, 1 bitácora (contenido real del doc 02)
6. Página /epistemologia completa
7. GitHub Actions workflow para deploy
8. **DETENERSE. Mostrar resultado. Esperar aprobación.**

### FASE 2 — Población de contenido
- Expandir las 7 capas a su versión completa desde el doc 02
- Crear todos los cruces listados en el doc 02 (sección "Tabla de convergencias")
- Crear fichas de papers desde la sección "Biblioteca inicial" del doc 02
- Renderizar los diagramas 2 y 3 en /epistemologia y /cruces

### FASE 3 — Grafo y navegación
- Backlinks automáticos: cada capa lista sus cruces/papers/bitácoras conectados
- Navegación entre capas (anterior/siguiente en el modelo)
- Buscador simple client-side (pagefind o similar)

### FASE 4 — Inglés
- Espejo completo en `/en`
- Selector de idioma persistente
- Términos sánscritos y nombres propios NO se traducen
- El glosario se vuelve bilingüe por diseño

---

## 8. CRITERIOS DE CALIDAD (no negociables)

1. **Markdown como única fuente de verdad** — el autor nunca debe editar HTML para publicar
2. Lighthouse mobile ≥ 90 en performance y accesibilidad
3. Cada página funciona sin JavaScript (el JS mejora, no habilita)
4. Los badges epistémicos aparecen en TODA nota, sin excepción
5. Cero contenido inventado: si el doc 02 no lo contiene, dejar TODO explícito con `<!-- TODO: pendiente de autor -->`
6. Commits atómicos con mensajes descriptivos por fase
