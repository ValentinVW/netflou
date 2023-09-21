import { defineStore } from "pinia";

import axios from "axios";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    movie: [],
    showFullVideo: false,
  }),
  getters: {
    getMovie: (state) => state.movie,
  },
  actions: {
    async fetchMovie() {
      try {
        const res = await axios.get();
        const data = await res;
        this.movie = data;
        console.log(data);
        return data;
      } catch (error) {
        // en cas d’échec de la requête
        console.log(error);
      }
    },
  },
});
