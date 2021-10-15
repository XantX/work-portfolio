<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand h1 logo" href="#">My porfolio</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#NavColapser"
        aria-controls="NavColapser"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="links collapse navbar-collapse" id="NavColapser">
        <div class="navbar-nav me-auto">
          <a class="nav-link" aria-current="page" href="#">About me</a>
          <a class="nav-link" href="#">Experience</a>
          <a class="nav-link" href="#">Tools</a>
          <a class="nav-link" href="#">Proyects</a>
        </div>
        <button class="btn btn-outline-success ">Download CV</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
<style>
a:hover{
  color:  #8EC07C !important;
}
</style>
