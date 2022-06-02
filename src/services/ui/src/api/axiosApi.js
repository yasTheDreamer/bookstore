import axios from "axios";

const http = (port) => {
  return axios.create({
    baseURL: `http://host.docker.internal:${port}/api`,
    headers: {
      "Content-type": "application/json",
    },
  });
};

export default http;
