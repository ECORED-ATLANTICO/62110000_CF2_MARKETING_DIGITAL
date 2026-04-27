<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Indicador clave de rendimiento

    .fullwidth-bg.fullwidth-bg--1
    img(data-aos="fade-up")(src="@/assets/curso/tema3/1.png", alt="").z-2
    
    .row.justify-content-center.z-2.mb-3
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 En el análisis del #[em marketing] digital no basta con recopilar métricas aisladas; es necesario convertir esos datos en indicadores que permitan evaluar el cumplimiento de objetivos estratégicos. Los indicadores clave de rendimiento facilitan esta conexión entre medición y resultado, orientando la toma de decisiones basada en evidencia. A continuación, se desarrollan su concepto, estructura, interpretación, aplicabilidad y forma de cálculo.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema3/2.png", alt="")
      .col-lg-7
        p Un indicador clave de rendimiento es una medida cuantificable que permite evaluar el grado de cumplimiento de un objetivo específico dentro de una estrategia digital. Se construye a partir de una o varias métricas y está directamente alineado con metas previamente definidas.
        .p-4.rounded-4.bg-secundario-s5
          p.mb-0 A diferencia de una métrica simple (por ejemplo, número de #[em likes]), un indicador permite evaluar desempeño en función de un resultado esperado (por ejemplo, tasa de interacción). Su propósito no es solo medir actividad, sino valorar efectividad.
          
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Estructura

    .fullwidth-bg.fullwidth-bg--1
    img(data-aos="fade-up")(src="@/assets/curso/tema3/3.png", alt="").z-2
    
    .row.justify-content-center.z-2.mb-3
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 Antes de calcular o interpretar un indicador clave de rendimiento, es fundamental comprender que su utilidad depende de una estructura clara y coherente. Un indicador mal definido puede generar interpretaciones erróneas y decisiones poco acertadas. Por ello, todo indicador debe construirse a partir de elementos estratégicos que garanticen su alineación con los objetivos del plan de #[em marketing] digital.

    .row.justify-content-center.mb-4.mb-lg-5.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Estructura de un indicador clave de rendimiento
        .tabla-a.color-secundario
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #F1B6FC")
                th Elemento
                th(colspan='2') Descripción
            tbody
              tr(style="background-color: #FFFFFF")
                td Objetivo asociado.
                td(colspan='2') Meta estratégica que se desea evaluar, alineada al plan de #[em marketing] digital (Ej.: aumentar conversiones, mejorar #[em engagement] o incrementar tráfico web).
              tr(style="background-color: #F6F6F6")
                td Métrica base.
                td(colspan='2') Datos cuantitativos que sirven como insumo para construir el indicador y que provienen del comportamiento real del usuario.
              tr
                td Fórmula de cálculo.
                td(colspan='2') Relación matemática entre métricas que permite transformar datos aislados en un valor interpretable.
              tr(style="background-color: #F6F6F6")
                td Periodo de medición.
                td(colspan='2') Intervalo de tiempo definido para analizar el desempeño (diario, semanal, mensual o por campaña).
              tr
                td Meta esperada.
                td(colspan='2') Valor objetivo previamente establecido que permite comparar el resultado obtenido y evaluar si se cumplió o no la estrategia.

    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.align-items-center.z-2
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Estructura de un indicador clave de rendimiento
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema3/4-mob.png", alt="La figura muestra los cuatro tipos de kilates de oro que se presentan en joyería.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema3/4.png", alt="La figura muestra los cuatro tipos de kilates de oro que se presentan en joyería.")
        figcaption Nota. SENA, (2026).

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Interpretación

    p La interpretación de un indicador implica comparar el resultado obtenido con la meta establecida y analizar su comportamiento en el tiempo. No se trata únicamente de observar un número, sino de comprender qué significa dentro del contexto estratégico.
    .py-3.px-4.rounded-4.bg-secundario-s5.mb-4
      p.mb-0 Por ejemplo, una tasa de interacción del 8 % puede ser positiva o negativa dependiendo del sector, del tipo de contenido y del rendimiento histórico de la marca.

    p.mb-4 La interpretación adecuada permite:

    .row.justify-content-center.align-items-stretch
      .col-md-6.col-lg-5.col-xl-4.mb-5.mb-md-4
        .icon-tarjeta.icon-tarjeta--imagen-centrada.color-primario.p-2.ps-4.ms-5.h-100
          .icon-tarjeta__imagen 
            img.w-100(src="@/assets/curso/tema3/5.png", alt="")
          p.mb-0.ps-4.icon-tarjeta__text Detectar desviaciones.
      .col-md-6.col-lg-5.col-xl-4.mb-5.mb-md-4
        .icon-tarjeta.icon-tarjeta--imagen-centrada.color-primario.p-2.ps-4.ms-5.h-100
          .icon-tarjeta__imagen 
            img.w-100(src="@/assets/curso/tema3/6.png", alt="")
          p.mb-0.ps-4.icon-tarjeta__text Identificar oportunidades de mejora.
      .col-md-6.col-lg-5.col-xl-4.mb-5.mb-md-4
        .icon-tarjeta.icon-tarjeta--imagen-centrada.color-primario.p-2.ps-4.ms-5.h-100
          .icon-tarjeta__imagen 
            img.w-100(src="@/assets/curso/tema3/7.png", alt="")
          p.mb-0.ps-4.icon-tarjeta__text Tomar decisiones correctivas o de optimización.

    Separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Aplicabilidad

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema3/8.png", alt="")
      .col-lg-7
        p Los indicadores clave de rendimiento se aplican para evaluar la efectividad de campañas, contenidos y estrategias digitales La empresa Netflix puede establecer como indicador clave la tasa de retención mensual para evaluar la permanencia de sus usuarios. Por su parte, Starbucks puede utilizar como indicador la tasa de conversión en campañas promocionales digitales para medir el impacto en ventas.
        .p-4.rounded-4.bg-secundario-s5
          p.mb-0 En redes sociales, un indicador frecuente es la tasa de #[em engagement], ya que permite medir el nivel real de conexión entre la marca y su audiencia.
          
    Separador

    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Cálculo

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema3/9.png", alt="")
      .col-lg-8
        p El cálculo de un indicador consiste en relacionar dos o más métricas para obtener un resultado que permita evaluar desempeño. En #[em marketing] digital, la mayoría de los indicadores se expresan en porcentaje, porque así es más fácil comparar resultados entre publicaciones, campañas o periodos.
        p Pensar de la siguiente manera facilita la comprensión: las métricas son datos numéricos aislados, mientras que el indicador es el valor que les da significado al relacionarlos con un objetivo.
        .px-4.py-3.rounded-4.bg-secundario-s5
          p.mb-0 Por ejemplo, una publicación puede registrar 500 interacciones y alcanzar a 10.000 personas. Estos números muestran actividad, pero no permiten evaluar el desempeño real hasta que se relacionan entre sí. Esto se logra mediante un indicador, como la tasa de interacción.

    .p-4.rounded-4.bg-primario-p5.mb-5
      h5.mb-0.text-center Tasa de interacción (%) = (Total de interacciones / Alcance total) × 100

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-7
        p Este cálculo permite conocer qué proporción de la audiencia interactuó con el contenido y aporta información útil para la toma de decisiones estratégicas.
        p.mb-4.mb-lg-0 A continuación, se muestra un ejemplo práctico, paso a paso, de cálculo e interpretación de la tasa de interacción:
      .col-sm-10.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/10.png", alt="")
      
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-10.col-lg-5.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema3/11.png", alt="")
      .col-lg-7
        .tarjeta.bg-terciario-t20.p-4
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center.m-2.m-xl-4
              .col-auto
                h5.mb-4 Datos de la publicación
                p Una publicación registra 500 interacciones y alcanza a 10.000 personas. 
                p.mb-0 Estos valores representan métricas que describen la actividad generada por el contenido en redes sociales.
            .row.justify-content-center.align-items-center.m-2.m-xl-4
              .col-auto
                h5.mb-4 Cálculo de la tasa de interacción
                p Para obtener el indicador, se dividen las interacciones entre el alcance total: #[strong 500 ÷ 10.000 = 0,05].
                p.mb-0 Posteriormente, el resultado se convierte en porcentaje.
            .row.justify-content-center.align-items-center.m-2.m-xl-4
              .col-auto
                h5.mb-4 Resultado en porcentaje
                p Al multiplicar el valor obtenido por 100, se obtiene una tasa de interacción del 5 %. Este porcentaje expresa el nivel de respuesta de la audiencia. 
            .row.justify-content-center.align-items-center.m-2.m-xl-4
              .col-auto
                h5.mb-4 Interpretación del resultado
                p El 5 % indica que es cinco de cada 100 personas que vieron la publicación interactuaron con el contenido mediante likes, comentarios o compartidos.
  
    p.mb-4.mb-lg-5 Las herramientas basadas en IA permiten:

    .row.justify-content-center.align-items-stretch
      .col-md-6.col-lg-5.col-xl-3.mb-5.mb-md-4
        .icon-tarjeta.color-primario.p-2.ps-4.ms-5.h-100
          .icon-tarjeta__imagen 
            img.w-100(src="@/assets/curso/tema3/12.png", alt="")
          p.mb-0.ps-4.icon-tarjeta__text Identificar automáticamente indicadores con mejor desempeño.
      .col-md-6.col-lg-5.col-xl-3.mb-5.mb-md-4
        .icon-tarjeta.color-primario.p-2.ps-4.ms-5.h-100
          .icon-tarjeta__imagen 
            img.w-100(src="@/assets/curso/tema3/13.png", alt="")
          p.mb-0.ps-4.icon-tarjeta__text Detectar variaciones atípicas en periodos específicos.
      .col-md-6.col-lg-5.col-xl-3.mb-5.mb-md-4
        .icon-tarjeta.color-primario.p-2.ps-4.ms-5.h-100
          .icon-tarjeta__imagen 
            img.w-100(src="@/assets/curso/tema3/14.png", alt="")
          p.mb-0.ps-4.icon-tarjeta__text Generar proyecciones de cumplimiento de metas.
      .col-md-6.col-lg-5.col-xl-3.mb-5.mb-md-4
        .icon-tarjeta.color-primario.p-2.ps-4.ms-5.h-100
          .icon-tarjeta__imagen 
            img.w-100(src="@/assets/curso/tema3/15.png", alt="")
          p.mb-0.ps-4.icon-tarjeta__text Sugerir ajustes estratégicos en tiempo real.

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        .p-4.rounded-4.bg-acento-contenido-a5
          p.mb-0.text-center La combinación entre análisis humano e inteligencia artificial fortalece la precisión en la evaluación del rendimiento digital y mejora la toma de decisiones estratégicas.


</template>

<script>
export default {
  name: 'Tema3',
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
