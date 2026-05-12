export default {
  global: {
    Name: 'Métricas del <em>marketing</em> digital',
    Description:
      'El componente formativo desarrolla competencias para establecer métricas coherentes con el plan de <em>marketing</em> digital. Aborda analítica web, métricas, indicadores clave de rendimiento (KPI) y presupuesto, fortaleciendo la capacidad de análisis, cálculo e interpretación de datos para la toma de decisiones estratégicas orientadas a resultados medibles y rentabilidad digital, haciendo uso de la IA.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Web <em>analytics</em> (analítica web)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Metodología ',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Métricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clases ',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Aplicabilidad',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Indicador clave de rendimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estructura',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Interpretación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Aplicabilidad',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Cálculo',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'KPI (<em>Key Performance Indicator</em>)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Aplicabilidad',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Presupuesto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto ',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Aplicabilidad ',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA2_63110194_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Alcance',
      significado:
        'Número total de usuarios únicos que visualizan un contenido digital en un periodo determinado.',
    },
    {
      termino: 'Analítica web',
      significado:
        'Proceso de recopilación, medición y análisis de datos generados por los usuarios en entornos digitales para apoyar la toma de decisiones.',
    },
    {
      termino: 'Atribución',
      significado:
        'Modelo que permite identificar qué canal o acción contribuyó a una conversión dentro del proceso de compra digital.',
    },
    {
      termino: 'Audiencia',
      significado:
        'Conjunto de usuarios que interactúan o consumen contenido en una plataforma digital.',
    },
    {
      termino: '<em>Bounce rate</em> (Tasa de rebote)',
      significado:
        'Porcentaje de usuarios que abandonan un sitio web después de visualizar una sola página.',
    },
    {
      termino: 'CPC (Costo por clic)',
      significado:
        'Valor que se paga por cada clic generado en un anuncio digital.',
    },
    {
      termino: 'CPM (Costo por mil impresiones)',
      significado:
        'Costo que se paga por cada mil visualizaciones de un anuncio publicitario.',
    },
    {
      termino: 'Conversión',
      significado:
        'Acción específica que realiza el usuario y que cumple un objetivo definido, como compra o registro.',
    },
    {
      termino: 'CTR (<em>Click Through Rate</em>)',
      significado:
        'Porcentaje de usuarios que hacen clic en un enlace respecto al número de impresiones obtenidas.',
    },
    {
      termino: '<em>Dashboard</em>',
      significado:
        'Panel visual que presenta métricas e indicadores de forma gráfica para facilitar el análisis.',
    },
    {
      termino: 'Datos',
      significado:
        'Información cuantitativa o cualitativa recolectada de la interacción de los usuarios en plataformas digitales.',
    },
    {
      termino: 'Embudo de conversión',
      significado:
        'Representación del proceso que sigue un usuario desde el primer contacto hasta la conversión final.',
    },
    {
      termino: '<em>Engagement</em>',
      significado:
        'Nivel de interacción que los usuarios tienen con un contenido digital.',
    },
    {
      termino: 'Impresiones',
      significado:
        'Número total de veces que un contenido o anuncio es mostrado a los usuarios.',
    },
    {
      termino: 'Indicador',
      significado:
        'Variable cuantificable que permite medir el desempeño de una acción o estrategia digital.',
    },
    {
      termino: 'KPI (Indicador clave de rendimiento)',
      significado:
        'Métrica estratégica que evalúa el cumplimiento de objetivos específicos dentro del plan de <em>marketing</em> digital.',
    },
    {
      termino: 'Métrica',
      significado:
        'Dato cuantificable que permite medir el comportamiento y desempeño en entornos digitales.',
    },
    {
      termino: 'Optimización',
      significado:
        'Proceso de mejora continua basado en el análisis de métricas para incrementar resultados.',
    },
    {
      termino: 'Presupuesto digital',
      significado:
        'Recursos financieros asignados para ejecutar estrategias y campañas de <em>marketing</em> digital.',
    },
    {
      termino: 'ROI (Retorno de inversión)',
      significado:
        'Indicador que mide la rentabilidad obtenida frente a la inversión realizada.',
    },
    {
      termino: 'ROAS (Retorno sobre gasto publicitario)',
      significado:
        'Métrica que evalúa los ingresos generados por cada unidad monetaria invertida en publicidad.',
    },
    {
      termino: 'Segmentación',
      significado:
        'Proceso de dividir la audiencia en grupos con características similares para orientar estrategias específicas.',
    },
    {
      termino: 'Sesión',
      significado:
        'Periodo de interacción de un usuario dentro de un sitio web o plataforma digital.',
    },
    {
      termino: 'Tasa de conversión',
      significado:
        'Porcentaje de usuarios que realizan una acción deseada respecto al total de visitantes.',
    },
    {
      termino: 'Tráfico web',
      significado:
        'Cantidad de visitas que recibe un sitio web en un periodo determinado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cardona, A. (2023). <em>Marketing digital: Estrategias, métricas y contenidos para redes sociales</em>. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Cuervo-Sánchez, C. A. (2025). <em>Las redes sociales y los influencers como parte de la estrategia de ventas: Un análisis bibliométrico.</em> aDResearch ESIC International Journal of Communication Research, <em>34</em>, e297.',
      link:
        'https://revistasinvestigacion.esic.edu/adresearch/index.php/adresearch/article/view/297/660',
    },
    {
      referencia:
        'Gutiérrez, M., & López, J. (2022). <em>Estrategias de contenido digital: técnicas para atraer, convertir y fidelizar audiencias</em>. Ediciones Deusto.',
      link: '',
    },
    {
      referencia:
        'Hernández, A., & Rodríguez, C. (2021). <em>Community management y social media: generación de contenido y métricas digitales</em>. Ediciones Pirámide.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). <em>Dirección de marketing</em> (15.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'López Lazcano, M. (2025). <em>La influencia de la publicidad en redes sociodigitales sobre los hábitos de consumo.</em> Huella de la Palabra, 18(18), 38-65.',
      link:
        'https://revistas.lasallep.edu.mx/index.php/huella/article/view/649/935',
    },
    {
      referencia:
        'Morales, L. (2024). <em>Marketing de contenidos en redes sociales: diseño, producción y análisis de impacto</em>. Editorial Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Pérez, D., & Ramírez, S. (2022). <em>Analítica digital y métricas para redes sociales</em>. Ediciones McGraw Hill.',
      link: '',
    },
    {
      referencia:
        'Ruiz, P. (2023). <em>Publicidad digital y normativa legal en entornos digitales</em>. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Sánchez, E., & Méndez, F. (2021). <em>SEO, SEM y posicionamiento de contenido para marketing digital</em>. Ediciones Paraninfo.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
