<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/sintesis.png", alt="")
      .col-lg-8
        p.mb-0 El componente formativo Métricas del #[em marketing] digital integra la analítica web, las métricas digitales y los indicadores clave de rendimiento como bases para evaluar el desempeño de las estrategias #[em online]. Desarrolla la interpretación, estructura y cálculo de KPI, así como su aplicabilidad en redes sociales y entornos digitales. Finalmente, articula el análisis de resultados con el presupuesto, consolidando un enfoque estratégico orientado a la medición, optimización y rentabilidad del #[em marketing] digital. 
    .row.justify-content-center
      .col-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
