// Strings de interfaz. Español es la fuente de verdad.
// Fase 4: agregar la clave 'en' y el selector de idioma.
export const idiomas = ['es'] as const;
export type Idioma = (typeof idiomas)[number];
export const idiomaPorDefecto: Idioma = 'es';

export const ui = {
  es: {
    'sitio.nombre': 'Atlas de la Realidad',
    'sitio.descripcion':
      'Un atlas navegable de la arquitectura del universo: un modelo por capas donde la consciencia es fundamental, cruzado con física, tradiciones contemplativas y experiencia registrada.',
    'nav.mapa': 'El Mapa',
    'nav.modelo': 'Modelo',
    'nav.cruces': 'Cruces',
    'nav.papers': 'Papers',
    'nav.bitacora': 'Bitácora',
    'nav.epistemologia': 'Epistemología',
    'nav.glosario': 'Glosario',
    'nav.acerca': 'Acerca',
    'accion.explorar_modelo': 'Explorar el modelo',
    'accion.ver_cruces_capa': 'Ver cruces de esta capa',
    'accion.fuente_original': 'Fuente original',
    'registro.E1': 'Ciencia publicada',
    'registro.E2': 'Marco formal',
    'registro.E3': 'Síntesis propia',
    'registro.E4': 'Experiencia registrada',
  },
} as const;

export function t(idioma: Idioma, clave: keyof (typeof ui)['es']): string {
  return ui[idioma][clave];
}
