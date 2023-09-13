import { defineStore } from "pinia";
import { API_KEY_TMDB } from "../../key.js";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    movie: [],
    showFullVideoMovie: false,
  }),
  getters: {
    getMovie: (state) => state.movie,
  },
  actions: {
    async fetchMovie() {
      try {
        const request = await axios.get(
          `https://api.themoviedb.org/3/movie/11?api_key=${API_KEY_TMDB}`,
          {
            Headers: {
              accept: "application/json",
            },
          }
        );
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
