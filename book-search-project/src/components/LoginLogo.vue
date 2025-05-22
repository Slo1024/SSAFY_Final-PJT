<template>
  <RouterLink :to="{ name: 'home' }">
    <div class="logo"><img width="100%" src="../assets/img/logo.png" alt=""></div>
  </RouterLink>
  <p>설명설명설명</p>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.logo {
  width: 80px;
}
</style>