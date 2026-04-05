export interface SEOEntry {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  projectLogo?: string;
}

export const seoData: Record<string, SEOEntry> = {
  // Main pages
  "/": {
    title: "CIDIT — Innovación Tecnológica que Transforma Paraguay",
    description:
      "Centro de innovación en ingeniería y tecnología. Cursos especializados, proyectos de investigación en IA y desarrollo de talento en Paraguay.",
    ogImage: "/assets/img/og/og-home.png",
  },
  "/nosotros": {
    title: "Sobre CIDIT — Centro de Innovación en Ingeniería",
    description:
      "Desde 2014 articulamos academia, empresa y gobierno para convertir investigación en soluciones reales. Conocé nuestra misión, equipo y valores.",
    ogImage: "/assets/img/og/og-nosotros.png",
  },
  "/proyectos": {
    title: "Proyectos de Investigación — CIDIT",
    description:
      "Proyectos en inteligencia artificial, inclusión social e innovación. Desde predicción farmacológica hasta digitalización del guaraní.",
    ogImage: "/assets/img/og/og-proyectos.png",
  },
  "/cursos": {
    title: "Cursos de Ingeniería y Construcción 2026 — CIDIT",
    description:
      "Calendario 2026 de cursos especializados: contratos FIDIC, hormigón, obras viales, puentes y más. Formación profesional con expertos.",
    ogImage: "/assets/img/og/og-cursos.png",
  },
  "/contacto": {
    title: "Contacto — CIDIT",
    description:
      "Contactanos para consultas sobre cursos, proyectos de investigación o alianzas. Estamos en Paraguay listos para colaborar.",
    ogImage: "/assets/img/og/og-contacto.png",
  },
  "/publicaciones": {
    title: "Publicaciones y Recursos — CIDIT",
    description:
      "Accedé al repositorio de documentos del CIDIT: boletines, informes, guías y materiales descargables sobre ingeniería e innovación.",
    ogImage: "/assets/img/og/og-publicaciones.png",
  },

  // Project pages
  bootcamp: {
    title: "Bootcamp Desarrollo Joven — CIDIT",
    description:
      "Programa de formación tecnológica para jóvenes. Más de 1.000 participantes en 5 departamentos impulsando empleabilidad e inclusión digital.",
    ogType: "article",
  },
  cofar: {
    title: "CoFar — Predicción Inteligente de Riesgos Farmacológicos",
    description:
      "Modelos de machine learning para predecir efectos secundarios de terapias combinadas. Investigación en IA aplicada a seguridad farmacológica.",
    ogType: "article",
    projectLogo: "/projects/img/cofar/logo.svg",
  },
  covida: {
    title: "CoVIDA — Reposicionamiento de Fármacos con IA",
    description:
      "Colaboración internacional que usa inteligencia artificial para identificar medicamentos existentes contra enfermedades infecciosas como COVID-19.",
    ogType: "article",
  },
  proteia: {
    title: "Proteia — IA para Identificación de Complejos Proteicos",
    description:
      "Aplicamos inteligencia artificial para predecir complejos proteicos en organismos nuevos. Un puente entre la biología y la tecnología.",
    ogType: "article",
    projectLogo: "/projects/img/proteia/logo.svg",
  },
  guarania: {
    title: "GuaranIA — Integrando el Guaraní en el Mundo Digital",
    description:
      "Herramientas de IA para llevar el idioma guaraní al ámbito digital, mejorando el acceso a servicios para comunidades guaraní-hablantes.",
    ogType: "article",
    projectLogo: "/projects/img/guarania/logo.svg",
  },

  // Course pages
  "gestion-de-contratos-de-obra-publica-con-experiencia-fidici": {
    title: "Gestión de Contratos FIDIC — Curso CIDIT 2026",
    description:
      "Curso de 12 horas sobre gestión de contratos de obra pública con experiencia FIDIC. Formación práctica para profesionales de infraestructura.",
  },
  "curso-costo-4w-2026": {
    title: "Curso Costo 4W 2026 — CIDIT",
    description:
      "Curso de 24 horas sobre estimación y control de costos en proyectos de ingeniería. Metodología 4W aplicada a obras civiles.",
  },
  "proceso-de-estabilizacion-de-subrasantes-y-bases-de-camino": {
    title: "Estabilización de Subrasantes y Bases — Curso CIDIT 2026",
    description:
      "Curso de 42 horas sobre procesos de estabilización de subrasantes y bases de camino. Técnicas avanzadas para ingeniería vial.",
  },
  "tecnologias-de-hormigon-aplicada": {
    title: "Tecnología de Hormigón Aplicada — Curso CIDIT 2026",
    description:
      "Curso intensivo de 105 horas sobre tecnologías de hormigón. Formación técnica especializada para ingenieros y constructores.",
  },
  "planificacion-y-administracion-de-la-red-vial-concesiones-crema-gmans": {
    title: "Planificación de Red Vial y Concesiones — Curso CIDIT 2026",
    description:
      "Curso de 24 horas sobre planificación y administración de la red vial, concesiones CREMA y GMANS para profesionales del sector.",
  },
  "inspeccion-evaluacion-y-gerenciamiento-de-puentes": {
    title: "Inspección y Gerenciamiento de Puentes — Curso CIDIT 2026",
    description:
      "Curso de 24 horas sobre inspección, evaluación y gerenciamiento de puentes. Formación especializada en infraestructura vial.",
  },
  "control-de-obras-viales": {
    title: "Control de Obras Viales — Curso CIDIT 2026",
    description:
      "Curso de 18 horas sobre control y supervisión de obras viales. Herramientas prácticas para gestión de proyectos de infraestructura.",
  },
  "perfil-4w-2026": {
    title: "Perfil 4W 2026 — Curso CIDIT",
    description:
      "Curso de 24 horas sobre perfiles de proyectos con metodología 4W. Planificación y formulación de proyectos de ingeniería civil.",
  },
  "mantenimiento-de-hospitales": {
    title: "Mantenimiento de Hospitales — Curso CIDIT 2026",
    description:
      "Curso de 10 horas sobre mantenimiento integral de hospitales. Gestión técnica de infraestructura hospitalaria para profesionales.",
  },
};

/**
 * Look up SEO data by route path or slug.
 * Falls back to a generic CIDIT entry if no match is found.
 */
export function getSEO(key: string): SEOEntry {
  return (
    seoData[key] ?? {
      title: "CIDIT — Centro de Innovación en Ingeniería y Tecnología",
      description:
        "Centro de innovación en ingeniería y tecnología en Paraguay. Cursos, proyectos de investigación y desarrollo de talento.",
      ogImage: "/assets/img/og/og-default.png",
    }
  );
}
