import axios from "axios";
import { BASE_URL } from "./http.config";

export const httpRequest = async (
  url: string,
  method: string,
  payload: unknown
) => {
  switch (method) {
    case "GET":
      const getResult = await axios
        .get(BASE_URL + url)
        .then((data) => {
          return data.data;
        })
        .catch((error) => {
          return error;
        });
      return getResult;

    case "POST":
      const postResult = await axios
        .post(BASE_URL + url, payload)
        .then((data) => {
          return data.data;
        })
        .catch((error) => {
          return error;
        });
      return postResult;

    case "PUT":
      const putResult = await axios
        .put(BASE_URL + url, payload)
        .then((data) => {
          return data.data;
        })
        .catch((error) => {
          return error;
        });
      return putResult;

    case "DELETE":
      const deleteResult = await axios
        .delete(BASE_URL + url)
        .then((data) => {
          return data.data;
        })
        .catch((error) => {
          return error;
        });
      return deleteResult;
  }
};
