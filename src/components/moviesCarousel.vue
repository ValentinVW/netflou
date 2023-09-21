<script setup>
import { ref, toRefs, onMounted, computed } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import { useMovieStore } from "../stores/movie";
import { storeToRefs } from "pinia";

const storeMovie = useMovieStore();

const { showFullVideo } = storeToRefs(storeMovie);

const props = defineProps({ movie: Array });

const { movie } = toRefs(props);

let currentSlide = ref(0);

const currentSlideObject = (slide, index) => {
  if (index === currentSlide.value) {
    movie.value = slide;
  }
};

const fullScreenVideo = (index) => {
  currentSlide.value = index;
  setTimeout(() => (showFullVideo.value = true), 500);
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
        v-for="(slide, index) in movie"
        :key="slide"
        class="flex items-center object-cover text-white bg-transparent"
      >
        <div
          @click="fullScreenVideo(index)"
          class="object-cover h-[100%] hover:brightness-125 cursor-pointer"
          :class="
            (currentSlide !== index
              ? 'border-4 border-transparent'
              : 'border-4 border-white',
            currentSlideObject(slide, index))
          "
        >
          <img
            style="user-select: none"
            class="pointer-events-none h-[100%] z-[-1]"
            :src="{ movie } + slide.data.Poster"
            alt="image-movie"
          />
        </div>
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
