<template>
  <div class="left-wrapper">
    <div class="content">
      <h1 class="title">책, 애매하게 기억나도 괜찮아요.</h1>
      <p class="subtitle">유사도를 기반으로 하는 제목 교정 검색 서비스</p>
      <input type="text" class="search-bar" placeholder="책 제목이나 키워드를 입력하세요" />
    </div>
  </div>
</template>

<style scoped>
.left-wrapper {
  width: 100%;
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  align-items: center;
}

.content {
  width: 100%;
  text-align: center;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1rem;
  color: #555;
  margin-bottom: 2rem;
}

.search-bar {
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}
</style>
