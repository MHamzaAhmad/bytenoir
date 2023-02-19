import axios from "axios";

class ImageService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "multipart/form-data",
      },
    });
  }

  uploadImage = (data) => {
    return this.api.post("/images/upload", data, {
      "Content-Type": "multipart/form-data",
    });
  };
}

const imageService = new ImageService();
export default imageService;
