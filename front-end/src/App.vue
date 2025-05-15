<template>
  <div class="container">
    <LeftSection class="left-section" />
    <RightSection class="right-section" />
  </div>
</template>

<script setup>
import LeftSection from './components/home/LeftSection.vue'
import RightSection from './components/home/RightSection.vue'
</script>

<style scoped>
.container {
  display: flex;flex-direction: column;
  height: 100%;
}

.left-section, .right-section {
  width: 100%;
  display: flex;
  padding: 0 50px;
  justify-content: center;align-items: center;
  box-sizing: border-box;
}

@media (min-width: 920px) {
  .container {
    flex-direction: row;
  }
  .left-section,
  .right-section {
    width: 50%;height: 100vh;
  }
  .right-section {
    flex-direction: column;
  }
}
</style>
