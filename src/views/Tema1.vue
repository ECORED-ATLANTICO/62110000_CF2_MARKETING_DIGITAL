<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 #[em Web Analytics] (analítica Web)

    .fullwidth-bg.fullwidth-bg--1
    img(data-aos="fade-up")(src="@/assets/curso/tema1/1.png", alt="").z-2
    
    .row.justify-content-center.z-2.mb-3
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 La analítica web constituye el punto de partida para comprender el comportamiento del usuario en entornos digitales. En el contexto de redes sociales, permite transformar datos dispersos en información estratégica para evaluar el desempeño del contenido. Antes de profundizar en sus elementos técnicos, es necesario comprender su concepto y la metodología que orienta su aplicación.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema1/2.png", alt="")
      .col-lg-8
        p La analítica web es el proceso sistemático de recopilación, medición, análisis e interpretación de datos generados por los usuarios en entornos digitales, con el propósito de evaluar el desempeño de las estrategias implementadas y optimizar la toma de decisiones. En el contexto de redes sociales, la analítica permite comprender cómo interactúan los usuarios con los contenidos publicados, qué formatos generan mayor impacto y cuáles contribuyen al logro de los objetivos digitales.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Más que acumular cifras, la analítica web transforma datos en información estratégica. Permite identificar patrones de comportamiento, tendencias de consumo digital y niveles de interacción que orientan ajustes en contenido, segmentación y frecuencia de publicación. En plataformas como Instagram, TikTok, Facebook y LinkedIn, la analítica se convierte en un insumo fundamental para medir resultados reales.
    
    .p-4.rounded-4.bg-primario-p5
      p.mb-0 Desde una perspectiva estratégica, la analítica web conecta directamente con el plan de #[em marketing] digital, ya que traduce los objetivos planteados (alcance, #[em engagement], conversión o fidelización) en variables cuantificables. De esta manera, el análisis de datos deja de ser operativo y se convierte en un proceso de evaluación estratégica orientado a resultados medibles.

    
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Metodología

    p.mb-4.mb-lg-5 La metodología de la analítica web en redes sociales sigue un proceso estructurado que garantiza coherencia entre objetivos y medición. No se trata únicamente de revisar estadísticas, sino de aplicar un ciclo analítico que permita interpretar y actuar sobre los resultados obtenidos. A continuación, se presenta la secuencia metodológica recomendada:

    .row.justify-content-center.mb-4.mb-lg-5.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Metodología de la analítica web en redes sociales
        .tabla-a.color-secundario
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #F1B6FC")
                th Componente
                th(colspan='2') Descripción
            tbody
              tr(style="background-color: #FFFFFF")
                td Definición de objetivos.
                td(colspan='2') Se establecen metas claras y medibles alineadas al plan de #[em marketing] digital, determinando si la estrategia busca alcance, interacción, generación de #[em leads] o conversión.
              tr(style="background-color: #F6F6F6")
                td Selección de métricas.
                td(colspan='2') Se identifican las métricas pertinentes según el objetivo planteado, asegurando coherencia entre lo que se desea lograr y lo que realmente se va a medir.
              tr
                td Recolección de datos.
                td(colspan='2') Se obtienen datos cuantitativos y cualitativos desde las herramientas analíticas de cada red social, en periodos definidos previamente.
              tr(style="background-color: #F6F6F6")
                td Análisis e interpretación.
                td(colspan='2') Se comparan los resultados con metas establecidas, periodos anteriores y comportamiento del sector, identificando tendencias y oportunidades de mejora.
              tr
                td Toma de decisiones.
                td(colspan='2') Se realizan ajustes estratégicos en contenido, segmentación, formatos o inversión publicitaria con base en la evidencia obtenida del análisis.

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema1/3.png", alt="")
      .col-lg-8
        p Este proceso debe aplicarse de manera continua. La medición aislada no genera valor; lo que produce impacto es la interpretación sistemática y la capacidad de ajuste estratégico.
        .cajon.color-acento-contenido.py-3.px-4
          p.mb-0 La empresa Rappi analiza semanalmente el comportamiento de sus publicaciones en Instagram. Si detecta que los contenidos en formato reel generan mayor retención y comentarios que las imágenes estáticas, ajusta su calendario editorial priorizando video corto. Esta decisión no se basa en percepción, sino en análisis de datos concretos.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p De igual forma, una empresa como Nike monitorea el rendimiento de campañas digitales para identificar qué tipo de mensaje genera mayor conversión en determinados segmentos. La analítica permite redistribuir inversión hacia los anuncios con mejor desempeño.
        p.mb-4.mb-lg-0 En lo que respecta al uso de inteligencia artificial en la analítica digital, su incorporación responde a la necesidad de optimizar la interpretación de grandes volúmenes de datos y agilizar la toma de decisiones estratégicas. La IA permite complementar el análisis humano mediante procesos automatizados que identifican patrones, tendencias y oportunidades de mejora en tiempo real.
        
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/4.png", alt="")
  
    .row.justify-content-center.mb-4.mb-lg-5
      .col-lg-10.col-xl-8
        .py-3.px-4.rounded-4.bg-secundario-s5.z-2
          p.mb-0.text-center El uso de herramientas con inteligencia artificial fortalece la metodología analítica mediante:

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10.col-xl-8
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/5-mob.png", alt="Identificación automática de patrones de comportamiento. Predicción de horarios óptimos de publicación. Alertas sobre disminución significativa en indicadores clave. Recomendaciones de optimización de contenido según rendimiento histórico.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema1/5.png", alt="Identificación automática de patrones de comportamiento. Predicción de horarios óptimos de publicación. Alertas sobre disminución significativa en indicadores clave. Recomendaciones de optimización de contenido según rendimiento histórico.")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-5.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema1/6.png", alt="")
      .col-lg-7.bg-audio.rounded-4
        .row.align-items-center
          .col-sm-4
            figure.pt-3
              img.w-155(src="@/assets/curso/common/micro.png", alt="alt")
          .col-sm-8.col-lg-8
            h5.text-white ¿Sabías qué?
            p.text-white Lo invitamos a escuchar el siguiente pódcast:
            TarjetaAudio.color-terciario.mb-3(
              texto="Analítica web: concepto, herramientas y metodología."
              :audio="require('@/assets/podcast/P1_analitica_web-concepto.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )

    .p-4.rounded-4.bg-terciario-t20
      .row.justify-content-center.align-items-center
        .col-xl-1.d-none.d-xl-block
          figure
            img(data-aos="fade-down-left", src="@/assets/curso/tema1/7.png", alt="")
        .col-lg-9
          p.mb-4.mb-lg-0 Lo invitamos a revisar el siguiente video técnico que explica de manera clara qué es la analítica web, su propósito y cómo se utiliza para medir y optimizar el comportamiento de usuarios en entornos digitales, lo cual fundamenta el concepto y la metodología del tema:
        .col-12.col-lg-3.col-xl-2
          a.boton.color-acento-botones.texto-oscuro(href="https://www.youtube.com/watch?v=DutHRrt0wLM", target="_blank")
            span Ver video
            i.fas.fa-play-circle


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
