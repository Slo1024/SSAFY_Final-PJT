<template>
  <Swiper
    :slidesPerView="5"
    :spaceBetween="30"
    :loop="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="book in books" :key="book.id">
      <div class="img"><img style="width:100%;" :src="book.cover" :alt="book.title"></div>
      <div class="title">{{ book.title }}</div>
    </swiper-slide>
  </Swiper>
</template>

<script setup>
  import { ref } from 'vue'
  
  import { Navigation, Pagination } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue'

  // Swiper 스타일 불러오기
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'

  // 사용할 Swiper 모듈 지정
  const modules = [Navigation, Pagination]

  const books = ref([
    {
      id: 1,
      title: '혼한남매 19',
      cover: 'https://example.com/book1.jpg',
      tags: ['어린이만화', '일상'],
    },
    {
      id: 2,
      title: '어떻게 살 것인가',
      cover: 'https://example.com/book2.jpg',
      tags: ['인문'],
    },
      {
      id: 3,
      title: '죽고 싶지만 떡볶이는 먹고 싶어',
      cover: 'https://example.com/book3.jpg',
      tags: ['에세이'],
      },
      {
      id: 4,
      title: '불편한 편의점',
      cover: 'https://example.com/book4.jpg',
      tags: ['소설'],
      },
      {
      id: 5,
      title: '대한민국 헌법',
      cover: 'https://example.com/book5.jpg',
      tags: ['법률'],
      },
  ])
</script>

<style scoped>
.swiper{
  flex: 5;
}

.img{
  height: 200px;overflow: hidden;
  
}
</style>