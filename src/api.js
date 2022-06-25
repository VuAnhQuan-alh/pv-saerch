import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://posome-developer-test.web.app/assets",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
  },
});

export const getBooks = () =>
  axiosClient
    .get("/books_1k.json")
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
