import { defineStore } from "pinia";

import axios from "axios";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    movie: {},
    desc: "description",
    showFullVideo: false,
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

        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
