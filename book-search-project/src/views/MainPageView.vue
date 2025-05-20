<template>
  <section class="main-section">
    <div class="container">
      <div class="title-content">
        <p>유사도 기반 책 검색 서비스</p>
        <h1>기억이 흐릿해도 괜찮아요,<br/>당신이 찾는 책을 함께 찾아드릴게요.</h1>
        <SearchBar />
      </div>
    </div>
  </section>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue'

</script>

<style scoped>
.main-section .container{
  height: 600px;
  display: flex;justify-content: center;align-items: center;
}

.title-content{text-align: center;margin-bottom: 100px;}
.title-content p{margin-bottom: 12px;font-size: 16px;}
.title-content h1{font-size: 38px;line-height: 1.4;margin: 12px 0 40px;}
</style>