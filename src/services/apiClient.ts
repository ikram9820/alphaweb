import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import useUser from "../hooks/useUser";
export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}
const user = useUser();

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    authorization: user?.token,
  },
});

class APIClient<T, R = T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  post = (data: T) => {
    console.log("posting data...", data);
    return axiosInstance
      .post<T, AxiosResponse<R>>(this.endpoint, data)
      .then((res) => res.data);
  };
}

export default APIClient;
