<script setup>
import { ref, toRefs } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import { useSerieStore } from "../stores/serie";
import { storeToRefs } from "pinia";
const useSerie = useSerieStore();
const { serie, showFullVideoSerie } = storeToRefs(useSerie);

let currentSlide = ref(0);

const props = defineProps({ series: Object });
const { series } = toRefs(props);

const currentSlideObject = (slide, index) => {
  if (index === currentSlide.value) {
    serie.value = slide;
  }
};

const fullScreenVideoSerie = (index) => {
  currentSlide.value = index;
  setTimeout(() => (showFullVideoSerie.value = true), 500);
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
        v-for="(slide, index) in series"
        :key="slide"
        class="flex items-center object-cover text-white bg-transparent"
      >
        <div
          @click="fullScreenVideoSerie(index)"
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
