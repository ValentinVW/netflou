import { defineStore } from "pinia";
import { API_KEY_TMDB } from "../../key.js";

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
        const request = await axios.get("http://localhost:3000/movie", {
          Headers: {},
        });
        const data = await request;
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
