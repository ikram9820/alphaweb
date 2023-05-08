import { STORAGE_KEY_AUTH } from "../constants";

const useUser = () => {
  return localStorage.getItem(STORAGE_KEY_AUTH);
};

export default useUser;
