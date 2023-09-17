import axios from "axios";
import { clearLocalStorage } from "../utils/index.js";

class BaseServices {
  baseURL;
  http;
  configHeaders;

  constructor(configHeaders) {
    this.http = axios.create({
      baseURL: "http://localhost:8000/api/v1/",
    });
    this.baseURL = "http://localhost:8000/api/v1/";
    this.configHeaders = configHeaders;
    this.http.interceptors.request.use(
      async (config) => {
        const token = localStorage.getItem("accessToken") || "";
        config.headers = {
          "content-type": "application/json",
          "x-access-token": token,
        };
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
    this.http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;
        if (response) {
          switch (response.status) {
            case 401:
              clearLocalStorage();
              return;
            default:
              return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      }
    );
  }

  get(url, configHeaders) {
    return this.http.get(url, { ...configHeaders });
  }

  post(url, data, configHeaders) {
    return this.http.post(url, data, {
      ...configHeaders,
    });
  }

  put(url, data, configHeaders) {
    return this.http.put(url, data, {
      ...configHeaders,
    });
  }

  delete(url, configHeaders) {
    return this.http.delete(url, {
      ...configHeaders,
    });
  }
}

export default BaseServices;
