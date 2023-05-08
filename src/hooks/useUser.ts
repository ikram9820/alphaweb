import { STORAGE_KEY_AUTH } from "../constants";
import { useEffect, useState } from "react";

const useUser = () => {
  const [user, setUser] = useState<string | null>("");

  useEffect(() => {
    setUser(localStorage.getItem(STORAGE_KEY_AUTH));
  }, []);

  return { user };
};

export default useUser;
