const axios = require("axios");
import { useSerieStore } from "./stores/serie.js";

// Requêter un utilisateur avec un ID donné.
axios
  .get("/user?ID=12345")
  .then(function (response) {
    // en cas de réussite de la requête
    console.log(response);
  })
  .catch(function (error) {
    // en cas d’échec de la requête
    console.log(error);
  })
  .finally(function () {
    // dans tous les cas
  });
