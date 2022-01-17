const axios = require("axios");

const instance = axios.create({
  baseURL: "https://seola-api.herokuapp.com/"
});

let token = localStorage.getItem("token");

if (token) {
  token = JSON.parse(token);
  instance.defaults.headers.common = {
    Authorization: `Bearer ${token}`
  }
}

export default instance;
