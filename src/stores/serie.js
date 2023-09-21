import { defineStore } from "pinia";
import axios from "axios";

import { URL_OMD_API } from "../../key.js";

export const useSerieStore = defineStore("serie", {
  state: () => ({
    serie: [],
    showFullVideo: false,
  }),
  getters: {
    getSerie: (state) => state.serie,
  },
  actions: {
    async fetchSerie() {},
  },
});
