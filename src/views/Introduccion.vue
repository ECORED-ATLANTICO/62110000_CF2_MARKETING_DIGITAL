<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/1-intro.png", alt="")
      .col-lg-8
        p El componente formativo Métricas del #[em marketing] digital, desarrolla la capacidad de establecer métricas coherentes con el plan de #[em marketing] digital, integrando la analítica web, los indicadores de rendimiento y la gestión presupuestal como ejes para la toma de decisiones estratégicas. En un entorno digital altamente competitivo, medir deja de ser una acción operativa y se convierte en un proceso analítico orientado a la optimización y la rentabilidad.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Su relevancia radica en que permite transformar los datos en información útil para evaluar el desempeño de las estrategias implementadas en redes sociales y plataformas digitales. Comprender las métricas, interpretar indicadores clave de rendimiento (KPI) y analizar su aplicabilidad facilita identificar oportunidades de mejora, optimizar recursos y maximizar el retorno de la inversión en campañas digitales.
    
    p.mb-4.mb-lg-5 El desarrollo temático se abordará de manera progresiva, iniciando con la analítica web y su metodología, continuando con el estudio de las métricas y su aplicabilidad. Posteriormente, se profundizará en los indicadores clave de rendimiento, su estructura, cálculo e interpretación, para finalmente integrar el análisis de KPI y presupuesto como herramientas fundamentales para la evaluación estratégica y la sostenibilidad de las acciones de #[em marketing] digital, haciendo uso eficiente de la IA.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
