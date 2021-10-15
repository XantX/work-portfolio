<template>
  <div class="container-fluid keyboard-background">
    <div class="d-flex justify-content-around content">
      <div class="align-self-center">
        <div>
          <vue-typed-js :strings="['Hola, mi nombre es Sebastian Diaz Torres']" :typeSpeed="70" :showCursor="true" >
            <h1 class="typing"></h1>
          </vue-typed-js>
        </div>
        <vue-typed-js :strings="['Soy desarrollador de software']" :typeSpeed="70" :showCursor="false" :startDelay="4000">
          <p class="typing"></p>
        </vue-typed-js>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style>
.content {
  height: 35rem;
  color: rgba(251, 241, 199, 1);
  background: rgba(60, 56, 54, 0.4);
  width:100%;
}
.keyboard-background{
  background-image: url(../../static/img/keyboard-2.jpg);
  background-position: center ;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 !important;
}
</style>
