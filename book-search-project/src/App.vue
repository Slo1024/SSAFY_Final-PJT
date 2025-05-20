<template>
  <header>
    <div class="container">
      <div class="logo-search-bar">
        <div class="logo" @click="goHome">
          <div class="img"><img style="width:100%" src="./assets/img/logo.png" alt=""></div>
          <h1>책을 찾다</h1>
        </div>
        <SearchBar />
      </div>
      <nav class="navbar">
        <RouterLink>내 서재</RouterLink>
        <RouterLink>내 주변 서점 보기</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goHome = function() {
  router.push({name:'home'})
}
</script>

<style scoped>
/* 헤더 전체 */
header{
  width: 100%;height: 80px;
  border-bottom: 1px solid #eee;
}
header .container{
  height: 100%;
  display: flex;align-items: center;justify-content: space-between;
}

header .logo-search-bar{
  display: flex;align-items: center;gap: 32px;
}
/* 로고 */
header .logo{display: flex;align-items: center;gap: 16px;cursor:pointer;}
header .logo .img{width: 48px;}
header .logo h1{font-size: 14px;}

/* 네이게이션 바 */
.navbar{display: flex;gap: 20px;}
.navbar > a{font-size: 14px;}
.navbar > a:hover{color: #FF5F0E;}
</style>
