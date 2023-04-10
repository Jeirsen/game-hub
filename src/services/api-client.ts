import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "15584718de904114b4296e1eb3b39ed7",
  },
});
