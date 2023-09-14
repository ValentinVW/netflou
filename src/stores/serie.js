import { defineStore } from "pinia";
import { API_KEY } from "../../key.js";

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
          "https://moviesminidatabase.p.rapidapi.com/series/order/byPopularity/",
          {
            headers: {
              "X-RapidAPI-Key": API_KEY,
              "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
            },
          }
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
