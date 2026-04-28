<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Métricas

    .fullwidth-bg.fullwidth-bg--1
    img(data-aos="fade-up")(src="@/assets/curso/tema2/1.png", alt="").z-2
    
    .row.justify-content-center.z-2.mb-3
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 En el entorno del #[em marketing] digital, las métricas constituyen los indicadores básicos que permiten cuantificar el desempeño de las acciones ejecutadas en redes sociales. Sin medición no existe control, y sin control no es posible optimizar estrategias. Antes de analizar su aplicación práctica, es necesario comprender su concepto, sus clases y su utilidad en la toma de decisiones.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Concepto

    p.mb-4.mb-lg-5 Las métricas son datos cuantificables que permiten medir el comportamiento de los usuarios frente a los contenidos digitales y evaluar el rendimiento de una estrategia en redes sociales. Representan valores numéricos que reflejan resultados específicos, como número de visualizaciones, clics, comentarios o compartidos.

    .row.justify-content-center.align-items-center.z-2
      .col-lg-6.mb-4.mb-lg-0
        figure
          img.mb-4.mb-lg-0(data-aos="fade-right", src="@/assets/curso/tema2/2.png", alt="")
      .col-lg-6
        .p-4.rounded-4.bg-primario-p5.mb-4
          p En #[em marketing] digital, las métricas permiten responder preguntas clave como:
          ul.lista-ul--color.ms-3.mb-0
            li.mb-0.d-flex
              i.fas.fa-circle.fa-2xs.mt-2
              | ¿Cuántas personas vieron el contenido?
            li.mb-0.d-flex
              i.fas.fa-circle.fa-2xs.mt-2
              | ¿Cuántas interactuaron?
            li.mb-0.d-flex
              i.fas.fa-circle.fa-2xs.mt-2
              | ¿Cuántas realizaron la acción esperada?
          p.mb-0 Es importante señalar que una métrica por sí sola no necesariamente indica éxito o fracaso; su verdadero valor surge cuando se analiza en relación con un objetivo previamente definido.
        
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Clases

    .fullwidth-bg.fullwidth-bg--1
    img(data-aos="fade-up")(src="@/assets/curso/tema2/1.png", alt="").z-2
    
    .row.justify-content-center.z-2.mb-3
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 Las métricas en redes sociales no cumplen todas la misma función dentro de una estrategia digital. Cada una responde a un objetivo específico y aporta información distinta sobre el comportamiento del usuario. Por ello, es necesario clasificarlas según su finalidad estratégica, lo que facilita su correcta interpretación y evita confusiones en el proceso de análisis. A continuación, se presenta una clasificación general de las métricas más utilizadas en entornos digitales.

    .row.justify-content-center.mb-4.mb-lg-5.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Clasificación de métricas en redes sociales
        .tabla-a.color-secundario
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #F1B6FC")
                th Tipo de métrica
                th Descripción
                th Ejemplo
            tbody
              tr(style="background-color: #FFFFFF")
                td Métricas de alcance.
                td Miden el número de personas que visualizan el contenido o son impactadas por una publicación.
                td Impresiones, alcance total.
              tr(style="background-color: #F6F6F6")
                td Métricas de interacción.
                td Evalúan el nivel de participación del usuario frente al contenido publicado.
                td <em>Likes</em>, comentarios, compartidos.
              tr
                td Métricas de tráfico.
                td Indican el número de usuarios que hacen clic y se dirigen a un sitio web o #[em landing page].
                td Clics en enlace, visitas web.
              tr(style="background-color: #F6F6F6")
                td Métricas de conversión.
                td Miden el porcentaje de usuarios que realizan una acción específica previamente definida.
                td Registro, compra, descarga.
              tr
                td Métricas de fidelización.
                td Evalúan la permanencia y recurrencia del usuario en la comunidad digital.
                td Seguidores recurrentes, tasa de retención.

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Tipos de métricas en redes sociales
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/4-mob.png", alt="La figura 1 nos muestra los Tipos de métricas en redes sociales.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/4.png", alt="La figura 1 nos muestra los Tipos de métricas en redes sociales.")
        figcaption Nota. SENA, (2026).

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Aplicabilidad
    
    .p-4.rounded-4.bg-secundario-s5.mb-5
      p.mb-0.px-lg-5 Las métricas permiten evaluar el desempeño real de las estrategias digitales y respaldar decisiones basadas en datos. Su aplicabilidad depende del objetivo estratégico planteado. Por ejemplo:

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-md-6.col-lg-5.col-xl-4.mb-5.mb-md-4
        .icon-tarjeta.icon-tarjeta--imagen-centrada.color-primario.p-2.ps-4.ms-5.h-100
          .icon-tarjeta__imagen 
            img.width-100(src="@/assets/curso/tema2/5.png", alt="")
          p.mb-0.ps-4.icon-tarjeta__text Si el objetivo es visibilidad, se priorizan métricas de alcance.
      .col-md-6.col-lg-5.col-xl-4.mb-5.mb-md-4
        .icon-tarjeta.icon-tarjeta--imagen-centrada.color-primario.p-2.ps-4.ms-5.h-100
          .icon-tarjeta__imagen 
            img.width-100(src="@/assets/curso/tema2/6.png", alt="")
          p.mb-0.ps-4.icon-tarjeta__text Si el objetivo es #[em engagement], se analizan métricas de interacción.
      .col-md-6.col-lg-5.col-xl-4.mb-5.mb-md-4
        .icon-tarjeta.icon-tarjeta--imagen-centrada.color-primario.p-2.ps-4.ms-5.h-100
          .icon-tarjeta__imagen 
            img.width-100(src="@/assets/curso/tema2/7.png", alt="")
          p.mb-0.ps-4.icon-tarjeta__text Si el objetivo es ventas, se enfocan métricas de conversión.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/8.png", alt="")
      .col-lg-8
        p La empresa Coca-Cola puede lanzar una campaña enfocada en recordación de marca. En este caso, priorizará métricas de alcance e impresiones. En cambio, una empresa como Amazon centrará su análisis en métricas de conversión, ya que su objetivo principal es la venta directa.
        .py-3.px-4.bg-terciario-t20.rounded-4.mb-3
          p.mb-0 En redes sociales, muchas marcas cometen el error de enfocarse únicamente en likes, sin analizar si estos generan tráfico o conversión. Por ello, la aplicabilidad correcta de las métricas implica alinearlas con los objetivos estratégicos.
        p.mb-0 En entornos digitales caracterizados por grandes volúmenes de información y cambios constantes en el comportamiento del usuario, el análisis manual de métricas puede resultar limitado y poco oportuno. La velocidad con la que se generan datos en redes sociales exige herramientas que permitan procesar información en tiempo real y detectar patrones que no siempre son evidentes a simple vista.

    .p-4.bg-primario-p5.rounded-4.mb-4
      p En este contexto, la inteligencia artificial se integra como un soporte estratégico dentro del proceso analítico, no para reemplazar el criterio profesional, sino para potenciarlo mediante automatización, predicción y análisis avanzado de datos.
      p.mb-0 Las herramientas con inteligencia artificial permiten:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/9.png", alt="")
      .col-lg-7
        .tarjeta.bg-primario-p10.p-4
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center.m-2.m-xl-4
              .col-sm-10.col-xl-8
                p.mb-4.mb-sm-0 Detectar automáticamente qué tipo de métrica presenta mejor desempeño.
              .col-sm-2
                figure
                  img.w-85(data-aos="fade-up", src="@/assets/curso/tema2/10.png", alt="")
            .row.justify-content-center.align-items-center.m-2.m-xl-4
              .col-sm-10.col-xl-8
                p.mb-4.mb-sm-0 Identificar patrones de interacción según horario o formato.
              .col-sm-2
                figure
                  img.w-85(data-aos="fade-up", src="@/assets/curso/tema2/11.png", alt="")
            .row.justify-content-center.align-items-center.m-2.m-xl-4
              .col-sm-10.col-xl-8
                p.mb-4.mb-sm-0 Predecir probabilidad de conversión según comportamiento histórico.
              .col-sm-2
                figure
                  img.w-85(data-aos="fade-up", src="@/assets/curso/tema2/12.png", alt="")
            .row.justify-content-center.align-items-center.m-2.m-xl-4
              .col-sm-10.col-xl-8
                p.mb-4.mb-sm-0 Generar reportes automáticos comparativos por periodo.
              .col-sm-2
                figure
                  img.w-85(data-aos="fade-up", src="@/assets/curso/tema2/13.png", alt="")

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        .p-4.bg-acento-contenido-a5.rounded-4.mb-4
          p.mb-0 La correcta interpretación de métricas, apoyada en tecnología, fortalece la gestión estratégica del contenido digital y evita decisiones basadas en percepción subjetiva.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-5.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/14.png", alt="")
      .col-lg-7.bg-audio.rounded-4
        .row.align-items-center
          .col-sm-4
            figure.pt-3
              img.w-155(src="@/assets/curso/common/micro.png", alt="alt")
          .col-sm-8.col-lg-8
            h5.text-white ¿Sabías qué?
            p.text-white Lo invitamos a escuchar el siguiente pódcast:
            TarjetaAudio.color-terciario.mb-3(
              texto="<em>E-marketing</em>: estrategias y tácticas efectivas"
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )

    .p-4.rounded-4.bg-terciario-t20
      .row.justify-content-center.align-items-center
        .col-xl-1.d-none.d-xl-block
          figure
            img(data-aos="fade-down-left", src="@/assets/curso/tema2/15.png", alt="")
        .col-lg-9
          p.mb-4.mb-lg-0 Lo invitamos a consultar el siguiente video práctico que detalla las métricas clave (como alcance, interacción, CTR y conversiones) y muestra su aplicabilidad para medir el desempeño en redes sociales: 
        .col-12.col-lg-3.col-xl-2
          a.boton.color-acento-botones.texto-oscuro(href="https://www.youtube.com/watch?v=mU-LiO2vQKg", target="_blank")
            span Ver video
            i.fas.fa-play-circle

</template>

<script>
export default {
  name: 'Tema2',
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
