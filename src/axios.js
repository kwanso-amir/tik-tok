import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-clone-kwanso.herokuapp.com/",
});

export default instance;
