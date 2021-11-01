<template>
  <div class="container" id="about-me">
    <div class="row align-items-center">
      <div class="col-lg-9 soy-asi">
        <div class="description">
          <h2 class="fw-bold">Mi perfil profesional</h2>
          <p class="fs-6">
            Soy una persona dedicada y analítica con los problemas que se me
            imponen. Siempre estoy mejorando mi skills con las tecnologías que
            manejo y me mantengo al día con las nuevas tecnologías. Me gusta los
            nuevos retos, me adapto para soluciona los requerimientos que se
            imponen y me agrada formar parte de equipos de desarrollo. Soy
            dedicado al momento de hacer mis trabajos cuidando los detalles y
            analizando posibles mejoras que se tengan que hacer para que la
            calidad del producto final sea la mejor posible.
          </p>
        </div>
      </div>

      <div class="col-lg-3 col-sm-12 img-skills">
        <div class="d-flex justify-content-center">
          <img class="person " src="../../static/img/person.svg" width="200px">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style>
.description{
  padding: 4rem;
}
.img-skills{
  padding: 4rem;
}
</style>
