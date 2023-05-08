import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

class APIClient<T, R = T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = () => {
    return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
  };

  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };

  post = (data: T) => {
    console.log("posting data...", data);
    return axiosInstance
      .post<T, AxiosResponse<R>>(this.endpoint, data)
      .then((res) => res.data);
  };
}

export default APIClient;
