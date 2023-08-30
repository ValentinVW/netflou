<script setup>
import movies from "./components/movies.vue";
import search from "./components/searchBar.vue";
import series from "./components/series.vue";
</script>

<template>
  <div class="fixed w-full h-screen bg-black">
    <search />
    <movies />
    <series />
  </div>
</template>
