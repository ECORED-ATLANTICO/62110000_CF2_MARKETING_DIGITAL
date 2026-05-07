<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Presupuesto
    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Antes de entrar en los subpuntos, recordemos que un presupuesto es mucho más que cifras: es una herramienta estratégica que guía la asignación de recursos, controla gastos y permite medir el impacto de las acciones en función de los objetivos organizacionales.

    .row.justify-content-center
      .col-xl-10
        .p-4.rounded-4.bg-primario-p5
          p.mb-0 En #[em marketing] digital, el presupuesto asegura que cada inversión, desde publicidad #[em online] hasta creación de contenido, tenga un propósito definido, sea medible y genere resultados concretos.

    Separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Concepto

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema5/2.png", alt="")
      .col-lg-8
        p El presupuesto es un plan financiero que asigna recursos económicos a actividades, proyectos o áreas específicas de la organización, con el fin de alcanzar objetivos estratégicos de manera eficiente. En #[em marketing] digital, se aplica para inversiones en campañas publicitarias, producción de contenido, herramientas de análisis y promociones.
        .p-4.rounded-4.bg-primario-p5.mb-3
          p.mb-0 Coca-Cola destina presupuestos específicos para publicidad en redes, producción de contenido audiovisual, herramientas de análisis de datos y promociones digitales, asegurando que cada peso invertido tenga un retorno medible y esté alineado con los objetivos estratégicos de la marca.
        p.mb-0 A continuación, se presentan las principales características de un presupuesto, sus funciones clave y ejemplos prácticos que permiten entender cómo se aplican en la planificación y gestión de recursos dentro de una organización o campaña de #[em marketing] digital:

    .row.justify-content-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Características principales de un presupuesto
        .tabla-a.color-secundario
          table
            caption Nota. Adaptada Gitman & Zutter (2015); Brigham & Ehrhardt (2020); Chaffey & Ellis-Chadwick (2019).
            thead
              tr(style="background-color: #F1B6FC")
                th Característica
                th Descripción
                th Ejemplo práctico
            tbody
              tr(style="background-color: #FFFFFF")
                td Planificación.
                td Determina cómo se usarán los recursos de manera ordenada.
                td Asignar $5.000.000 COP a publicidad en Instagram.
              tr(style="background-color: #F6F6F6")
                td Medición.
                td Permite cuantificar la inversión en cada actividad.
                td Registrar cuánto se gasta en cada campaña semanal.
              tr
                td Control.
                td Facilita la supervisión de los gastos reales frente a los planificados.
                td Detectar que se gastaron $500.000 COP más de lo presupuestado y ajustar la próxima semana.
              tr(style="background-color: #F6F6F6")
                td Alineación estratégica.
                td Cada recurso invertido está alineado con objetivos de negocio.
                td Campaña diseñada para aumentar descargas de app en un 15 %.
              tr
                td Base para decisiones.
                td Brinda información para decidir entre diferentes acciones.
                td Reasignar presupuesto de publicidad menos efectiva a contenido audiovisual de mayor impacto.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Aplicabilidad

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema5/3.png", alt="")
      .col-lg-7
        p El presupuesto es una herramienta práctica que se aplica en distintos niveles de la gestión empresarial, especialmente en #[em marketing] digital. Su función principal es asegurar que los recursos se utilicen de manera eficiente, estratégica y medible.
        p.mb-0 La siguiente tabla muestra cómo el presupuesto se aplica en la gestión y #[em marketing] digital, destacando sus usos, beneficios y ejemplos prácticos:

    .row.justify-content-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Aplicaciones y beneficios del presupuesto
        .tabla-a.color-secundario
          table
            caption Nota. Adaptada Kotler, Kartajaya & Setiawan (2021); Chaffey & Ellis-Chadwick (2019); Saylor Academy (2022).
            thead
              tr(style="background-color: #F1B6FC")
                th Aplicación
                th Descripción
                th Beneficio
                th Ejemplo
            tbody
              tr(style="background-color: #FFFFFF")
                td Planificación de campañas.
                td Definir cuánto invertir en cada canal digital según objetivos.
                td Maximizar impacto con recursos limitados.
                td Asignar $4.000.000 COP a Facebook Ads y $2.000.000 COP a TikTok
              tr(style="background-color: #F6F6F6")
                td Control financiero.
                td Comparar gastos reales vs. planificados y detectar desviaciones.
                td Evitar sobrecostos y desperdicio de recursos.
                td Registrar inversión semanal y ajustar si se excede el presupuesto.
              tr
                td Toma de decisiones estratégicas.
                td Priorizar acciones de mayor impacto y eficiencia.
                td Optimizar recursos y ROI.
                td Decidir entre invertir en publicidad pagada o en #[em influencers] según resultados previos.
              tr(style="background-color: #F6F6F6")
                td Evaluación de resultados.
                td Medir la eficiencia de la inversión en función de KPIs.
                td Identificar qué estrategias generan mejores resultados.
                td Analizar CTR, conversiones y descargas de app por canal.
              tr
                td Transparencia y coordinación.
                td Permite que todos los miembros del equipo comprendan recursos disponibles y prioridades.
                td Facilita comunicación interna y evita conflictos por recursos.
                td Compartir presupuesto de campaña mensual con el equipo de #[em marketing].

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema5/4.png", alt="")
      .col-lg-8
        p A continuación, se presenta un ejemplo práctico que muestra cómo elaborar un presupuesto de #[em marketing] digital de manera estructurada, asignando recursos, definiendo objetivos y estableciendo indicadores de seguimiento. Se utiliza como referencia la empresa Go Colombia, con el fin de ilustrar la aplicación real de un presupuesto en campañas digitales.
        h5 Empresa de referencia: Go Colombia
        p #[strong Objeto de la empresa:] Go Colombia es una empresa colombiana de entregas a domicilio (#[em delivery]) y servicios bajo demanda. A través de su app, los usuarios pueden pedir comida, supermercado, productos de farmacia, mensajería y otros servicios rápidos.
        p.mb-0 #[strong Objetivo:] aumentar descargas de la app en un 15 % y mejorar interacción en redes sociales durante un mes. 

    .row.justify-content-center.mb-5
      .col-md-5.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img.w-90(src='@/assets/curso/tema5/5.png' alt='')
          .tarjeta.bg-primario-p5.shadow.w-100
            .p-3.pt-4
              .row.justify-content-center
                .col-12
                  h5 Paso 1: 
                  p Definir objetivos.
                  ul.lista-ul--primario.ms-3.mb-0
                    li.mb-0.d-flex
                      i.fas.fa-circle.fa-2xs.mt-2
                      | Descargas de app + 15 %.
                    li.mb-0.d-flex
                      i.fas.fa-circle.fa-2xs.mt-2
                      span #[em Engagement] en redes + 20 %.

      .col-md-5.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar
          img.w-90(src='@/assets/curso/tema5/6.png' alt='')
          .tarjeta.bg-primario-p5.shadow.w-100
            .p-3.pt-4
              .row.justify-content-center
                .col-12
                  h5 Paso 2: 
                  p Determinar recursos disponibles.
                  p Monto total: $10.000.000 COP.
      .col-md-5.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img.w-90(src='@/assets/curso/tema5/7.png' alt='')
          .tarjeta.bg-primario-p5.shadow.w-100
            .p-3.pt-4
              .row.justify-content-center
                .col-12
                  h5 Paso 3: 
                  p Asignar presupuesto a actividades.

    .row.justify-content-center.z-2.mb-4  
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Asignación de rubros por actividad
        .tabla-a.color-secundario
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #F1B6FC")
                th Actividad
                th Monto asignado
                th Objetivo específico
                th KPI asociado
            tbody
              tr(style="background-color: #FFFFFF")
                td Publicidad en Facebook e Instagram.
                td $4.000.000 COP.
                td Aumentar alcance y descargas.
                td CTR, impresiones, descargas.
              tr(style="background-color: #F6F6F6")
                td Creación de contenido audiovisual.
                td $3.000.000 COP.
                td Generar contenido atractivo y profesional.
                td Alcance, interacciones, reproducciones.
              tr(style="background-color: #FFFFFF")
                td Herramientas de análisis y métricas.
                td $1.000.000 COP.  
                td Medir resultados y optimizar campañas.
                td Reportes semanales de KPIs.
              tr(style="background-color: #F6F6F6")
                td Promociones y descuentos.
                td $2.000.000 COP.
                td Incentivar descargas y fidelización.
                td Número de usuarios nuevos y redención de cupones.

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img.w-90(src='@/assets/curso/tema5/8.png' alt='')
          .tarjeta.bg-primario-p5.shadow.w-100
            .p-3.pt-4
              .row.justify-content-center
                .col-12
                  h5 Paso 4: 
                  p Ejecutar la campaña y registrar gastos.
                  ul.lista-ul--primario.ms-3.mb-0
                    li.mb-0.d-flex
                      i.fas.fa-circle.fa-2xs.mt-2
                      | Registrar inversión semanal frente a lo planificado.
                    li.mb-0.d-flex
                      i.fas.fa-circle.fa-2xs.mt-2
                      | Detectar desviaciones y ajustar la distribución del presupuesto si es necesario.
      .col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img.w-90(src='@/assets/curso/tema5/9.png' alt='')
          .tarjeta.bg-primario-p5.shadow.w-100
            .p-3.pt-4
              .row.justify-content-center
                .col-12
                  h5 Paso 5:
                  p Analizar resultados y ajustar estrategias.
                  ul.lista-ul--primario.ms-3.mb-0
                    li.mb-0.d-flex
                      i.fas.fa-circle.fa-2xs.mt-2
                      | Comparar los resultados con los objetivos iniciales.
                    li.mb-0.d-flex
                      i.fas.fa-circle.fa-2xs.mt-2
                      | Evaluar el ROI y la eficiencia de cada actividad.
                    li.mb-0.d-flex
                      i.fas.fa-circle.fa-2xs.mt-2
                      | Tomar decisiones para optimizar campañas futuras.

    .p-4.rounded-4.bg-secundario-s5.mb-4
      h5 Resultado final:
      p.mb-0 Un presupuesto bien elaborado permite alinear la inversión con los objetivos de negocio, optimizar recursos, medir resultados de manera objetiva y tomar decisiones estratégicas informadas, reduciendo riesgos y aumentando la efectividad de las campañas de #[em marketing] digital.
    
    .p-4.rounded-4.bg-terciario-t20
      .row.justify-content-center.align-items-center
        .col-xl-1.d-none.d-xl-block
          figure
            img(data-aos="fade-down-left", src="@/assets/curso/tema5/10.png", alt="")
        .col-lg-9
          p.mb-4.mb-lg-0 Lo invitamos a consultar el siguiente video para comprender de forma técnica los pasos esenciales para diseñar y estructurar un presupuesto en #[em marketing] digital, vinculando recursos con objetivos estratégicos y métricas para maximizar resultados en redes sociales y otras plataformas: 
        .col-12.col-lg-3.col-xl-2
          a.boton.color-acento-botones.texto-oscuro(href="https://www.youtube.com/watch?v=c3KoolyMES0", target="_blank")
            span Abrir video
            i.fas.fa-play-circle

</template>

<script>
export default {
  name: 'Tema5',
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
