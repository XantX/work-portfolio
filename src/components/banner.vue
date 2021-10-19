<template>
  <div class="container-fluid keyboard-background">
    <div class="d-flex justify-content-around content">
      <div class="align-self-center">
        <h1 class="title">
          <vue-typer
            :repeat="0"
            text="Hola, mi nombre es Sebastian Diaz Torres"
            ></vue-typer>
        </h1>
        <p class="sub-title">
          <vue-typer
            :repeat="0"
            :pre-type-delay="4500"
            text="Soy desarrollador de software"
          ></vue-typer>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "Banner",
  components: {
    VueTyper,
    "vue-typer": VueTyper,
  },
};
</script>

<style>
.content {
  height: 35rem;
  color: rgba(251, 241, 199, 1);
  background: rgba(60, 56, 54, 0.4);
  width: 100%;
}
.typed-cursor {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.keyboard-background {
  background-image: url(../../static/img/keyboard-2.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 !important;
}
.vue-typer .custom.char {
  color: #fbf1c7 !important;
}

.vue-typer .custom.caret {
  width: 5px;
  background-color: #fbf1c7 !important;
}
.sub-title .vue-typer .custom.caret {
  display: none;
}
</style>
