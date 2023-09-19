import { defineStore } from "pinia";

import axios from "axios";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    movie: null,
    showFullVideo: false,
    mots: "exemple de phrase",
  }),
  getters: {
    getMovie: (state) => state.movie,
  },
  actions: {
    async fetchMovie() {
      try {
        const request = await axios.get("http://localhost:3000/movie");
        const data = request;
        this.movie = data;
        console.log(data);
        return data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
