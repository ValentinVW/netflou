import { defineStore } from "pinia";
import axios from "axios";

import { keyOMDbAPI } from "../../key.js";

export const useSerieStore = defineStore("serie", {
  state: () => ({
    serie: [],
    showFullVideo: false,
  }),
  getters: {
    getSerie: (state) => state.serie,
  },
  actions: {
    async fetchSerie() {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?i=tt3896198&apikey=${keyOMDbAPI}`
        );
        const data = await res;
        this.serie = data;
        console.log(data);
        return data;
      } catch (error) {
        // en cas d’échec de la requête
        console.log(error);
      }
    },
  },
});
