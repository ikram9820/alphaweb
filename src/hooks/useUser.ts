import { STORAGE_KEY_AUTH } from "../constants";
import jwtDecode from "jwt-decode";
const useUser = () => {
  const token = localStorage.getItem(STORAGE_KEY_AUTH);
  if (!token) return null;
  const { user_id } = jwtDecode<{ user_id: number }>(token);
  return { user_id, token };
};

export default useUser;
