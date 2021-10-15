<template>
  <div class="container-fluid" id="about-me">
    <div class="row justify-content-center">
      <div class="col-6 soy-asi">
        <div class="description">
          <h2 class="fw-bold">Yo soy asi</h2>
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
      <div class="col-3 img-skills">
        <img class="person" src="../../static/img/person.svg" width="200px">
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
