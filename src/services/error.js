const axios = require("axios");

const instance = axios.create({
  baseURL: "https://seola-api.herokuapp.com/"
});

function handleError(error) {
    if(error==403) {
        window.location.replace('/')
    }
}

module.exports = { handleError }