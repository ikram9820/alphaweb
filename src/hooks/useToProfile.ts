import { useNavigate } from "react-router-dom";
import useUser from "./useUser";
import { useEffect } from "react";

function useToProfile() {
  const navigate = useNavigate();
  const user = useUser();
  console.log(user);
  useEffect(() => {
    if (user !== null) navigate("/profile");
  }, []);
  return user !== null;
}

export default useToProfile;
