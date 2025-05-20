<template>
    <div class="search-bar">
      <div class="select-box">
        <button>통합검색</button>
        <select style="display:none" name="" id="">
          <option value="">통합검색</option>
          <option value="">제목</option>
          <option value="">저자</option>
        </select>
        <form>
          <input type="text" placeholder="김영하의 그 책.. 뭐였더라..">
          <button>검색</button>
        </form>
      </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
/* 검색 창 */
header .logo-search-bar .select-box{ display: flex; }
</style>