import axios from "axios";

const KEY = process.env.REACT_APP_YOUTUBE_API;

export const baseParams = {
  part: "snippet",
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
