import axios from "axios";

const KEY = "AIzaSyAoA2bmWsYyoWttlwi9uQTwqvEPtGyLuuA";

export const baseParams = {
  part: "snippet",
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
