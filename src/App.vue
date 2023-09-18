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
    <div>
      <div
        class="fixed z-30 bottom-0 right-0 w-full h-[55%] pl-[120px] overflow-y-auto"
      >
        <div
          class="fixed z-30 bottom-0 right-0 w-full h-[55%] pl-[120px] overflow-y-auto"
        >
          <moviesCarousel
            class="pb-14 pt-14"
            :movies="movies[(0, 1, 3, 4, 5, 6)]"
          />
          <seriesCarousel class="pb-14" :series="series" />
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
