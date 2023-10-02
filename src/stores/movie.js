import { defineStore } from "pinia";

import axios from "axios";

const id_movie = "i=tt3896198";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    movie: null,
    showFullVideo: false,
  }),
  getters: {
    getMovie: (state) => state.movie,
  },
  actions: {
    async fetchMovie() {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/account/20401005/lists/api?page=1",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjM2OWMyZmE3ZWQyMDkxMGU0MDI2ZjFjYmQ3MDVkOCIsInN1YiI6IjY0Zjc5OWQ3OGUyMGM1MGNkNjI5ZTFjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1ocNbW34XjIlA8ULNuT_ejuyh5tPXIq8hvluiaNdBLw",
            },
          }
        );
        const data = res;
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
