import { defineStore } from "pinia";
import { API_KEY } from "../../key.js";

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
        const res = await axios.get(
          "https://moviesminidatabase.p.rapidapi.com/movie/order/byPopularity/",
          {
            headers: {
              "X-RapidAPI-Key": API_KEY,
              "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
            },
          }
        );
        const data = await res.json();
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
