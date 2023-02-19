import axios from "axios";
class Api {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  get(path) {
    return this.api.get(path);
  }

  post(path, params, headers = {}) {
    return this.api.post(path, params, headers);
  }

  put(path, params) {
    return this.api.put(path, params);
  }

  patch(path, params) {
    return this.api.patch(path, params);
  }

  delete(path) {
    return this.api.delete(path);
  }
}

const api = new Api();
export default api;
