<script setup>
import { ref, onBeforeMount, computed } from "vue";
import { storeToRefs } from "pinia";

import moviesIcon from "./components/moviesIcon.vue";
import search from "./components/searchBar.vue";
import about from "./components/about.vue";
import moviesCarousel from "./components/moviesCarousel.vue";

import { useMovieStore } from "./stores/movie";

// ---- MOVIE ----//

const storeMovie = useMovieStore();

const movie = computed(() => {
  return storeMovie.movie;
});

onBeforeMount(() => {
  storeMovie.fetchMovie();
});

// *********** //

const { showFullVideo } = storeToRefs(storeMovie);
</script>

<template>
  <div class="fixed w-full h-screen bg-black">
    <div
      id="SideNav"
      class="flex z-40 items-center w-[120px] h-screen bg-black relative"
    >
      <div
        v-if="!showFullVideo"
        id="SideNav"
        class="flex z-40 items-center w-[120px] h-screen bg-black relative"
      >
        <h1 class="absolute top-0 text-8xl mt-10 ml-10">Netflou</h1>
        <nav>
          <div>
            <search />
            <moviesIcon />
            <about />
          </div>
        </nav>
      </div>
    </div>
    <div v-if="!showFullVideo">
      <div
        class="fixed z-30 bottom-0 right-0 w-full h-[55%] pl-[120px] overflow-y-auto"
      >
        <div
          class="fixed z-30 bottom-0 right-0 w-full h-[55%] pl-[120px] overflow-y-auto"
        >
          <moviesCarousel class="pb-14 pt-14" v-bind:movie="movie" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "false";
  src: url("./assets/false.ttf") format("truetype");
}
h1 {
  font-family: "false";
  color: red;
}
</style>
