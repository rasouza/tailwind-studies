import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://superheroapi.com/api/10206656563889581",
});

axios.interceptors.response.use(
  (response) => {
    const data = response.data;
    if (data.response === "error") throw new Error(data.error);
    return data;
  },
  (error) => Promise.reject(error)
);
