const axios = require("axios");

const instance = axios.create({
  baseURL: "http://127.0.0.1:5000"
});

let token = localStorage.getItem("token");

if (token) {
  token = JSON.parse(token);
  instance.defaults.headers.common = {
    Authorization: `Bearer ${token}`
  }
}

export default instance;