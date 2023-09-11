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
        const request = await axios.get(
          "https://api.betaseries.com/movies/movie"
          /**,
          {
            
            * headers: {
              "X-RapidAPI-Key": API_KEY,
              "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
            }, 
            
          }
          */
        );
        const data = await request.json();
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
