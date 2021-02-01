<template>
<div class="container-fluid">
  <nav class="nav nav-pills nav-fill">
    <router-link class="nav-link" exact-active-class='active' to="/">Validation 1</router-link>
    <router-link class="nav-link" exact-active-class='active' to="/about">About</router-link>
    <a class="nav-link" href="#">Validation 3</a>
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Validation 4</a>
  </nav>
  <router-view/>
</div>
</template>
