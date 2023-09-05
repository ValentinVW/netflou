<script setup>
import { Carousel, Slide, Navigation } from "vue3-carousel";

let currentSlide = ref(0);
</script>

<template>
  <div class="min-w-[1200px] relative">
    <div class="flex justify-between mr-6">
      <div
        class="flex items-center font-semibold text-white text-2xl cursor-pointer"
      >
        {{ category }}
      </div>
    </div>

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
          @click="fullScreenVideo(index)"
          class="object-cover h-[100%] hover:brightness-125 cursor-pointer"
          :class="
            (currentSlide !== index
              ? 'border-4 border-transparent'
              : 'border-4 border-white',
            currentSlideObject(slide, index))
          "
        >
          <img />
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
