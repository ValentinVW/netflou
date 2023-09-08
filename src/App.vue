<script setup>
import { onMounted } from "vue";

import movies from "./components/movies.vue";
import search from "./components/searchBar.vue";
import series from "./components/series.vue";
import about from "./components/about.vue";
import seriesCarousel from "./components/seriesCarousel.vue";
import moviesCarousel from "./components/moviesCarousel.vue";

import { useMovieStore } from "./stores/movie";
import { useSerieStore } from "./stores/serie";
import { storeToRefs } from "pinia";

const useMovie = useMovieStore();
const { movie, showFullVideoMovie } = storeToRefs(useMovie);

const useSerie = useSerieStore();
const { serie, showFullVideoSerie } = storeToRefs(useSerie);

onMounted(() => {
  setTimeout(() => (movie.value = movies), 100);
  setTimeout(() => (serie.value = series), 100);
});
</script>

<template>
  <div class="fixed w-full h-screen bg-black">
    <div
      v-if="!showFullVideoMovie && showFullVideoSerie"
      id="SideNav"
      class="flex z-40 items-center w-[120px] h-screen bg-black relative"
    >
      <h1 class="absolute top-0 text-8xl mt-10 ml-10">Netflou</h1>
      <nav>
        <div>
          <search />
          <movies />
          <series />
          <about />
        </div>
      </nav>
    </div>
    <div v-if="!showFullVideoMovie && !showFullVideoSerie">
      <div
        class="fixed z-30 bottom-0 right-0 w-full h-[55%] pl-[120px] overflow-y-auto"
      >
        <div
          class="fixed z-30 bottom-0 right-0 w-full h-[55%] pl-[120px] overflow-y-auto"
        >
          <moviesCarousel
            class="pb-14 pt-14"
            category="Popular Movies"
            :movies="movies"
          />
          <seriesCarousel
            class="pb-14"
            category="Horror Movies"
            :series="series"
          />
        </div>
      </div>
    </div>

    <div
      class="absolute z-20 h-[70%] left-[120px] w-[100%] right-0 bottom-0 bg-gradient-to-t from-black via-black"
    />
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
