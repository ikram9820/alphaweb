import axios from "axios";
import useUser from "../hooks/useUser";

const user = useUser();

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    authorization: user?.token,
    "Content-Type": "multipart/form-data",
  },
});

const post = <T>(profileId: number, data: T) => {
  const endpoint = `profiles/${profileId}/statuses`;
  return axiosInstance.post<T>(endpoint, data).then((res) => res.data);
};

export default { post };
