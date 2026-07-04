import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

// Registro epistémico E1–E4: feature central del atlas.
// Toda nota lo declara; los badges se renderizan desde este dato.
const registroEnum = z.enum(['E1', 'E2', 'E3', 'E4', 'E2/E3', 'E2 con disputas']);

// Capas del modelo C0–C6: toda nota declara a qué capas se conecta.
const capaId = z.enum(['C0', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6']);

const capas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/capas' }),
  schema: z.object({
    id: capaId,
    titulo: z.string(),
    subtitulo: z.string(),
    epiteto: z.string(), // línea sánscrita/conceptual bajo el título (ej. "Brahman · Cit")
    color: z.string(), // nombre del token CSS del sistema, ej. "--capa-c0"
    orden: z.number(),
  }),
});

const cruces = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cruces' }),
  schema: z.object({
    titulo: z.string(),
    tradicion: z.string(),
    ciencia: z.string(),
    capas: z.array(capaId),
    registro: registroEnum,
    estado: z.enum(['abierto', 'convergente', 'tensión']),
    fecha: z.coerce.date(),
  }),
});

const papers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/papers' }),
  schema: z.object({
    titulo: z.string(),
    autores: z.string(),
    fuente: z.string(),
    url: z.string().url(),
    capas: z.array(capaId),
    registro: registroEnum,
    key_insight: z.string(),
    lectura: z.enum(['completo', 'abstract/secundarias']), // honestidad de lectura
    fecha_lectura: z.coerce.date(),
  }),
});

const bitacora = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bitacora' }),
  schema: z.object({
    titulo: z.string(),
    capas: z.array(capaId),
    registro: registroEnum,
    fecha: z.coerce.date(),
    semilla: z.enum(['conversación', 'lectura', 'meditación', 'sincronicidad', 'síntesis de lecturas', 'lectura comparada']),
  }),
});

const glosario = defineCollection({
  loader: file('./src/data/glosario.yaml'),
  schema: z.object({
    id: z.string(),
    termino: z.string(),
    origen: z.string(),
    en: z.string(),
    nota: z.string().optional(),
  }),
});

export const collections = { capas, cruces, papers, bitacora, glosario };
