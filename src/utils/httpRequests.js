import axios from "axios";

export default axios.create({
  baseURL: "https://essay-arena.herokuapp.com/",
  responseType: "json"
});
