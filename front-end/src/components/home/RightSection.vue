<template>
  <div class="book-carousel">
    <h2 class="title">인기 책 추천</h2>
    
    <swiper
        :slidesPerView="5"
        :spaceBetween="30"
        :loop="true"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
    >
      <swiper-slide
        v-for="(book, index) in books"
        :key="book.id"
        class="book-slide"
      >
        <div class="rank">{{ index + 1 }}</div>
        <img :src="book.cover" class="cover" />
        <div class="info">
          <p class="title">{{ book.title }}</p>
          <div class="tags">
            <span v-for="tag in book.tags" :key="tag" class="tag">#{{ tag }}</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
    // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  
  import 'swiper/css/navigation';
  import { Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [ Navigation ],
        
        books: [
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
        ]
      };
    },
  };
</script>

<style scoped>
.book-carousel{
  width: 100%;padding: 20px;
}
.title {
  font-size: 24px;font-weight: bold;
  margin-bottom: 16px;
}
.book-slide {
  position: relative;
  text-align: center;
}
.rank {
  position: absolute;
  top: -10px;
  left: -10px;
  background: red;
  color: white;
  width: 24px;
  height: 24px;
  font-size: 12px;
  line-height: 24px;
  border-radius: 50%;
}
.cover {
  width: 100px;
  height: 140px;
  object-fit: cover;
  margin-bottom: 8px;
}
.info .title {
  font-size: 14px;
  font-weight: bold;
}
.tags {
  margin-top: 4px;
}
.tag {
  font-size: 12px;
  color: #555;
  margin-right: 4px;
}

/* swiper start */
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
