import { defineStore } from "pinia";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    movie: [],
    showFullVideo: false,
  }),
  actions: {
    async fetchMovie() {
      const res = await fetch(
        "https://moviesminidatabase.p.rapidapi.com/movie/order/byPopularity/"
      );
      const data = await res.json();
      this.movie = data;
      console.log(data);

      return data;
    },
  },
  getters: {
    getSerie: (state) => state.movie,
  },
});
