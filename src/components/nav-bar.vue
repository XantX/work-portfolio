<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand mx-4" href="#">My porfolio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">About me</a>
          <a class="nav-link" href="#">Expirience</a>
          <a class="nav-link" href="#">Tools</a>
        </div>
      </div>
      <button class="btn btn-outline-success mx-4" type="submit">Download CV</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
<style>
</style>
