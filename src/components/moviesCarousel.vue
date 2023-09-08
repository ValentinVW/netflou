<script setup>
import { ref, toRefs } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import { useMovieStore } from "../stores/movie";
import { storeToRefs } from "pinia";
const useMovie = useMovieStore();
const { movie, showFullVideoMovie } = storeToRefs(useMovie);

let currentSlide = ref(0);

const props = defineProps({ movies: Array });
const { movies } = toRefs(props);

const currentSlideObject = (slide, index) => {
  if (index === currentSlide.value) {
    movie.value = slide;
  }
};

const fullScreenVideoMovie = (index) => {
  currentSlide.value = index;
  setTimeout(() => (showFullVideoMovie.value = true), 500);
};
</script>

<template>
  <div class="min-w-[1200px] relative">
    <Carousel
      ref="carousel"
      v-model="currentSlide"
      :items-to-show="8"
      :items-to-scroll="1"
      :wrap-around="true"
      :transition="500"
      snapAlign="start"
      class="bg-transparent"
    >
      <Slide
        v-for="(slide, index) in movies"
        :key="slide"
        class="flex items-center object-cover text-white bg-transparent"
      >
        <div
          @click="fullScreenVideoMovie(index)"
          class="object-cover h-[100%] hover:brightness-125 cursor-pointer"
          :class="
            (currentSlide !== index
              ? 'border-4 border-transparent'
              : 'border-4 border-white',
            currentSlideObject(slide, index))
          "
        ></div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>
<style>
.carousel__prev,
.carousel__next,
.carousel__prev:hover,
.carousel__next:hover {
  color: white;
}
</style>
