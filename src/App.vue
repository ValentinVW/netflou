<script setup>
import movies from "./components/movies.vue";
import search from "./components/searchBar.vue";
import series from "./components/series.vue";
import about from "./components/about.vue";
import serieCarousel from "./components/serieCarousel.vue";
import movieCarousel from "./components/movieCarousel.vue";
</script>
<template>
  <div class="fixed w-full h-screen bg-black">
    <h1 class="absolute top-0 text-8xl mt-10 ml-10">Netflou</h1>
    <nav
      v-if="!showFullVideo"
      id="SideNav"
      class="flex z-40 items-center w-[110px] h-screen relative"
    >
      <div>
        <search />
        <movies />
        <series />
        <about />
      </div>
    </nav>
    <div
      class="fixed z-30 bottom-0 right-0 w-full h-[55%] pl-[120px] overflow-y-auto"
    >
      <div
        class="fixed z-30 bottom-0 right-0 w-full h-[55%] pl-[120px] overflow-y-auto"
      >
        <movieCarousel class="pb-14 pt-14" />
        <serieCarousel class="pb-14" />
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
