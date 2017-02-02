<script>
  import Navbar from './navbar.vue';

  export default {
    components: { Navbar }
  }
</script>

<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  body {
    margin-top: 70px;
  }
</style>
