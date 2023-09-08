import { defineStore } from "pinia";

export const useSerieStore = defineStore("serie", {
  state: () => ({
    serie: [],
    showFullVideoSerie: false,
  }),
  actions: {
    async fetchSerie() {
      const res = await fetch(
        "https://moviesminidatabase.p.rapidapi.com/series/order/byPopularity/"
      );
      const data = await res.json();
      this.serie = data;
      console.log(data);

      return data;
    },
  },
  getters: {
    getSerie: (state) => state.serie,
  },
});
